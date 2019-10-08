var db = require("../models");
var sequelize = require('sequelize');

module.exports = (app) => {

    //Get route here for viewing all available custom tasks

    app.get('/api/defined/', (req, res) => {

        db.DefinedTask.findAll({})
            .then((dbDefinedTask) => {
                res.json(dbDefinedTask);
            });
    });


}