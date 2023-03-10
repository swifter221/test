"use strict";

const category = 'toys';

console.log("https://someone.com/" + category); // Конкатенация
console.log(`https://someone.com/${category}/12`); // Интерполяция, для применения нужны `` так называемые бэктики.

const name = "Ivan";
alert(`Привет, ${name}`);