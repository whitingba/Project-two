var db = require("../models");

var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Tasks.findAll({}).then(function(dbTasks) {
      res.render("index", {
        msg: "Welcome!",
        tasks: dbTasks
      });
    });
  });

  // Load task page and pass in an example by id
  app.get("/task/:id", function(req, res) {
    db.Tasks.findOne({ where: { id: req.params.id } }).then(function(dbTasks) {
      res.render("task", {
        tasks: dbTasks
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

// Index route to pull all tasks loads file.html
 app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/ADDFILENAME????.html"));
});

  // add route loads the add.html page, where users can enter new tasks to the db
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/ADDFILENAME????.html"));
  });

  // outdoor route loads the outdoor.html page, where outdoor tasks in the db are displayed
  app.get("/outdoor", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/ADDFILENAME?????.html"));
  });

  // indoor route loads the indoor.html page, where outdoor tasks in the db are displayed
  app.get("/indoor", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/ADDFILENAME?????.html"));
  });

  // user route loads the user.html page, where user tasks in the db are displayed
  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/ADDFILENAME?????.html"));
  });

  // login route loads the login.html page, where user can log in the db are displayed
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/ADDFILENAME?????.html"));
  });

