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
pre.innerHTML = "Sorry you're leaving us";
input.value = "";
var place = 0;
var errors = new error;
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
  input.value = "";
}

input.addEventListener('blur',function(){
   this.focus();
});

document.querySelector('#input-form').addEventListener('submit', function (e) {

  if (input.value.trim().toLowerCase() === "clear") {
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

  else if (input.value.trim().toLowerCase() === "quit") {
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
      pre.innerHTML = "\n" + "All good. Press Enter to delete your account or clear to reset";
      input.value = "";
      input.type = "text";
      place++;
      e.preventDefault();
    }
  }

  else if (place === 2) {

  }
})
