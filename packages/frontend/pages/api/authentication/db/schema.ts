// @ts-nocheck

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Knex from "knex";
import { key } from "authentication/config/jwt";

const { Model } = require("objection");

// Knex configuration
const knexConfig = {
  client: "pg",
  connection: process.env.DATABASE_URL,
};

const knexConnection = Knex(knexConfig);

Model.knex(knexConnection);

// Model definitions
class Role extends Model {
  static get tableName() {
    return "role";
  }

  static get idColumn() {
    return "id";
  }
}

class UserRole extends Model {
  static get tableName() {
    return "user_role";
  }

  static get idColumn() {
    return "id";
  }
}

class User extends Model {
  static get tableName() {
    return "user";
  }

  static get idColumn() {
    return "id";
  }

  static get relationMappings() {
    return {
      roles: {
        relation: Model.ManyToManyRelation,
        modelClass: Role,
        join: {
          from: "user.id",
          through: {
            from: "user_role.user_id",
            to: "user_role.role_id",
          },
          to: "role.id",
        },
      },
    };
  }

  getRoles() {
    return this.roles.map((el: { name: string }) => el.name).concat("user");
  }

  getUser(role = "") {
    return {
      id: this.id,
      email: this.email,
      token: this.getJwt(role),
    };
  }

  getHasuraClaims(role: string) {
    return {
      "x-hasura-allowed-roles": ["admin", "user"],
      "x-hasura-default-role": role,
      "x-hasura-user-id": `${this.id}`,
    };
  }

  getJwt(role: string) {
    const signOptions = {
      subject: this.id,
      expiresIn: "30d",
      algorithm: "RS256",
    };
    const claim = {
      name: this.email,
      "https://hasura.io/jwt/claims": this.getHasuraClaims(role),
    };
    return jwt.sign(claim, key, signOptions);
  }

  async $beforeInsert() {
    const salt = bcrypt.genSaltSync();
    this.password = await bcrypt.hash(this.password, salt);
  }

  verifyPassword(password: string, callback: any) {
    bcrypt.compare(password, this.password, callback);
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["email"],
      properties: {
        id: { type: "integer" },
        email: { type: "string", minLength: 1, maxLength: 255 },
      },
    };
  }
}

export { User, Role, UserRole };
