import mysql from "mysql2/promise";
import config from "@config/config.json" with { type: "json" };

export const db = mysql.createPool({
    host: config.database.host,
    user: config.database.user,
    database: config.database.db,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  });