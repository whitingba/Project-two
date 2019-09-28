var db = require("../models");

module.exports = function(app) {
  // Get all taskss
  app.get("/api/tasks", function(req, res) {
    db.tasks.findAll({}).then(function(dbtasks) {
      res.json(dbtasks);
    });
  });

  // Create a new tasks
  app.post("/api/tasks", function(req, res) {
    db.tasks.create(req.body).then(function(dbtasks) {
      res.json(dbtasks);
    });
  });

  // Delete an tasks by id
  app.delete("/api/tasks/:id", function(req, res) {
    db.tasks.destroy({ where: { id: req.params.id } }).then(function(dbtasks) {
      res.json(dbtasks);
    });
  });

// Update an existing task
 // PUT route for updating tasks. We can get the updated tasks data from req.body
 app.put("/api/tasks", function(req, res) {
  db.tasks.update({
    text: req.body.text,
    complete: req.body.complete
  }, {
    where: {
      id: req.body.id
    }
  }).then(function(dbTasks) {
    res.json(dbTodo);
  })
    .catch(function(err) {
      res.json(err);
    });
});
};