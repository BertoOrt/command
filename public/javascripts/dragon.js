var input = document.querySelector('input.command');

input.addEventListener('blur',function(){
   this.focus();
});

document.querySelector('#input-form').addEventListener('submit', function (e) {

  if (input.value === "clear") {
    var container = document.getElementsByClassName('dragonInput');
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
    div.className = "dragonInput";
    div.innerHTML = parser(dragonHelp);
    container.appendChild(div);
    input.value = "";
    e.preventDefault();
  }

  else if (input.value === "dragon website") {
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

  else if (input.value === "draw sword") {
    window.location.replace("/dragon/signup");
    e.preventDefault();
  }

  else if (input.value === "play") {
    window.location.replace("/dragon/game");
    e.preventDefault();
  }

  else if (input.value === "login") {
    window.location.replace("/dragon/login");
    e.preventDefault();
  }

  else if (input.value === "quit") {
    window.location.replace("/");
    e.preventDefault();
  }

  else if (input.value === "logout") {
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
