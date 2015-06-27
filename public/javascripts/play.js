// if (cookieParser(document.cookie).name === undefined) {
//   window.location.replace("/dragon");
// }

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

  else if (input.value === "quit") {
    window.location.replace("/dragon");
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


// div.innerHTML = quotes[Math.floor(Math.random()*quotes.length)];
