var input = document.querySelector('input.command');
var theme = cookieParser(document.cookie).theme;

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
  document.body.style.color = "white";
  input.style.color = "white";
  input.value = "";
}

input.addEventListener('blur',function(){
   this.focus();
});

document.querySelector('#input-form').addEventListener('submit', function (e) {

  if (input.value.trim() === "clear") {
    var container = document.getElementsByClassName('dragonInput');
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
    div.className = "dragonInput";
    div.innerHTML = parser(dragonHelp);
    container.appendChild(div);
    input.value = "";
    e.preventDefault();
  }

  else if (input.value.trim() === "dragon website") {
    var container = document.querySelector('.parent');
    var div = document.createElement('div');
    var img = document.createElement('img');
    div.className = "dragonInput";
    img.src = "/images/dragonSite.png";
    img.width = "600"
    img.height = "400"
    div.appendChild(img);
    container.appendChild(div);
    input.value = "";
    e.preventDefault();
  }

  else if (input.value.trim() === "draw sword") {
    window.location.replace("/dragon/signup");
    e.preventDefault();
  }

  else if (input.value.trim() === "play") {
    window.location.replace("/dragon/game");
    e.preventDefault();
  }

  else if (input.value.trim() === "login") {
    window.location.replace("/dragon/login");
    e.preventDefault();
  }

  else if (input.value.trim() === "delete") {
    window.location.replace("/dragon/delete");
    e.preventDefault();
  }

  else if (input.value.trim() === "quit") {
    window.location.replace("/");
    e.preventDefault();
  }

  else if (input.value.trim() === "logout") {
  }

  else {
  var container = document.querySelector('.parent');
  var div = document.createElement('div');
  div.className = "dragonInput";
  div.innerHTML = input.value + ": command not found";
  container.appendChild(div);
  input.value = "";
  e.preventDefault();
  }

})
