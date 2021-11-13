const { Client } = require("pg");
const { dbConfig } = require("../config/config");
const { username, database, password, host, port } = dbConfig;
const { createUserTable } = require("./UserTableDefinition");

const db = new Client({
  user: username,
  host,
  database,
  password,
  port
});

module.exports = {
  db,
  createUserTable
};
