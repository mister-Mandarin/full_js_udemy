/* Задание #2 на урок:

+ 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

+ 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

+ 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

+ 4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    privat: false
};

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

if (personalMovieDB.count >= 10 || personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);