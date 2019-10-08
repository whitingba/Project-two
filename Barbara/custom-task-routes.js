var db = require("../models");
//var sequelize = require('sequelize');

module.exports = (app) => {

    //Get route here for viewing all available custom tasks

    app.get('/api/custom/tasks', (req, res) => {

        db.CustomTask.findAll({

        }).then((dbCustomTask) => {
            res.json(dbCustomTask);
        });
    });


}