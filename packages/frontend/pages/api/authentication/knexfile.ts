const connectionUrl =
  process.env.DATABASE_URL || "postgres://postgres:@localhost:5432/postgres";

export default {
  client: "pg",
  connection: connectionUrl,
  migrations: {
    directory: __dirname + "/db/migrations",
  },
};
