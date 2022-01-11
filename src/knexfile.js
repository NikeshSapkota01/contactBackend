require("dotenv").config({ path: __dirname + "/../.env" });

// Default configuration for database connection
let connection = {
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  charset: "utf8",
  timezone: "UTC",
};

module.exports = {
  connection,
  client: process.env.DB_CLIENT,
  timeout: 5000,
  pool: { min: 1, max: 7 },
  migrations: {
    tableName: "migrations",
    directory: "./migrations",
    stub: "./stubs/migration.stub",
  },
  seeds: {
    directory: "./seeds",
    stub: "./stubs/seed.stub",
  },
};

// module.exports = {
//   development: {
//     client: "postgresql",
//     connection: {
//       database: "contactManager",
//       user: "postgres",
//       password: "admin",
//     },
//     pool: {
//       min: 2,
//       max: 10,
//     },
//     migrations: {
//       tableName: "knex_migrations",
//     },
//   },
// };
