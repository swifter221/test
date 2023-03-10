
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const lastMovie = prompt("Один из полследних просмотренных фильмов");
const rateMovie = prompt("На сколько оцените его");
const lastMovie2 = prompt("Один из полследних просмотренных фильмов");
const rateMovie2 = prompt("На сколько оцените его");

personalMovieDB.movies[lastMovie] = rateMovie;
personalMovieDB.movies[lastMovie2] = rateMovie2;


console.log(personalMovieDB);