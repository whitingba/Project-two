var express = require("express");
var router = express.Router();
var db = require("../config/database");
var User = require("../models/user");

router.get("/", (req, res) => 
   User.findAll()
   .then(users => {
    console.log(users)
    res.sendStatus(200);
 })
   .catch(err => console.log(err)));

module.exports = router;