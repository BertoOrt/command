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
