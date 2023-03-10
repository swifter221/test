"use strict";

//Объекты, деструктуризация объектов (ES6)

/* const obj = new Object();  */// создание нового объекта

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function () {
    console.log('Test');
  }
};

options.makeTest();

/* console.log(options['colors']['border']);  // двойной доступ, получаем black */

/* console.log(options.name);

delete options.name;  // delete удалить что-то, в данном случае свойство name

// ошибок нет даже если объект константа, так как прямых констант в JS не существует

console.log(options); */

// для перебора ключей в объекте используется оператор for in

/* for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свйоство ${i} имеет значение ${options[key][i]}`);  // options[key][i] двойной доступ
    }
  } else {
    console.log(`Свйоство ${key} имеет значение ${options[key]}`); // свойство colors имеет значение [object Object] так как выводится строка, а консоль не может адеватно отобразить объект, только лишь через строковое предстваление объекта [object Object]
  }
} */

// также есть метод перебора for of и для объектов он не работает

// У объектов нет свойства lenght, но посчитать количество свойств можно вручную 

/* let counter = 0;
for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свйоство ${i} имеет значение ${options[key][i]}`);  // options[key][i] двойной доступ
      counter++;
    }
  } else {
    console.log(`Свйоство ${key} имеет значение ${options[key]}`); // последнее свойство colors имеет значение [object Object] так как выводится строка, а консоль не может адеватно отобразить объект, только лишь через строковое предстваление объекта [object Object]
    counter++;
  }
}
console.log(counter) */


// функции и методы встроенные в объекты

console.log(Object.keys(options).length) // Object.keys() создает массив наших ключей объекта. Нужно запомнить пригодится и упростит работу


// Объекты это структуры которые могут сохранять в себе любые типы данных в формате ключ: значение, также могут быть вложенные, иметь свои методы встроенные и не встроенные, могут быть перебраны for in

// деструктуризация объекта

const {border, bg} = options.colors; // делаем деструктуризацию, то есть разделяем на более мелкие удобные кусочки
console.log(border);