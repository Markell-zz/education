// for (var i = 2; i =< 10; i++) {
//   if (i % 2 == 0) alert(i);
// }

// var i = 0;
// while (i < 3) {
//   alert( "номер " + i + "!" );
//   i++;
// }

// var value;
//
// do {
//   value = prompt('Значение до 100', 0);
// } while (value <=100 && value != null);

outer: for (var i = 2; i <= 10; i++) {
  for (var j = 2; j < i; j++) {
    if (i % j == 0) continue outer;
  }
  alert(i);
}
