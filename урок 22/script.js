"use strict";

// передача по ссылке или по значению, Spread оператор (ES6-ES9)

/* let a = 5,
    b = a;  // здесь a заменяется на 5

b = b + 5;

console.log(b);
console.log(a);


const obj = {
  a: 5,
  b: 1
}; */

/* const copy = obj; // obj передает не саму структуру объекта, а ссылку на себя в переменную copy, такое поведение называется передача по ссылке

copy.a = 10;

console.log(copy);
console.log(obj); */

// когда работаем с примитивными типами данных, то они передаются по значению

// когда работаем с объектами (обычными объектами, массивами, функциями, специфические объекты типа объекта даты), то здесь идет передача уже по ссылке

function copy(mainObj) {
  let copyObj = {};

  for (let key in mainObj) {
    copyObj[key] = mainObj[key];
  }

  return copyObj;
}

const numbers = {
  a: 2,
  b: 3,
  c: {
    x: 10,
    y:12
  }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 20;

/* console.log(newNumbers); // { a: 10, b: 3, c: { x: 20, y: 12 } }
console.log(numbers); // { a: 2, b: 3, c: { x: 20, y: 12 } } */

/* существуют поверхностные и глубокие копии объектов,
  в нашем случае мы создали поверхностную копию объекта, потому что она берет все обычные свойства, которые были в родителе и создает независимые структуры,
  но как только свойство у нас будет иметь вложенную стркутуру (объект, массив), то это свойство будет иметь ссылочный тип данных
*/

// пока что будем работать с поверностными копиями

// Object.assign() метод позволяющий соединить несколько объектов

const add = {
  d: 7,
  e: 8
};

console.log(Object.assign(numbers, add)); // получили поверхностную копию

const clone = Object.assign({}, add);

clone.d = 45;

/* console.log(add);
console.log(clone); */


// копирование массивов

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'wrwrwrwr';

console.log(newArray);
console.log(oldArray);


// Spread оператор (оператор разворота), так как разварачивает структуру и превращает ее в набор каких то данных. Spread оператор для массива (ES6)

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);


function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [4, 6, 9];

log(...num);

const array = ['a', 'b'];
const newArray2 = [...array]; // создали копию массива array без метода slice()

// Spread оператор есть и для объекта только со стандарта ES9

const q = {
  one: 1,
  two: 2
};

const newObj = {...q}; // Создали поверхностную копию объекта q

console.log(newObj);

