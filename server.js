
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var path = require("path");
//Passport is being used for user authentication
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

var app = express();

//Obi's code
//app.get('/', (req, res) => res.send('INDEX'));

var PORT = process.env.PORT || 3000;

//***********for user auth*******************
// passport.use(new GoogleStrategy({
//   consumerKey: GOOGLE_CONSUMER_KEY,
//   consumerSecret: GOOGLE_CONSUMER_SECRET,
//   callbackURL: "http://www.example.com/auth/google/callback"
// },
//   function (token, tokenSecret, profile, done) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
//   })
// );

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Obi's code
//app.listen(PORT, console.log("Server started on port ${PORT}"));

//Obi's code
// Database  
//var db = require("./config/database");
var db = require("./models");

//Obi's code
// Test DB
// db.authenticate()
//   .then(() => console.log("Database connected..."))
//   .catch(err => console.log("Error: " + err))



//Obi's code
// User routes
//app.use("/users", require("./routes/user"));

//Routes
require("./routes/task-apiRoutes")(app);
require("./routes/user.apiRoutes")(app);
require("./routes/htmlRoutes")(app);



// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");



var syncOptions = { force: true };

//If running a test, set syncOptions.force to true
//clearing the`testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/

db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;

