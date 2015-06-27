var input = function(result) {
  return result.join("<br>")
};

var parser = function(input){
  var row = [];
  input.forEach(function(value, ind, arr){
    if (ind % 2 !== 0 && ind > 0) {
      row.push(value)
    }
  });
  var rowLength = row.map(function(value) {
    return value.length;
  });
  var longest = rowLength.reduce(function(a, b){
    return Math.max(a, b)
  });
  var result = input.map(function(value, index){
    if (index === 0) {
      return value + "<br>"
    }
    else if (index % 2 !== 0) {
      var spacer = "";
      for (var i = 0; i < longest - value.length; i++) {
        spacer += "&nbsp"
      }
      return value + spacer + "&nbsp &nbsp &nbsp"
    }
    else return value + "<br>";
  });
  return result.join("");
};

var error = function (input) {
  this.errorsArr = [];
};

error.prototype.validateInput = function (input, label) {
  if (input.trim().length > 15 || input.trim().length < 3) {
    this.errorsArr.push('please make sure your ' + label + ' is from 3-15 characters long')
  }
};

var cookieParser = function (cookie) {
  var object = {};
  var color = cookie.split(';');
  color.forEach(function (value) {
    var clean = value.split('=');
    object[clean[0].trim()] = object[clean[0].trim()] || "";
    object[clean[0].trim()] = clean[1];
  });
  return object;
};
