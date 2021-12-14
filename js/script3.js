/* Задание #3 на урок:

+ 1) Первую часть задания повторить по уроку (обернули все в фукции)

+ 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

// start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    privat: false
};

function rememberMyFilms() {
    let i = 0;
    while (i != 2) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = +prompt('На сколько оцените его?', '');
        console.log(i);
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            i++;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count >= 10 || personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else {
        console.log('Произошла ошибка');
    }
}

// detectPersonalLevel();

//Задание 2

function showMyDB(bool) {
    if (bool == false) {
        console.log(personalMovieDB);
    }
}

// showMyDB(personalMovieDB.privat);

//Задание 3

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.generes[i] = prompt('Ваш любимый жанр под номером ' + Number(i + 1), '');
       // personalMovieDB.generes[i] = prompt(`Ваш любимый жанр под номером ${i}`, ''); вариант проще через БЭКТИКИ ``

        if (personalMovieDB.generes[i] == '' || personalMovieDB.generes[i] == null) {
            i--;
        }
    }
} 

writeYourGenres();
console.log(personalMovieDB);