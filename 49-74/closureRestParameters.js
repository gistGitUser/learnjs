"use strict"

/*
Многие встроенные функции JavaScript поддерживают
произвольное количество аргументов.

почему не назвать variadic function?
т.к. по сути любая функция в js это v. func?
а для указания того что функция может обработать произвольное
число аргументов используют отдельный термин rest params?
 */
{
    function sum(a, b) {
        return a + b;
    }
    //обработает только два параметра
    console.log( sum(1, 2, 3, 4, 5) );

    function sumAll(...args) { // args — имя массива
        let sum = 0;

        for (let arg of args) sum += arg;

        return sum;
    }

    console.log( sumAll(1, 2, 3, 4, 5) ); //15


    function showName(firstName, lastName, ...titles) {
        console.log(( firstName + ' ' + lastName )); // Юлий Цезарь
        // Оставшиеся параметры пойдут в массив
        // titles = ["Консул", "Император"]
        console.log( titles[0] ); // Консул
        console.log(( titles[1] )); // Император
        console.log(( titles.length )); // 2
    }

    showName("Юлий", "Цезарь", "Консул", "Император");

}

/*
Остаточные параметры должны располагаться в конце

Остаточные параметры собирают все остальные аргументы, поэтому
 бессмысленно писать что-либо после них. Это вызовет ошибку:

function f(arg1, ...rest, arg2) { // arg2 после ...rest ?!
  // Ошибка
}

...rest должен всегда быть последним.
 */

//stop
//https://learn.javascript.ru/rest-parameters-spread-operator#the-arguments-variable



