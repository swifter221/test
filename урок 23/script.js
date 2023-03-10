"use strict";

// Основы ООП, прототипно-ориентированное наследование
// ООП это наука как делать правильную архитектуру

'wwetwtw'.toUpperCase(); // Здесь примитив превращается в объект, затем вызывает метод toUpperCase, а затем происходит обратное преобразование из объекта в примитив

let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1,2,3]); // создается экземпляр массива

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function() {
    console.log('Hello');
  }
};

/* const jonh = {
  health: 100
} */

/* jonh.__proto__ = soldier; */ // метод __proto__ устаревший и сейчас не используется

/* Object.setPrototypeOf(jonh, soldier); */ // Устанавливаем прототип soldier для jonh. Делаем так если нам нужно задать прототип в динамике, то есть jonh уже существовал и ему установили прототип

// Но обычно мы должны задавать прототипы на этапе создания объекта

const jonh = Object.create(soldier); // Читается как: создаем новый объект jonh который будет прототипно наследоваться от soldier

/* console.log(jonh.armor); */ // 100 так как объект jonh получил свойство из прототипа soldier
jonh.sayHello(); // Hello

// Создание прототипа, который содержит начальные свойства позволяет нам основываясь на этом прототипе создавать экземляры этого протитипа изменяя различные свойства.
// Пример протитип модального окна. Имеет ширину, высоту, методы которые позволяют закрывать окно на крестик и основываясь на этом прототипе можно строить другие модальные окна меняя некоторые свойства 