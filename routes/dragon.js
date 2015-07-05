var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI);
var dragonScript = db.get('users');
var bcrypt = require('bcryptjs');
var quotes = require('../public/javascripts/server.js');

router.get('/dragon', function(req, res, next) {
  res.render('dragon/index');
});

router.post('/dragon', function (req, res, next) {
  if (req.body.command === "logout") {
    res.clearCookie('name');
    res.clearCookie('lives');
    res.render('dragon/index', {loggedOut: "You are logged out"});
  }
  else if (req.body.command === "restart") {
    dragonScript.findOne({username: req.cookies.username}, function (err, data) {
      var level = data.level;
      dragonScript.update({username: req.cookies.username}, {$set : { level: 0}});
      res.redirect('/dragon/game');
    })
  }
  else if (req.body.command === "back") {
    dragonScript.findOne({username: req.cookies.username}, function (err, data) {
      var level = data.level;
      dragonScript.update({username: req.cookies.username}, {$set : { level: level > 0 ? --level : level}});
      res.redirect('/dragon/game');
    })
  }
  else {
    if (req.body.answer === "correct") {
      dragonScript.findOne({username: req.cookies.username}, function (err, data) {
        var level = data.level;
        if (level < 5) {
          dragonScript.update({username: req.cookies.username}, {$set : { level: ++level}});
          res.cookie('lives', 3);
          res.redirect('/dragon/game');
        }
        else {
          res.cookie('lives', 3);
          res.cookie('finished', "yes");
          dragonScript.update({username: req.cookies.username}, {$set : { level: level === 4 ? ++level : level, finished: true}});
          res.render('dragon/play', {level: data.level < 5 ? ++data.level : data.level, win: true})
        }
      })
    }
    else {
      dragonScript.findOne({username: req.cookies.username}, function (err, data) {
        var currentLives = --req.cookies.lives;
        res.cookie('lives', currentLives);
        if (currentLives > 1) {
          res.render('dragon/play', {level: data.level, quote: quotes.quotes[Math.floor(Math.random()*quotes.quotes.length)] + ". I'll give you " + currentLives + " more tries."})
        }
        else if (currentLives === 1) {
          res.render('dragon/play', {level: data.level, quote: "I'm losing patience. Ill give you one more try"})
        }
        else {
          res.cookie('lives', 3);
          res.render('dragon/game-over')
        }
      });
    }
  }
})

router.post('/game-over', function (req, res, next) {
  res.redirect('/dragon');
})

router.post('/dragon/login', function (req, res, next) {
  dragonScript.findOne({username: req.body.name.toLowerCase()}, function(err, data) {
    if (data === null) {
      res.render('dragon/login', {error: "Invalid name, try again"})
    }
    else {
      if (bcrypt.compareSync(req.body.password, data.password)) {
        res.cookie('username', req.body.name.toLowerCase());
        res.cookie('lives', 3);
        if (data.finished === true) {
          res.cookie('finished', "yes");
        }
        res.redirect('/dragon/game');
      }
      else {
        res.render('dragon/login', {error: "Incorrect password, try again"})
      }
    }
  });
})

router.post('/dragon/delete', function (req, res, next) {
  dragonScript.findOne({username: req.body.name.toLowerCase()}, function(err, data) {
    if (data === null) {
      res.render('dragon/delete', {error: "Invalid name, try again"})
    }
    else {
      if (bcrypt.compareSync(req.body.password, data.password)) {
        dragonScript.remove({username: req.body.name.toLowerCase()})
        res.clearCookie('username');
        res.clearCookie('lives');
        res.render('dragon/index', {loggedOut: "Your account has been deleted"});
      }
      else {
        res.render('dragon/delete', {error: "Incorrect password, try again"})
      }
    }
  });
})

router.post('/dragon/signup', function (req, res, next) {
  dragonScript.findOne({username: req.body.name.toLowerCase()}, function(err, data) {
    if (data === null) {
      var hash = bcrypt.hashSync(req.body.password, 8);
      res.cookie('username', req.body.name.toLowerCase());
      res.cookie('lives', 3);
      dragonScript.insert({username: req.body.name.toLowerCase(), password: hash,  level: 0})
      res.redirect('/dragon/game');
    }
    else {
      var error = "error: name already exists";
      res.render('dragon/signup', {error: error, place: 1})
    }
  });
})

router.get('/dragon/signup', function (req, res, next) {
  res.render('dragon/signup')
})

router.get('/dragon/login', function (req, res, next) {
  res.render('dragon/login')
})

router.get('/dragon/delete', function (req, res, next) {
  res.render('dragon/delete')
})

router.get('/dragon/game', function (req, res, next) {
  if (req.cookies.username === undefined || req.cookies.lives === undefined) {
    res.render('dragon/index', {loggedOut: "You are logged out"})
  }
  else {
    dragonScript.findOne({username: req.cookies.username}, function (err, data) {
      res.render('dragon/play', {level: data.level, win: data.level === 5 ? true : undefined});
    })
  }
})

module.exports = router;
