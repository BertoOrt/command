var input = document.querySelector('input.command');
var container = document.querySelector('.parent');
var div = document.createElement('div');
var pre = document.createElement('pre');
div.className = "prompt";
container.appendChild(div);
div.appendChild(pre);
pre.innerHTML = intro[0];
input.value = "";
var place = 0;


input.addEventListener('blur',function(){
   this.focus();
});

document.querySelector('#input-form').addEventListener('submit', function (e) {

  if (input.value === "clear" && place === 0) {
    var container = document.getElementsByClassName('signup');
    var max = container.length;
    for (var i = 0; i < max; i++) {
      container[0].remove();
    }
    input.value = "";
    e.preventDefault();
  }

  else if (input.value === "help" && place === 0) {
    var container = document.querySelector('.prompt');
    var div = document.createElement('div');
    div.className = "signup";
    div.innerHTML = parser(dragonHelp);
    container.appendChild(div);
    input.value = "";
    e.preventDefault();
  }

  else if (input.value === "a" && place === 0) {
    var container = document.querySelector('.prompt');
    var div = document.createElement('div');
    div.className = "signup";
    div.innerHTML = "Foolish attempt. You barely have enough strength to hold the damn thing.";
    container.appendChild(div);
    input.value = "";
    e.preventDefault();
  }

  else if (input.value === "b" && place === 0) {
    var container = document.querySelector('.prompt');
    var div = document.createElement('div');
    div.className = "signup";
    div.innerHTML = "You suddenly remember you're stuck in a dungeon. There's nowhere to go.";
    container.appendChild(div);
    input.value = "";
    e.preventDefault();
  }

  else if (input.value === "c" && place === 0) {
    document.querySelector('.prompt').remove();
    var container = document.querySelector('.parent');
    var pre = document.createElement('pre');
    var pre2 = document.createElement('pre');
    var div = document.createElement('div');
    div.className = "prompt";
    container.appendChild(div);
    div.appendChild(pre);
    div.appendChild(pre2);
    pre.innerHTML = intro[1];
    pre2.className = "question"
    pre2.innerHTML ="What's your name?";
    input.value = "";
    place++;
    e.preventDefault();
  }

  else if (input.value === "clear" && place > 0) {
    document.querySelector('.signupInfo').remove();
    var container = document.querySelector('.append');
    var div = document.createElement('div');
    var pre = document.createElement('pre');
    container.appendChild(div);
    div.appendChild(pre);
    div.className = 'signupInfo';
    pre.className = "question";
    pre.innerHTML ="What's your name?";
    input.value = "";
    place = 1;
    e.preventDefault();
  }

  else if (place === 1) {
    document.querySelector('.question').remove();
    var div = document.querySelector('.signupInfo');
    var name = document.createElement('input');
    var label = document.createElement('label');
    var pre = document.createElement('pre');
    div.appendChild(label);
    div.appendChild(name);
    div.appendChild(pre);
    label.setAttribute('for', 'name');
    label.innerHTML = "Name: "
    name.setAttribute('id', 'name')
    name.name = "name";
    name.value = input.value;
    pre.className = "question";
    pre.innerHTML = "\n" + "What's your password?" + "\n" + "\n" + "(enter clear to change name)";
    input.value = "";
    input.type = "password";
    place++;
    e.preventDefault();
  }

  else if (place === 2) {
    document.querySelector('.question').remove();
    var div = document.querySelector('.signupInfo');
    var p = document.createElement('p');
    var password = document.createElement('input');
    var label = document.createElement('label');
    var pre = document.createElement('pre');
    div.appendChild(p);
    p.appendChild(label);
    p.appendChild(password);
    p.appendChild(pre);
    label.setAttribute('for', 'password');
    label.innerHTML = "Password: "
    password.setAttribute('id', 'password')
    password.name = "name";
    password.value = input.value;
    password.type = "password";
    pre.className = "question";
    pre.innerHTML = "\n" + "Please confirm your password.";
    input.value = "";
    input.type = "password";
    place++;
    e.preventDefault();
  }

  else if (place === 3) {
    document.querySelector('.question').remove();
    var div = document.querySelector('.signupInfo');
    var p = document.createElement('p');
    var pre = document.createElement('pre');
    div.appendChild(p);
    p.appendChild(pre);
    pre.className = "question";
    pre.innerHTML = "\n" + "All good. Enter clear to restart or any key to sign up and start the game";
    input.value = "";
    input.type = "text";
    place++;
    e.preventDefault();
  }

  else if (input.value === "quit") {
    window.location.replace("/dragon");
    e.preventDefault();
  }

  else if (place === 4) {

  }

  else if (place === 0) {
  var container = document.querySelector('.prompt');
  var div = document.createElement('div');
  div.className = "signup";
  div.innerHTML = input.value + ": command not found";
  container.appendChild(div);
  input.value = "";
  e.preventDefault();
  }

})
