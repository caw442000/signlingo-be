/*
** This file and the folder that it is in was generated by the
** Node Package dukeapi found at: https://www.npmjs.com/package/dukeapi
**
** Version: 1.0.0
** Author: David H. Isakson II
** License: MIT
** Github: https://github.com/ikeman32/duke-api-wauth
** Contact: david.isakson.ii@gmail.com
*/

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/data.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./database/test.db3",
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  }
};