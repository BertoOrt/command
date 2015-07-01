var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI);
var dragonScript = db.get('users');
var bcrypt = require('bcryptjs');
var quotes = require('../public/javascripts/server.js');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function (req, res, next) {
  if (req.body.command.indexOf("theme ") > -1) {
    var color = req.body.command.toLowerCase().replace('theme ', "");
    res.cookie('theme', color);
    res.redirect('/');
  }
})

module.exports = router;
