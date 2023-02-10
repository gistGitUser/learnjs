"use strict"


//Для «var» не существует блочной области видимости
/*
Область видимости переменных var ограничивается либо функцией,
 либо, если переменная
глобальная, то скриптом. Такие переменные доступны за пределами блока.
Аналогично для циклов: var не может быть блочной
или локальной внутри цикла:
 */


if (true){
    var b = "b"
}

function testVar(){
    var a = "a";
    console.log(a)
}

console.log(b)
//«var» допускает повторное объявление
//let user;
// let user; // SyntaxError: 'user' has already been declared

//«var» обрабатываются в начале запуска функции

/*
 переменные var считаются объявленными с самого начала
 исполнения функции вне зависимости от того, в каком месте
  функции реально находятся их объявления
 (при условии, что они не находятся во вложенной функции).
 */

/*
Это поведение называется «hoisting» (всплытие,
поднятие), потому что все
объявления переменных var «всплывают» в самый верх функции.
 */

//Объявления переменных «всплывают», но присваивания значений – нет.
/*
function sayHi() {
  alert(phrase);

  var phrase = "Привет";
}

sayHi();

Поскольку все объявления переменных var обрабатываются
в начале функции, мы можем ссылаться на них в любом месте. Однако
, переменные имеют значение undefined до строки с присвоением значения.

 */

/*
Глобальный объект

Глобальный объект предоставляет переменные и функции,
доступные в любом месте программы. По умолчанию это те,
что встроены в язык или среду исполнения.

В браузере он называется window, в Node.js — global, в другой среде
исполнения может называться иначе.


Ко всем свойствам глобального объекта можно обращаться напрямую:
В браузере глобальные функции и переменные, объявленные с помощью var
(не let/const!), становятся свойствами глобального объекта:

 var gVar = 5;

alert(window.gVar); // 5 (становится свойством глобального объекта)


То же самое касается функций, объявленных с помощью
синтаксиса Function Declaration (выражения с
ключевым словом function в основном потоке кода, не Function Expression)

Если свойство настолько важное, что вы хотите сделать его доступным
для всей программы, запишите его в глобальный объект напрямую:

// сделать информацию о текущем пользователе глобальной, для предоставления доступа всем скриптам
window.currentUser = {
  name: "John"
};

Использование для полифилов

Глобальный объект можно использовать, чтобы
проверить поддержку современных возможностей языка.

Например, проверить наличие встроенного объекта
Promise (такая поддержка отсутствует в очень старых браузерах):

 */

console.log("Contains promise",window.Promise)









