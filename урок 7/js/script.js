"use strict";

// alert, confirm prompt и тд. существуют только в браузере

/* alert('Hello'); */ // служит для оповещения о чем то важном

// confirm можно спросить пользователя о чем либо, и получить true или false
const result = confirm("Ты здесь?"); 
console.log(result);

// Задаем вопрос на который можем получить любой ответ
const answer = prompt("Какой-то вопрос?", ""); // получаем ответ всегда строкой
console.log(typeof(answer)); // typeof позволяет определить тип

// ВСЯ ИНФОРМАЦИЯ ОТ ПОЛЬЗОВАТЕЛЯ ПРИХОДИТ В ВИДЕ СТРОК

const answers = [];

answers[0] = prompt("Имя?", "");
answers[0] = prompt("Фамилия?", "");
answers[0] = prompt("Сколько лет?", "");

document.write(answers); // write замещает весь контент страницы