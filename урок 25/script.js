"use strict";

// отлавливаем ошибки в своем коде при помощи консоли браузера.Breakpoints

function hello() {
  console.log('Hello world');
  debugger; // можно ставить брейкпоинты прямо в коде
}

hello();

function hi() {
  console.log('Say hi');
}

hi();

const arr = [1, 14, 4, 30, 54],
      sorted = arr.sort(compareNum);

function compareNum(a, b) {
  return a - b;
}

console.log(sorted);
