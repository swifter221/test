"use strict";

// Динамическая типизация JS

//to String
// 1) 

console.log(typeof(String(null))); // string
console.log(typeof(String(4))); // string

// 2) Конкатенация

console.log(typeof(5 + '')); // string, при сложении со строкой всегда получается строка

const num = 5;
console.log("https://vk.com/catalog/" + num);

// Также можно формировать стили с помощью кода JS и там нужны передавать стили в виде строки
const fontSize = 26 + 'px';


// to Number

// 1)
console.log(typeof(Number('4'))); //number

// 2) Унарный плюс
console.log(typeof(+'5')); //number

// 3) Числовые методы
console.log(typeof(parseInt('15px', 10))); // number


// Все что мы получаем от пользователя будет типом данных string


// to Boolean

// 0, '', null, undefined, NaN всегда будут возвращать булевое значение равное false

// 1) Нативный преобразование
let switcher = null;

if (switcher) { // условие не выполнится, так как swither = null, а null всегда будет false
  console.log('Working...');
}

switcher = 1;

if (switcher) { // условие выполнится, так как swither = 1
  console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4'))); // boolean

// 3)
console.log(typeof(!!'44444')); // boolean