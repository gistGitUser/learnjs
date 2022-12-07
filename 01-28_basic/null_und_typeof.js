"use strict";

/*
В JavaScript null Это просто специальное значение,
 которое представляет собой «ничего»,
  «пусто» или «значение неизвестно».

  Значение «undefined»
  Оно означает, что «значение не было присвоено».

Если переменная объявлена, но ей не присвоено никакого
значения, то её значением будет undefined:
 */

console.log(typeof undefined) // "undefined"
console.log(typeof 0) // "number"
console.log(typeof 10n) // "bigint"
console.log(typeof true )// "boolean"
console.log(typeof "foo") // "string")
console.log(typeof Symbol("id")) // "symbol")
console.log(typeof Math) // "object"  (1)
console.log(typeof null )// "object"  (2)
console.log(typeof alert )// "function"  (3)


/*
Если функция не возвращает значения,
 это всё равно, как если бы она возвращала undefined:
 */















