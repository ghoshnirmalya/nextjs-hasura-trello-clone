import { Request, Response, NextFunction } from "express";
const rasha = require("rasha");
const jwtConfig = require("authentication/config/jwt");

export default (req: Request, res: Response, next: NextFunction) => {
  if (req.method === "POST") {
    res.statusCode = 401;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Route not found" }));
  } else {
    /**
     * Sends the JWT key set
     */

    const handleResponse = (res: Response, code: number, statusMsg: any) => {
      res.status(code).json(statusMsg);
    };

    const getJwks = async (req: Request, res: Response) => {
      const jwk = {
        ...rasha.importSync({ pem: jwtConfig.publicKey }),
        alg: "RS256",
        use: "sig",
        kid: jwtConfig.publicKey,
      };
      const jwks = {
        keys: [jwk],
      };

      handleResponse(res, 200, jwks);
    };

    getJwks(req, res);
  }
};
