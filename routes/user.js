var express = require("express");
var router = express.Router();
var db = require("../config/database");
var User = require("../models/user");

//  This will get user list
router.get("/", (req, res) => 
   User.findAll()
   .then(users => {
    console.log(users)
    res.sendStatus(200);
 })
   .catch(err => console.log(err)));


// This route will add a user = where we add our post request
router.get("/add", (req, res) => {
    var data = {
        user_name: "Oby1",
        contact_email: "user1@gmail.com"
    }
var {user_name, contact_email} = data;

//insert into table
User.create({
    user_name,
    contact_email 
})
 .then(gig => res.redirect("/users"))
 .catch(err => console.log(err));

});

module.exports = router;