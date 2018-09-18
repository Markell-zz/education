// var message = prompt('Oficial Name of JavaScript ', "");
// if (message == 'EcmaScript') {
//   alert('Correct!');
// }
// else {
//   alert('Nope, EcmaScript');
// }

// var message = prompt('Number ', "");
// if (message > 0) {
//   alert('Correct!');
// } else if (message < 0) {
//   alert('Nope');
// } else {
//   alert("50/50");
// }

// var login = prompt('Enter Login ', '');
// if (login == 'Admin') {
//   var password = prompt('Enter Password', '');
//   if (password == 'BlackM') {
//     alert('Your Welcome!');
//   }
//   else if (password == null) {
//     alert("Exit");
//   }
//   else {
//     alert("Password incorrect!");
//   }
// } else if (login == null) {
//   alert('Exit');
// } else {
//   alert("Login incorrect!");
// }

// var message = (3 + 2 < 4) ? 'Little' : 'Many';
// alert(message);

login = prompt('Login','UserNmae');
var message = (login == 'Vasya') ? 'Hi' :
(login == 'Dirrector') ? 'Hello sr.' :
(login == '') ? 'Is anybody here?' :
'';

alert(message)
