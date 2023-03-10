"use strict";

function showFirstMessage(text) { /* негласное правило, название функции это глагол с 
  припиской над чем выполняется действие и все это пишется в CamlCase, существуют также анонимные функции */
  console.log(text);
  let num = 20; // let только в области видимости функции, локальная переменная
}
showFirstMessage('Hello world');
console.log(num);

//

let num = 20;

function showSecondMessage() {
  num = 30; // используется глобальная переменная
}
showSecondMessage();
console.log(num);

//

let num2 = 20; // глобальная переменная

function showThirdMessage() {
  let num2 = 10; // локальная переменная
}
// при использовании локальных и глобальных переменных с одним именем ошибок нет
showThirdMessage();
console.log(num2); // 20, так как видим только глобальную переменную

//

let num3 = 20;

function showMessage() {
  let num3 = 10;
  console.log(num3); // когда код доходит до сюда, фунцкия начинает искать переменную num3 внутри себя, если она ее не находит, то функция начианет искать переменную на уровень выше и если находит использует ее
  // Замыкания - это сама функция вместе со всеми внешними переменными которые ей доступны
}
showMessage();

//

// return
function calc(a, b) {
  return a + b;
  // все что ниже return будет являться unreacheble code (недостижимым кодом)
}

console.log(calc(4, 5));
console.log(calc(9, 5));




// локальные переменные из функций можно возвращать
function ret() {
  let num = 10;
  return num;
}
const anotherNum = ret();
console.log(anotherNum); // 10


// Классификация функций:
// 1) Function declaration (существует до того как наш запустится, плюсом является функция может работать до того как она была объявлена)
// 2) Function expression
// 3) Стрелочные функции (ES6)


// Function Expression (создается тогда, когда до нее доходит поток кода, можно вызвать только после объявления)
const logger = function() {
  console.log('Hello');
};

logger();



// Стрелочная функция (ES6) (не имеет контекста вызова, чаще всего встречаются в обработчиках событий)
const calc2 = (a, b) => a + b; // или const calc2 = (a, b) { return a + b }