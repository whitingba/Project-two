var db = require("../models");
//var sequelize = require('sequelize');

module.exports = (app) => {

    //Get route here for viewing all tasks by user

    app.get('/api/tasks', (req, res) => {
        var query = {};
        if (req.query.user_id) {
            query.UserId = req.query.user_id;
        }
        db.Task.findAll({
            where: query,
            include: [db.User]
        }).then((dbTask) => {
            res.json(dbTask);
        });
    });


    //POST route to add a new task
    app.post('/api/tasks', (req, res) => {
        console.log(req.body);
        db.Task.create(req.body)

            .then(dbTask => {
                res.json(dbTask);
            });

    });

    //DELETE route to delete a task
    app.delete('/api/tasks', (req, res) => {
        //  console.log(res);
        db.Task.destroy({
            where: {
                id: req.query.id
            }
        })
            .then(dbTask => {
                res.json(dbTask);
            });
    });

    //PUT route for updating a task
    app.put('/api/tasks', (req, res) => {
        db.Task.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then((dbTask) => {
                res.json(dbTask);
            });
    });


}