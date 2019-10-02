// Import the model to use its database functions.
var db = require("../models");

module.exports = function (app) {
    //****************ALL TASK ROUTES (BARBARA)***************/
    // GET route for getting all of the tasks "List All Tasks page"
    app.get("/", function (req, res) {
        db.Task.findAll({
            order: [
                ['task', 'ASC'],
            ],
            include: [
                {
                    model: db.User
                }
            ],
        }).then(function (tasks) {
            // We have access to the tasks as an argument inside of the callback function
            console.log(tasks);
            db.Users.findAll().then(function (users) {
                res.render("index", { tasks, users });
            });

        });
    });

    //Route to add new task
    app.post("/api/tasks", function (req, res) {
        db.Task.create({
            task: req.body.task,
            frequency: req.body.frequency,
            UserId: req.body.UserId
        }).then(function (results) {
            res.json(results);
        }).catch(function (error) {
            return res.status(500).send(error);
        });
    });


    //Route to Edit frequency of assigned tasks tasks
    app.put("/api/tasks/:id", function (req, res) {
        var condition = "id = " + req.params.id;

        db.Task.update({
            frequency: req.body.frequency,
        }, {
            where: {
                id: req.params.id
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    //Route to Edit task itself of assigned tasks tasks
    app.put("/api/tasks/:id", function (req, res) {
        var condition = "id = " + req.params.id;

        db.Task.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }).then(function (results) {
                res.json(results);
            });
    });

    //delete tasks
    app.delete("/api/tasks/:id", function (req, res) {
        var condition = "id = " + req.params.id;

        db.Task.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (results) {
            res.json(results);
        });
    });
}