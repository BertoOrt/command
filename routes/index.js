var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI);
var dragonScript = db.get('users');


router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/dragon', function(req, res, next) {
  res.render('dragon');
});

router.post('/dragon', function (req, res, next) {
  res.redirect('/dragon');
})

router.post('/', function (req, res, next) {
  res.redirect('/');
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
