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

  else if (input.value === "draw sword") {
    var container = document.querySelector('.parent');
    var div = document.createElement('div');
    var pre = document.createElement('pre');
    div.className = "dragonInput";
    div.className = "signUp";
    container.appendChild(div);
    div.appendChild(pre);
    pre.innerHTML = intro[0];
    input.value = "";
    e.preventDefault();
  }

  else if (input.value === "quit") {

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
