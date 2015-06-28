var input = document.querySelector('input.command');

input.addEventListener('blur',function(){
   this.focus();
});

document.querySelector('#input-form').addEventListener('submit', function (e) {

  var input = document.querySelector('input.command');

  if (input.value === "clear") {
    var container = document.getElementsByClassName('input');
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
    div.className = "input";
    div.innerHTML = parser(help);
    container.appendChild(div);
    input.value = "";
    e.preventDefault();
  }

  else if (input.value === "dragon") {
    window.location.replace("/dragon");
    e.preventDefault();
  }

  else if (input.value === "github") {
    window.location.replace("http://github.com/bertoort/command");
    e.preventDefault();
  }

  else if (input.value.indexOf("theme ") > -1) {
    var color = input.value.replace('theme ', "");
    if (color === "white") {
      input.style.background = color;
      document.body.style.background = color;
      document.body.style.color = "black";
      input.style.color = "black";
      input.value = "";
      e.preventDefault();
    }
    else if (color === "black") {
      input.style.background = color;
      document.body.style.background = color;
      document.body.style.color = "white";
      input.style.color = "white";
      input.value = "";
      e.preventDefault();
    }
    else {
    input.style.background = color;
    document.body.style.background = color;
    input.value = "";
    e.preventDefault();
    }
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
