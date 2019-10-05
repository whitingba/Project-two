var db = require("../models");
//var sequelize = require('sequelize');

module.exports = (app) => {

    //Get route here for viewing all users by name

    app.get('/api/users', (req, res) => {
        // var query = {};
        // if (req.query.user_id) {
        //     query.NameId = req.query.user_id;
        // }
        db.User.findAll({

            // include: [db.Task]
        }).then((dbUser) => {
            res.json(dbUser);
        });
    });


    //POST route to add a new user
    app.post('/api/users', (req, res) => {
        console.log(req.body);
        db.User.create(req.body)

            .then(dbUser => {
                res.json(dbUser);
            });

    });

    //DELETE route to delete a user
    app.delete('/api/users/:id', (req, res) => {
        console.log(req.params);
        db.User.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(dbUser => {
                res.json(dbUser);
            });
    });

    //PUT route for updating a user
    app.put('/api/users', (req, res) => {
        db.User.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then((dbUser) => {
                res.json(dbUser);
            });
    });


}