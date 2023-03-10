"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

if (personalMovieDB.count < 10) {
  alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
  alert('Вы киноман');
} else {
  alert('Произошла ошибка');
}

for (let i = 0; i < 2; i++) {
  const lastMovie = prompt("Один из полследних просмотренных фильмов");
  const rateMovie = prompt("На сколько оцените его");

  if (lastMovie != null && rateMovie != null && lastMovie != '' && rateMovie != '' && lastMovie.length < 50) {
    personalMovieDB.movies[lastMovie] = rateMovie;
    console.log('done');
  } else {
    console.log('Error');
    i--;
  }
}

/* let i = 0
while (i < 2) {
  const lastMovie = prompt("Один из полследних просмотренных фильмов");
  const rateMovie = prompt("На сколько оцените его");
  
  if (lastMovie != null && rateMovie != null && lastMovie != '' && rateMovie != '' && lastMovie.length < 50) {
    personalMovieDB.movies[lastMovie] = rateMovie;
    console.log('done');
  } else {
    console.log('Error');
    i--;
  }
  i++;
} */

/* let i = 0;
do {
  const lastMovie = prompt("Один из полследних просмотренных фильмов");
  const rateMovie = prompt("На сколько оцените его");
  
  if (lastMovie != null && rateMovie != null && lastMovie != '' && rateMovie != '' && lastMovie.length < 50) {
    personalMovieDB.movies[lastMovie] = rateMovie;
    console.log('done');
  } else {
    console.log('Error');
    i--;
  }
  i++;
}
while (i < 2); */

console.log(personalMovieDB);