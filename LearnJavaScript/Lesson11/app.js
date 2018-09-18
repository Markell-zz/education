"use strict";

// function checkAge(age) {
//   return (age > 18) ? true : confirm('Родители разрешили?');
// }
//
// function checkAge(age) {
//   return (age > 18) || confirm('Родители разрешили?');
// }

// function min(a,b) {
//   return (a < b) ? a; : b;
// }

function pow(x,n) {
  var result = x;

  for (var i = 0; i < n i++) {
    result *= x;
  }

  return x;
}

var x = prompt("x?", '');
var n = prompt("n?", '');

if (n <= 1) {
  alert('Степень ' + n +
    'не поддерживается, введите целую степень, большую 1'
  );
} else {
  alert( pow(x, n) );
}
