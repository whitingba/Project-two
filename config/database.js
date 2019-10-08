var mysql = require('mysql');
var connection;
var Sequelize = require("sequelize");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '13Icancode!!!',
    database: "crud_db"
  });
}

module.exports = new Sequelize("crud_db", "root", "password", {
  host: "localhost",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
