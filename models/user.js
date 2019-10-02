var Sequelize = require("sequelize");

var db = require("../config/database");

var User = db.define("user", {
    user_name: {
      type: Sequelize.STRING
    },
    contact_email: {
      type: Sequelize.STRING
      }
})


module.exports = User;
