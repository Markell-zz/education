"use strict";

// function sumTo(n) {
//   if (n == 1) return 1;
//     return n + sumTo(n - 1);
// }
//
// alert( sumTo(4) );

// function sumTo(n) {
//   var sum = 0;
//   for (var i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
//
// alert( sumTo(4) );

// function sumTo(n) {
//   return n * (n + 1) / 2;
// }
//
// alert( sumTo(4) );

// function factorial(n) {
//   return (n != 1) ? n * factorial(n-1) : 1;
// }
// alert( factorial(5) );

// function fib(n) {
//   return n <= 3 ? n : fib(n - 1) + fib(n - 2);
// }
//
// alert( fib(3) ); // 2
// alert( fib(7) ); // 13

function fib(n) {
  var a = 1,
      b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert( fib(3) ); // 2
alert( fib(7) ); // 13
alert( fib(77) ); // 5527939700884757
