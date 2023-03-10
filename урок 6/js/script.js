"use strict"

// числа
let num = 4.6;
console.log(4/0); // получим Infinity, который относится к числовым типам данных
console.log(-4/0); // получим -Infinity
console.log('string' * 9); // получим NaN, в переводе Not a Number

//Строки, использование двойных и одинарных кавычек определяется соглашениями в команде, не важно какие кавычки использовать "" или ''
const person = 'Vitaliy';

// логический тип данных
let bool = false;

// null (что-то отсутвует, чего то нет) возникает ReferenceError - ошибка ссылочного типа
console.log(something);

//undefined, что то существует, но у него нет абсолютно никакого значения
let box;
console.log(box);

//объекты
//объект может содержать данные, которые называются свойствами объекта, а также действия - они называются методы  
const obj = {
  name: 'John',
  age: 25,
  isMarried: false
};

//обращаться к свойствам объекта можно или через точку или через квадратные скобки, но лучше обраться к свойствам через точку
console.log(obj.name);
console.log(obj["name"]);

//Массивы
// массив не является отдельным типом данных, а является частным случаем объектов
let array = ['orange', 'banana', 5, false];
console.log(array[1]);
