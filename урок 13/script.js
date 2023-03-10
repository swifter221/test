"use strict";

if (4 == 4) {
  console.log('Ok');
} else {
  console.log('Error');
}

// в реальном коде много условий и мы можем применять их благодаря вложенности таких условий
const num = 50;

if (num < 49) {
  console.log('Error');
} else if (num > 100) {
  console.log('Много');
} else {
  console.log('Ok');
}

// тернарный оператор (3 аргумента)
(num === 50) ? console.log('Ok') : console.log('Error');

// для изебажния больших ветвлений применяется switch в котором можно сразу написать несколько проверок и условий
const numTwo = 50;
switch (numTwo) {
  case 49:
    console.log('Неверно');
    break;
  case 100:
    console.log('Много');
    break;
  case 50:
    console.log('В точку');
    break;
  default:
    console.log('Не в этот раз');
    break;
}