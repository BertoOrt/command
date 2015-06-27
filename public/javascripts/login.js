var input = document.querySelector('input.command');
var container = document.querySelector('.parent');
var div = document.createElement('div');
var div2 = document.querySelector('.signupInfo');
var pre = document.createElement('pre');
var pre2 = document.createElement('pre');
div.className = "prompt";
container.appendChild(div);
div.appendChild(pre);
div2.appendChild(pre2);
pre2.className = "question"
pre2.innerHTML ="What's your name?";
pre.innerHTML = "Welcome back!";
input.value = "";
var place = 0;
var errors = new error;


input.addEventListener('blur',function(){
   this.focus();
});

document.querySelector('#input-form').addEventListener('submit', function (e) {

  if (input.value === "clear") {
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
    place = 0;
    e.preventDefault();
  }

  else if (input.value === "quit") {
    window.location.replace("/dragon");
    e.preventDefault();
  }

  else if (place === 0) {
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
    name.value = input.value;
    pre.className = "question";
    input.value = "";
    input.type = "password";
    place++;
    e.preventDefault();
    }
  }

  else if (place === 1) {
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
      pre.className = "question";
      pre.innerHTML = "\n" + "Excellent. Press Enter to start game or clear to reset";
      input.value = "";
      input.type = "text";
      place++;
      e.preventDefault();
    }
  }

  else if (place === 2) {

  }
})
