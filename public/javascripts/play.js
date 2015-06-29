var theme = cookieParser(document.cookie).theme;
var input = document.querySelector('input.command');

if (theme === "white") {
  input.style.background = theme;
  document.body.style.background = theme;
  document.body.style.color = "black";
  input.style.color = "black";
  input.value = "";
}
else if (theme === "hacker") {
  input.style.background = "black";
  document.body.style.background = "black";
  document.body.style.color = "#00FF00";
  input.style.color = "#00FF00";
  input.value = "";
}
else if (theme === "black") {
  input.style.background = theme;
  document.body.style.background = theme;
  document.body.style.color = "white";
  input.style.color = "white";
  input.value = "";
}
else {
  input.style.background = theme;
  document.body.style.background = theme;
  input.value = "";
}

var welcome = document.querySelector('.welcome');
var p = document.createElement('p');
welcome.appendChild(p);
p.className = "welcome";
p.innerHTML = "Welcome " + cookieParser(document.cookie).name;

var level = parseInt(document.querySelector('.invisible').innerHTML);
var container = document.querySelector('.log');
var div = document.createElement('div');
var pre = document.createElement('pre');
div.className = "prompt";
container.appendChild(div);
div.appendChild(pre);
pre.innerHTML = quest[level];
input.value = "";

if (level > 0) {
  var welcome = document.querySelector('.welcome');
  welcome.style.display = "none";
}

var lives = cookieParser(document.cookie).lives;

input.addEventListener('blur',function(){
   this.focus();
});

document.querySelector('#input-form').addEventListener('submit', function (e) {

  if (input.value.trim() === "clear") {
    var container = document.getElementsByClassName('dragonQuotes');
    var max = container.length;
    for (var i = 0; i < max; i++) {
      container[0].remove();
    }
    input.value = "";
    e.preventDefault();
  }

  else if (input.value.trim() === "help") {
    var container = document.querySelector('.parent');
    var div = document.createElement('div');
    div.className = "dragonQuotes";
    div.innerHTML = parser(dragonHelp);
    container.appendChild(div);
    input.value = "";
    e.preventDefault();
  }

  else if (input.value.trim() === "quit") {
    window.location.replace("/dragon");
    e.preventDefault();
  }

  else if (input.value.trim() === "dragon website") {
    var container = document.querySelector('.parent');
    var div = document.createElement('div');
    var img = document.createElement('img');
    div.className = "dragonQuotes";
    img.src = "/images/dragonSite.png";
    img.width = "600"
    img.height = "400"
    div.appendChild(img);
    container.appendChild(div);
    input.value = "";
    e.preventDefault();
  }

  else if (input.value.trim() === "restart") {

  }

  else if (input.value.trim() === "back") {

  }

  else if (input.value.trim() === "logout") {

  }

  else if (level === 0 && input.value.trim() === "0") {
    var answer = document.querySelector('.answer');
    answer.value = "correct";
  }

  else if (level === 1 && input.value.trim() === "['fizz']") {
    var answer = document.querySelector('.answer');
    answer.value = "correct";
  }

  else if (level === 2 && input.value.trim() === "undefined") {
    var answer = document.querySelector('.answer');
    answer.value = "correct";
  }

  else if (level === 3 && input.value.trim() === "'salt, human eyes, salt'") {
    var answer = document.querySelector('.answer');
    answer.value = "correct";
  }

  else if (level === 4) {
    var container = document.querySelector('.parent');
    var div = document.createElement('div');
    div.className = "dragonQuotes";
    div.innerHTML = input.value + ": command not found";
    container.appendChild(div);
    input.value = "";
    e.preventDefault();
  }

})
