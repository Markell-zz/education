"use strict";
function sumTo(n) {
  if ( n > 1) {
    sumTo = n + sumTo(n-1);
  } else {
    return n;
  }
}

alert(sumTo(4));
