/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

'use strict';



function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "4");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "4");
    }
    return numberOfFilms;
}

//start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Один из последних просмотренных фильмов?", "Титаник");
        let b = +prompt("На сколько оцените его?", "оценка от 1 до 10");
        if (a != null && b != null && a != "" && b != "" && a.length < 50 ) {
            personalMovieDB.movies[a] = b;
            console.log(`вы добавили фильм ${a} c рейтингом ${b}`);
        } else {
            console.log(`фильм ${a} не добавлен, попробуйте снова`);
            i--;
        }
    }
}

//rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 ) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('error');
    }
}

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
    }
}

writeYourGenres();
//detectPersonalLevel();
showMyDB(personalMovieDB.privat);