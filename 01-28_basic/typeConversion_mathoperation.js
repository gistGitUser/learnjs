"use strict";

console.log("TYPE CONVERSION")


let value = true;
console.log(typeof value); // boolean

value = String(value); // теперь value это строка "true"
console.log(typeof value); // string

console.log("6" / "2");
let str = "123";

let num = Number(str);
console.log(typeof num);

let age = Number("Любая строка вместо числа");
let sign = Number("10webfaszx");

console.log(age);
console.log(sign);

    /*
    Правила численного преобразования:
    Пробельные символы по краям обрезаются.
    Далее, если остаётся пустая строка, то
    получаем 0, иначе из непустой
    строки «считывается» число. При ошибке результат NaN.

    Особые случаи, в которых часто допускаются ошибки:

    undefined при численном преобразовании становится NaN, не 0.
    "0" и строки из одних пробелов типа " " при логическом преобразовании
     всегда true.

     */


//
console.log('1' + 2) //12
console.log(2+'1')   //21
console.log(2+2+'1') //41
console.log('6'/'2') //41

//Nullish coalescing operator '??'

/*
Так как он обрабатывает null и undefined одинаковым образом,
то для этой статьи мы введём специальный термин. Для краткости
будем говорить, что значение «определено», если оно не равняется
ни null, ни undefined.

Результат выражения a ?? b будет следующим:

    если a определено, то a,
    если a не определено, то b.

 */

let user;


console.log(user ?? "Аноним"); // Аноним (user не существует)

user = "Иван";
console.log(user ?? "Аноним"); // Иван (user существует)

//можно применять для цепочек значений
let firstName = null;
let lastName = null;
let nickName = "Суперкодер";
console.log(firstName ?? lastName ?? nickName ?? "Аноним")

/*

    || возвращает первое истинное значение.
    ?? возвращает первое определённое значение.

 */

















