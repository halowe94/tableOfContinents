// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
//must add password and database name
var sequelize = new Sequelize("insert-dbName", "root", "insert-password", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 50,
    min: 0,
    idle: 15000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;