"use strict";

// function ucFirst(str) {
// if (!str) return str;
// return str.charAt(0).toUpperCase(); + str.slice(1);
// }

// console.log(ucFirst(''));


// function checkSpam(str) {
//     var lowerStr = str.toLowerCase();

//     return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));
// }
// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free xxxxx') );
// alert( checkSpam("innocent rabbit") );


// function truncate(str, maxlength) {

//     if (str.length > maxlength) {
//         return str.slice(0, maxlength-3) + '...';
//     }
    
//     return str;
// }

// alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );
// alert( truncate("Всем привет!", 20) );


function extractCurrencyValue(str) {
    return +str.slice(1);
}

alert( extractCurrencyValue('$100') );