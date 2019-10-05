var db = require("../models");
var path = require("path");

module.exports = function(app) {
  //*************LOGIN PAGE***********/
  // Load login page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
    //res.render("login");
  });
  app.get("/js/login.js/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/js/login.js"));
    // res.render("addtask");
  });

  //*************SIGNUP PAGE***********/
  // Load signup page
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
    //res.render("signup");
  });
  app.get("/js/signup.js/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/js/signup.js"));
    // res.render("addtask");
  });

  //*************ADD TASK***********/
  // Load add task page
  app.get("/add/task", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/addtask.html"));
    // res.render("addtask");
  });
  app.get("/js/addtask.js/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/js/addtask.js"));
    // res.render("addtask");
  });

  //*************ADD USER***********/
  //Load add user page
  app.get("/add/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/adduser.html"));
  });
  app.get("/js/adduser.js/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/js/adduser.js"));
    // res.render("addtask");
  });

  //*************EDIT TASK***********/
  app.get("/edit/task/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/edittask.html"));
    //res.render("edittask");
  });
  app.get("/js/edittask.js/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/js/edittask.js"));
    // res.render("addtask");
  });

  //*************EDIT USER***********/
  //To load edit user page
  app.get("/edit/user/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/edituser.html"));
    //res.render("edittask");
  });

  app.get("/js/edituser.js/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/js/edituser.js"));
    // res.render("addtask");
  });

  //TODO: Take a harder look at these 2 edit task pages  they both go to edittask handlebars
  //Load the addtask page with datapopulated so the user can edit
  // app.get("/edit/task/:taskid", function (req, res) {

  //   res.render("addtask");
  // });

  //*************LIST TASKS***********/
  //Load list all tasks page
  app.get("/list/task", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/listtask.html"));
    //res.render("listtask");
  });
  app.get("/js/listtask.js/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/js/listtask.js"));
    // res.render("addtask");
  });

  //*************LIST USERS***********/
  app.get("/list/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/listuser.html"));
    //res.render("listtask");
  });
  app.get("/js/listuser.js/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/js/listuser.js"));
    // res.render("addtask");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/404.html"));
  });
};

//NOTE://///////////     Keeping all this just incase we might need it     ////////////////////
//   // Load task page and pass in an example by id
//   app.get("/task/:id", function (req, res) {
//     db.Tasks.findOne({ where: { id: req.params.id } }).then(function (dbTasks) {
//       res.render("task", {
//         tasks: dbTasks
//       });
//     });
//   });

//   // Render 404 page for any unmatched routes
//   app.get("*", function (req, res) {
//     res.render("404");
//   });
// };

// // Index route to pull all tasks loads file.html
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/ADDFILENAME????.html"));
// });

// // add route loads the add.html page, where users can enter new tasks to the db
// app.get("/add", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/ADDFILENAME????.html"));
// });

// // outdoor route loads the outdoor.html page, where outdoor tasks in the db are displayed
// app.get("/outdoor", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/ADDFILENAME?????.html"));
// });

// // indoor route loads the indoor.html page, where outdoor tasks in the db are displayed
// app.get("/indoor", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/ADDFILENAME?????.html"));
// });

// // user route loads the user.html page, where user tasks in the db are displayed
// app.get("/user", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/ADDFILENAME?????.html"));
// });

// // login route loads the login.html page, where user can log in the db are displayed
// app.get("/login", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/ADDFILENAME?????.html"));
// });
