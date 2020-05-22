import { Request, Response, NextFunction } from "express";
const { check, validationResult } = require("express-validator");
const { User, Role, UserRole } = require("authentication/db/schema");
const passport = require("authentication/config/passport");
const { errorHandler } = require("authentication/db/errors");

export default (req: Request, res: Response, next: NextFunction) => {
  if (req.method === "POST") {
    /**
     * POST /admin/signup
     * Create a new local admin account
     */

    const handleResponse = (res: Response, code: number, statusMsg: any) => {
      res.status(code).json(statusMsg);
    };

    const signUpUser = async (
      req: Request,
      res: any,
      next: NextFunction,
      userType: string
    ) => {
      check("email").isEmail();
      check("password").not().isEmpty();

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      try {
        await User.query().allowInsert("[email, password]").insert({
          email: req.body.email,
          password: req.body.password,
        });
      } catch (err) {
        errorHandler(err, res);

        return;
      }

      passport.authenticate("local", async (err: Error, user: any) => {
        if (err) {
          return handleResponse(res, 400, { error: err });
        }
        if (user) {
          const { id: userId } = await user.getUser();

          const { id: roleId } = await Role.query().findOne({
            name: userType,
          });

          await UserRole.query().insert({
            role_id: roleId,
            user_id: userId,
          });

          handleResponse(res, 200, user.getUser(userType));
        }
      })(req, res, next);
    };

    signUpUser(req, res, next, "admin");
  } else {
    res.statusCode = 401;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Route not found" }));
  }
};
