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
  privat: false,
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && this.count < 30) {
      alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      alert('Вы киноман');
    } else {
      alert('Произошла ошибка');
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const lastMovie = prompt("Один из поcледних просмотренных фильмов", '');
      const rateMovie = prompt("На сколько оцените его", '');
    
      if (lastMovie != null && rateMovie != null && lastMovie != '' && rateMovie != '' && lastMovie.length < 50) {
        personalMovieDB.movies[lastMovie] = rateMovie;
        console.log('done');
      } else {
        console.log('Error');
        i--;
      }
    }
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for(let i = 0; i < 1; i++) {
      const genres = prompt(`Введите все любимые жанры через запятую`, '')
      if(genres != '' && genres != null){
        personalMovieDB.genres = genres.split(', ');
      }
      else {
        i--;
      }
    }
    personalMovieDB.genres.forEach((genre, index) => {
      console.log(`Любимый жанр под №${index + 1} - это ${genre}`);
    })
  },
  toggleVisibleMyDB: function () {
    personalMovieDB.privat ? personalMovieDB.privat = false : personalMovieDB.privat = true;
  }
};

personalMovieDB.detectPersonalLevel();

personalMovieDB.rememberMyFilms();

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);