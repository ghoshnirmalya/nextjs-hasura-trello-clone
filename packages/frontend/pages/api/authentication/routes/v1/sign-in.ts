import { Request, Response, NextFunction } from "express";
const { check, validationResult } = require("express-validator");
const { Role, UserRole } = require("authentication/db/schema");
const { passport } = require("authentication/config/passport");

export default (req: Request, res: Response, next: NextFunction) => {
  if (req.method === "POST") {
    /**
     * Sign in using email and password and returns JWT
     */

    const handleResponse = (res: Response, code: number, statusMsg: any) => {
      res.status(code).json(statusMsg);
    };

    const signInUser = async (req: Request, res: any, next: NextFunction) => {
      check("email").isEmail();
      check("password").not().isEmpty();

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      passport.authenticate("local", async (err: Error, user: any) => {
        if (err) {
          return handleResponse(res, 400, { error: err });
        }
        if (user) {
          const { id: userId } = await user.getUser();

          const { role_id: userRoleId } = await UserRole.query().findOne({
            user_id: userId,
          });

          const userRole = await Role.query().findOne({
            id: userRoleId,
          });

          handleResponse(res, 200, user.getUser(userRole.name));
        }
      })(req, res, next);
    };

    signInUser(req, res, next);
  } else {
    res.statusCode = 401;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Route not found" }));
  }
};
