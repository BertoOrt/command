var welcome = document.querySelector('.welcome');
var p = document.createElement('p');
welcome.appendChild(p);
p.className = "welcome";
p.innerHTML = "Welcome back " + cookieParser(document.cookie).name;

var level = parseInt(document.querySelector('.invisible').innerHTML);
var container = document.querySelector('.parent');
var div = document.createElement('div');
var pre = document.createElement('pre');
div.className = "prompt";
container.appendChild(div);
div.appendChild(pre);
pre.innerHTML = quest[level];
input.value = "";

var input = document.querySelector('input.command');
var lives = 4;

input.addEventListener('blur',function(){
   this.focus();
});

document.querySelector('#input-form').addEventListener('submit', function (e) {

  if (input.value === "clear") {
    var container = document.getElementsByClassName('dragonQuotes');
    var max = container.length;
    for (var i = 0; i < max; i++) {
      container[0].remove();
    }
    input.value = "";
    e.preventDefault();
  }

  else if (input.value === "help") {
    var container = document.querySelector('.parent');
    var div = document.createElement('div');
    div.className = "dragonQuotes";
    div.innerHTML = parser(dragonHelp);
    container.appendChild(div);
    input.value = "";
    e.preventDefault();
  }

  else if (input.value === "quit") {
    window.location.replace("/dragon");
    e.preventDefault();
  }

  else if (input.value === "dragon website") {
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

  else if (input.value === "restart") {

  }

  else if (level === 0 && input.value === "0") {

  }

  else if (level === 1 && input.value === "['fizz']") {

  }

  else if (level === 2 && input.value === "undefined") {

  }

  else if (level === 3 && input.value === "'human tears, human bones, human tears'") {

  }

  else if (input.value === "logout" || level === 4) {

  }

  else {
    if (lives === 1) {
      var container = document.querySelector('.parent');
      var div = document.createElement('div');
      div.className = "dragonQuotes";
      div.innerHTML = "Careful, I've almost lost all patience";
      container.appendChild(div);
      input.value = "";
      lives --;
      e.preventDefault();
    }
    else {
      var container = document.querySelector('.parent');
      var div = document.createElement('div');
      div.className = "dragonQuotes";
      div.innerHTML = quotes[Math.floor(Math.random()*quotes.length)];
      container.appendChild(div);
      input.value = "";
      lives--;
      e.preventDefault();
    }
  }

})
