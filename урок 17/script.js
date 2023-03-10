"use strict";

// методы - это вспомогательные функции
// свойства - это вспопомгательные значения

const str = 'teSt';
const arr = [1, 2, 3];

/* console.log(arr.length);
console.log(str[2]); */

console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit'));

const logg = 'Hello world';
console.log(logg.slice(6,11)); // второй аргумент до 11 но не включая
console.log(logg.slice(6)); // строка вырезается с 6 индекса до конца
console.log(logg.slice(-5, -1)); // worl
console.log(logg.substring(6, 11)); // substring не принимает отрицательные параметры
console.log(logg.substr(6, 5)); // 1 арг. с какого индекса начинается обрезка, 2 арг. длина (сколько символов надо вырезать)


// методы чисел
const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';

console.log(parseInt(test));
console.log(parseFloat(test));