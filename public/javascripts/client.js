var input = document.querySelector('input.command');
var theme = cookieParser(document.cookie).theme;

if (theme === "white") {
  input.style.background = theme;
  document.body.style.background = theme;
  document.body.style.color = "black";
  input.style.color = "black";
  input.value = "";
}
else if (theme === "black") {
  input.style.background = theme;
  document.body.style.background = theme;
  document.body.style.color = "white";
  input.style.color = "white";
  input.value = "";
}
else if (theme === "party") {
  var container = document.querySelector('.ballon');
  var div = document.createElement('div');
  var img = document.createElement('img');
  div.className = "balloons";
  img.src = "/images/balloons.png";
  img.width = "100"
  img.height = "100"
  div.appendChild(img);
  container.appendChild(div);
  input.value = "";
}
else if (theme === "hacker") {
  input.style.background = "black";
  document.body.style.background = "black";
  document.body.style.color = "#00FF00";
  input.style.color = "#00FF00";
  input.value = "";
}
else {
  input.style.background = theme;
  document.body.style.background = theme;
  input.value = "";
}

input.addEventListener('blur',function(){
   this.focus();
});

document.querySelector('#input-form').addEventListener('submit', function (e) {

  var input = document.querySelector('input.command');

  if (input.value.trim() === "clear") {
    var container = document.getElementsByClassName('input');
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
    div.className = "input";
    div.innerHTML = parser(help);
    container.appendChild(div);
    input.value = "";
    e.preventDefault();
  }

  else if (input.value.trim() === "about") {
  var container = document.querySelector('.parent');
  var div = document.createElement('div');
  div.className = "input";
  div.innerHTML = about;
  container.appendChild(div);
  input.value = "";
  e.preventDefault();
  }

  else if (input.value.trim() === "dragon") {
    window.location.replace("/dragon");
    e.preventDefault();
  }

  else if (input.value.trim() === "github") {
    window.location.replace("http://github.com/bertoort/command");
    e.preventDefault();
  }

  else if (input.value.trim().indexOf("theme ") > -1) {

  }

  else {
  var container = document.querySelector('.parent');
  var div = document.createElement('div');
  div.className = "input";
  div.innerHTML = input.value + ": command not found";
  container.appendChild(div);
  input.value = "";
  e.preventDefault();
  }

});
