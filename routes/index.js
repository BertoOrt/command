var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI);
var dragonScript = db.get('users');
var bcrypt = require('bcryptjs');
var quotes = require('../public/javascripts/server.js');
var unirest = require('unirest');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/dragon', function(req, res, next) {
  res.render('dragon');
});

router.post('/dragon', function (req, res, next) {
  if (req.body.command === "logout") {
    res.clearCookie('name');
    res.clearCookie('lives');
    res.render('dragon', {loggedOut: "You are logged out"});
  }
  else if (req.body.command === "restart") {
    dragonScript.findOne({username: req.cookies.name}, function (err, data) {
      var level = data.level;
      dragonScript.update({username: req.cookies.name}, {$set : { level: 0}});
      res.redirect('/dragon/game');
    })
  }
  else if (req.body.command === "back") {
    dragonScript.findOne({username: req.cookies.name}, function (err, data) {
      var level = data.level;
      dragonScript.update({username: req.cookies.name}, {$set : { level: level > 0 ? --level : level}});
      res.redirect('/dragon/game');
    })
  }
  else {
    if (req.body.answer === "correct") {
      dragonScript.findOne({username: req.cookies.name}, function (err, data) {
        var level = data.level;
        if (level < 3) {
          dragonScript.update({username: req.cookies.name}, {$set : { level: ++level}});
          res.redirect('/dragon/game');
        }
        else {
          res.cookie('lives', 4);
          dragonScript.update({username: req.cookies.name}, {$set : { level: level === 3 ? ++level : level}});
          res.render('play', {level: data.level < 4 ? ++data.level : data.level, win: true})
        }
      })
    }
    else {
      dragonScript.findOne({username: req.cookies.name}, function (err, data) {
        var currentLives = --req.cookies.lives;
        res.cookie('lives', currentLives);
        if (currentLives > 1) {
          res.render('play', {level: data.level, quote: quotes.quotes[Math.floor(Math.random()*quotes.quotes.length)]})
        }
        else if (currentLives === 1) {
          res.render('play', {level: data.level, quote: "I'm losing patience. Ill give you one more try"})
        }
        else {
          res.cookie('lives', 4);
          res.render('game-over')
        }
      });
    }
  }
})

router.post('/', function (req, res, next) {
  if (req.body.command.indexOf("theme ") > -1) {
    var color = req.body.command.toLowerCase().replace('theme ', "");
    res.cookie('theme', color);
    res.redirect('/');
  }
  else if (req.body.command.indexOf('top r ') > -1) {
    var subreddit = req.body.command.toLowerCase().replace('top r ', "");
    unirest.get('https://www.reddit.com/r/' + subreddit + '/.json')
    .end(function (response) {
      console.log(response.body.data.children[0].title);
      res.render('index', {subreddit: response.body.data.children});
    });
  }
})

router.post('/game-over', function (req, res, next) {
  res.redirect('/dragon');
})

router.post('/dragon/login', function (req, res, next) {
  dragonScript.findOne({username: req.body.name.toLowerCase()}, function(err, data) {
    if (data === null) {
      res.render('login', {error: "Invalid name, try again"})
    }
    else {
      if (bcrypt.compareSync(req.body.password, data.password)) {
        res.cookie('name', req.body.name.toLowerCase());
        res.cookie('lives', 3);
        res.redirect('/dragon/game');
      }
      else {
        res.render('login', {error: "Incorrect password, try again"})
      }
    }
  });
})

router.post('/dragon/delete', function (req, res, next) {
  dragonScript.findOne({username: req.body.name.toLowerCase()}, function(err, data) {
    if (data === null) {
      res.render('delete', {error: "Invalid name, try again"})
    }
    else {
      if (bcrypt.compareSync(req.body.password, data.password)) {
        dragonScript.remove({username: req.body.name.toLowerCase()})
        res.clearCookie('name');
        res.clearCookie('lives');
        res.render('dragon', {loggedOut: "Your account has been deleted"});
      }
      else {
        res.render('delete', {error: "Incorrect password, try again"})
      }
    }
  });
})

router.post('/dragon/signup', function (req, res, next) {
  dragonScript.findOne({username: req.body.name.toLowerCase()}, function(err, data) {
    if (data === null) {
      var hash = bcrypt.hashSync(req.body.password, 8);
      res.cookie('name', req.body.name.toLowerCase());
      res.cookie('lives', 3);
      dragonScript.insert({username: req.body.name.toLowerCase(), password: hash,  level: 0})
      res.redirect('/dragon/game');
    }
    else {
      var error = "error: name already exists";
      res.render('signup', {error: error, place: 1})
    }
  });
})

router.get('/dragon/signup', function (req, res, next) {
  res.render('signup')
})

router.get('/dragon/login', function (req, res, next) {
  res.render('login')
})

router.get('/dragon/delete', function (req, res, next) {
  res.render('delete')
})

router.get('/dragon/game', function (req, res, next) {
  if (req.cookies.name === undefined || req.cookies.name === undefined) {
    res.render('dragon', {loggedOut: "You are logged out"})
  }
  else {
    dragonScript.findOne({username: req.cookies.name}, function (err, data) {
    res.render('play', {level: data.level, win: data.level === 4 ? true : undefined});
    })
  }
})

module.exports = router;
