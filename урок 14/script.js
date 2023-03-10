"use strict";

let num = 50;

/* while (num <= 55) {
  console.log(num);
  num++;
} */

/* do {
  console.log(num);
  num++;
} 
while (num <= 55); */

for (let i = 1; i < 10; i++) {
  if (i === 6) {
    /* break; */ // останавливает цикл
    continue; // позволяет пропустить шаг который нам не нужен, но при этом не прерывает полностью цикл
  }

  console.log(i);
}

// Циклы не стоит путать с методами перебора foreach, for..of.., map и др.