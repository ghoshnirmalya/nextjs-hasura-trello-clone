import { Request, Response, NextFunction } from "express";

const passport = require("../../config/passport");

export default (req: Request, res: Response, next: NextFunction) => {
  if (req.method === "POST") {
    res.statusCode = 401;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Route not found" }));
  } else {
    const handleResponse = (res: Response, code: number, statusMsg: any) => {
      res.status(code).json(statusMsg);
    };

    const getWebhook = async (
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      passport.authenticate("bearer", (err: Error, user: any) => {
        if (err) {
          return handleResponse(res, 401, { error: err });
        }
        if (user) {
          handleResponse(res, 200, user.getHasuraClaims());
        } else {
          handleResponse(res, 200, { "X-Hasura-Role": "anonymous" });
        }
      })(req, res, next);
    };

    getWebhook(req, res, next);
  }
};
