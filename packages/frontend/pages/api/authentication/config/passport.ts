import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as BearerStrategy } from "passport-http-bearer";
import { User } from "authentication/db/schema";

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email: string, password: string, done: any) {
      User.query()
        .where("email", email)
        .first()
        .eager("roles")
        .then(function (user: any) {
          if (!user) {
            return done("Unknown user");
          }
          if (!user.active) {
            return done("User is inactive");
          }
          user.verifyPassword(password, function (
            err: Error,
            passwordCorrect: boolean
          ) {
            if (err) {
              return done(err);
            }
            if (!passwordCorrect) {
              return done("Invalid password");
            }
            return done(null, user);
          });
        })
        .catch(function (err: Error) {
          done(err);
        });
    }
  )
);

passport.use(
  new BearerStrategy(function (token: string, done: any) {
    User.query()
      .where("token", token)
      .first()
      .eager("roles")
      .then(function (user: any) {
        if (!user) {
          return done("Invalid Token");
        }
        if (!user.active) {
          return done("User is inactive");
        }
        return done(null, user);
      })
      .catch(function (err: Error) {
        done(err);
      });
  })
);

export { passport };
