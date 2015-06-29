var input = document.querySelector('input.command');
var theme = cookieParser(document.cookie).theme;
var nameInput = document.querySelector('#name');
var passwordInput = document.querySelector('#password');
var confirmationInput = document.querySelector('#confirmation');

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

var placeHolder = document.querySelector('.invisible');
var place = Number(placeHolder.innerHTML) || 0;
var errors = new error;

input.addEventListener('blur',function(){
   this.focus();
});

if (place === 0) {
  var container = document.querySelector('.parent');
  var div = document.createElement('div');
  var pre = document.createElement('pre');
  div.className = "prompt";
  container.appendChild(div);
  div.appendChild(pre);
  pre.innerHTML = intro[0];
  input.value = "";
}
else {
  var container = document.querySelector('.parent');
  var pre = document.createElement('pre');
  var pre2 = document.createElement('pre');
  var div = document.createElement('div');
  var div2 = document.querySelector('.signupInfo');
  div.className = "prompt";
  container.appendChild(div);
  div.appendChild(pre);
  div2.appendChild(pre2);
  pre.innerHTML = intro[1];
  pre2.className = "question"
  pre2.innerHTML ="What's your name?";
}

document.querySelector('#input-form').addEventListener('submit', function (e) {

  if (input.value.trim() === "clear" && place === 0) {
    var container = document.getElementsByClassName('signup');
    var max = container.length;
    for (var i = 0; i < max; i++) {
      container[0].remove();
    }
    input.value = "";
    e.preventDefault();
  }

  else if (input.value.trim() === "quit") {
    window.location.replace("/dragon");
    e.preventDefault();
  }

  else if (input.value.trim() === "help" && place === 0) {
    var container = document.querySelector('.prompt');
    var div = document.createElement('div');
    div.className = "signup";
    div.innerHTML = parser(dragonHelp);
    container.appendChild(div);
    input.value = "";
    e.preventDefault();
  }

  else if (input.value.trim() === "a" && place === 0) {
    var container = document.querySelector('.prompt');
    var div = document.createElement('div');
    div.className = "signup";
    div.innerHTML = "Foolish attempt. You barely have enough strength to hold the damn thing.";
    container.appendChild(div);
    input.value = "";
    e.preventDefault();
  }

  else if (input.value.trim() === "b" && place === 0) {
    var container = document.querySelector('.prompt');
    var div = document.createElement('div');
    div.className = "signup";
    div.innerHTML = "You suddenly remember you're stuck in a dungeon. There's nowhere to go.";
    container.appendChild(div);
    input.value = "";
    e.preventDefault();
  }

  else if (input.value.trim() === "c" && place === 0) {
    document.querySelector('.prompt').remove();
    var container = document.querySelector('.parent');
    var pre = document.createElement('pre');
    var pre2 = document.createElement('pre');
    var div = document.createElement('div');
    var div2 = document.querySelector('.signupInfo');
    div.className = "prompt";
    container.appendChild(div);
    div.appendChild(pre);
    div2.appendChild(pre2);
    pre.innerHTML = intro[1];
    pre2.className = "question"
    pre2.innerHTML ="What's your name?";
    input.value = "";
    place++;
    e.preventDefault();
  }

  else if (input.value.trim() === "clear" && place > 0) {
    document.querySelector('.signupInfo').remove();
    var container = document.querySelector('.append');
    var div = document.createElement('div');
    var pre = document.createElement('pre');
    var error = document.querySelector('.error');
    container.appendChild(div);
    div.appendChild(pre);
    div.className = 'signupInfo';
    pre.className = "question";
    error.innerHTML = "";
    pre.innerHTML ="What's your name?";
    input.value = "";
    input.type = "text";
    place = 1;
    e.preventDefault();
  }

  else if (place === 1) {
    errors.validateInput(input.value, "name");
    if (errors.errorsArr.length > 0) {
      var div = document.querySelector('.error');
      div.innerHTML = errors.errorsArr[0];
      input.value = "";
      errors.errorsArr = [];
      e.preventDefault();
    }
    else {
    document.querySelector('.question').remove();
    var div = document.querySelector('.signupInfo');
    var name = document.createElement('input');
    var label = document.createElement('label');
    var pre = document.createElement('pre');
    var error = document.querySelector('.error');
    div.appendChild(label);
    div.appendChild(name);
    div.appendChild(pre);
    label.setAttribute('for', 'name');
    error.innerHTML = "";
    label.innerHTML = "Name: ";
    pre.innerHTML = "\n" + "What's your password?" + "\n" + "\n" + "(enter clear to change name)";
    name.setAttribute('id', 'name');
    name.name = "name";
    name.value = input.value.trim();
    if (theme) {
      if (theme === "hacker") {
        name.style.background = "black";
        name.style.color = "#00FF00";
      }
      else if (theme === "white") {
        name.style.color = "black";
      }
      name.style.background = theme;
    };
    pre.className = "question";
    input.value = "";
    input.type = "password";
    place++;
    e.preventDefault();
    }
  }

  else if (place === 2) {
    errors.validateInput(input.value, "password");
    if (errors.errorsArr.length > 0) {
      var div = document.querySelector('.error');
      div.innerHTML = errors.errorsArr[0];
      input.value = "";
      errors.errorsArr = [];
      e.preventDefault();
    }
    else {
      document.querySelector('.question').remove();
      var div = document.querySelector('.signupInfo');
      var p = document.createElement('p');
      var password = document.createElement('input');
      var label = document.createElement('label');
      var pre = document.createElement('pre');
      var error = document.querySelector('.error');
      div.appendChild(p);
      p.appendChild(label);
      p.appendChild(password);
      p.appendChild(pre);
      label.setAttribute('for', 'password');
      label.innerHTML = "Password: ";
      error.innerHTML = "";
      password.setAttribute('id', 'password');
      password.name = "password";
      password.value = input.value;
      password.type = "password";
      if (theme) {
        if (theme === "hacker") {
          password.style.background = "black";
          password.style.color = "#00FF00";
        }
        else if (theme === "white") {
          password.style.color = "black";
        }
        password.style.background = theme;
      };
      pre.className = "question";
      pre.innerHTML = "\n" + "Please confirm your password.";
      input.value = "";
      input.type = "password";
      place++;
      e.preventDefault();
    }
  }

  else if (place === 3) {
    var password = document.querySelector('#password').value;
    if (password !== input.value) {
      var div = document.querySelector('.error');
      div.innerHTML = "Please make sure your password matches. Enter clear to reset";
      input.value = "";
      e.preventDefault();
    }
    else {
      document.querySelector('.question').remove();
      var div = document.querySelector('.signupInfo');
      var p = document.createElement('p');
      var pre = document.createElement('pre');
      var error = document.querySelector('.error');
      div.appendChild(p);
      p.appendChild(pre);
      pre.className = "question";
      error.innerHTML = "";
      pre.innerHTML = "\n" + "All good. Enter clear to restart or any key to sign up and start the game";
      input.value = "";
      input.type = "text";
      place++;
      e.preventDefault();
    }
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
