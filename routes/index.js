var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI);
var dragonScript = db.get('users');
var bcrypt = require('bcryptjs');


router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/dragon', function(req, res, next) {
  res.render('dragon');
});

router.post('/dragon', function (req, res, next) {
  res.clearCookie('name');
  res.clearCookie('lives');
  res.render('dragon', {loggedOut: "You are logged out"});
})

router.post('/', function (req, res, next) {
  res.redirect('/');
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

router.get('/dragon/game', function (req, res, next) {
  if (req.cookies.name === undefined) {
    res.render('dragon', {loggedOut: "You are logged out"})
  }
  else {
    res.render('play');
  }
})



//
// router.post('/', function(req,res,next) {
//   var command = req.body.command;
//   if ( line === "web-unix:~/dragonScript $" && command.toLowerCase() === "draw sword") {
//     res.redirect('/dragon');
//   }
//   else if( line === "web-unix:~/dragonScript $" && command.indexOf("login ") > -1) {
//     var name = command.replace("login ", "").toLowerCase();
//     dragonScript.findOne({name: name.toLowerCase()}, function(err, data) {
//       if (data === null) {
//         results.push("error: name not found");
//         res.redirect('/');
//       }
//       else {
//         res.redirect('/dragon/' + name);
//       }
//     });
//   }
//   else {
//     if (command === "clear") {
//       results = ["All clear. Type help for assistance."]
//     }
//     else if (command === "help") {
//       results.push(fun.parser(messages.help))}
//     else if (command.indexOf("top -r ") > -1) {
//       results.push(fun.request(command))
//     }
//     else if (command === "dragon") {
//       var trueDragon = (dragonStory.dragon);
//       line = "web-unix:~/dragonScript $";
//       results.push(trueDragon.join("<br>") + "<br>if this is your first time, draw sword to begin<br>" + "or login (name) to begin");
//     }
//     else if( line === "web-unix:~/dragonScript $" && command.toLowerCase() !== "draw sword") {
//       results.push(command + ": command not found<br>" + "type dragon to re-enter")
//       line = "web-unix:~/workspace $";
//     }
//     else if (command === "test") {
//       results.push(dragonStory.test)
//     }
//     else {
//       results.push(command + ": command not found");
//       };
//     res.redirect('/')
//   }
// })

module.exports = router;
