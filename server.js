
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

app.get('/', (req, res) => res.send('INDEX'));

var PORT = process.env.PORT || 3000;

app.listen(PORT, console.log("Server started on port ${PORT}"));


// Database  
var db = require("./config/database");

// Test DB
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch(err => console.log("Error: " + err))




// User routes
app.use("/users", require("./routes/user"));





// Middleware
//app.use(express.urlencoded({ extended: false }));
//app.use(express.json());
//app.use(express.static("public"));

// Handlebars
//app.engine(
  //"handlebars",
  //exphbs({
   // defaultLayout: "main"
  //})
//);
//app.set("view engine", "handlebars");

// Routes
//require("./routes/apiRoutes")(app);
//require("./routes/htmlRoutes")(app);

//var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
//if (process.env.NODE_ENV === "test") {
  //syncOptions.force = true;
//}

// Starting the server, syncing our models ------------------------------------/
//db.sequelize.sync(syncOptions).then(function() {
  //app.listen(PORT, function() {
    //console.log(
    //  "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
     // PORT,
     // PORT
    //);
  //});
//});

// module.exports = app;
