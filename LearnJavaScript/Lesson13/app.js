"use strict";

// var a = +prompt("Enter the thirst number","");
// var b = +prompt("Enter the second number","");
//
// alert(a+b);

// function fibBinet(n) {
//   var phi = (1 + Math.sqrt(5)) / 2;
//   // используем Math.round для округления до ближайшего целого
//   return Math.round(Math.pow(phi, n) / Math.sqrt(5));
// }
//
// function fib(n) {
//   var a = 1,
//     b = 0,
//     x;
//   for (i = 0; i < n; i++) {
//     x = a + b;
//     a = b
//     b = x;
//   }
//   return b;
// }
//
// alert( fibBinet(2) );
// alert( fibBinet(8) );
// alert( fibBinet(77) );
// alert( fib(77) );

// var max = 10;
//
// var a = Math.random() * max;

// var min = 5,
//   max = 10;
//
// alert( min + Math.random() * (max - min) );

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

alert( randomInteger(5, 10) );
