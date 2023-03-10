"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", '');

  while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
  } else {
    alert('Произошла ошибка');
  }
}

detectPersonalLevel();

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const lastMovie = prompt("Один из полследних просмотренных фильмов", '');
    const rateMovie = prompt("На сколько оцените его", '');
  
    if (lastMovie != null && rateMovie != null && lastMovie != '' && rateMovie != '' && lastMovie.length < 50) {
      personalMovieDB.movies[lastMovie] = rateMovie;
      console.log('done');
    } else {
      console.log('Error');
      i--;
    }
  }
}

rememberMyFilms();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  } 
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for(let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(`Ваш любимы жанр под номером ${i+1}`, '')
  }
}
writeYourGenres();

console.log(personalMovieDB);