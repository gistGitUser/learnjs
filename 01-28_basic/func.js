"use strict";

console.log("FUNCTION" );

//Function Declaration (Объявление Функции):
function sayHi() {
    console.log("Function Declaration Привет" );
}

//Function Expression (Функциональное Выражение).
//так как тут есть присваивание то нужна точка с запятой
let fSayHi = function() {
    console.log("Function Expression Привет" );
};

sayHi();
fSayHi();


function callback1(){
    console.log("call callback 1")
}

function callback2(){
    console.log("call callback 2")
}

function call(call1,call2,anon,choice){
    if (choice === 1){
        call1();
        return;
    }

    if (choice === 2){
        anon()
    }

    call2();
}

//можно вызвать так и анонимную функцию
call(callback1,callback2,function() { console.log("call ANON"); },1);
call(callback1,callback2,function() { console.log("call ANON"); },2);
call(callback1,callback2,null,0);

/*
остановился на этом моменте

Более тонкое отличие состоит, в том
, когда создаётся функция движком JavaScript.

Function Expression создаётся, когда выполнение доходит до него,
 и затем уже может использоваться.

Function Declaration можно использовать во всем скрипте
(или блоке кода, если функция объявлена в блоке).

 */

/*
Arrow functions
 */

{
    let sum = (a, b) => a + b;
    //если есть только один аргумент
    let double = n => n * 2;

    //многострочные arrow func
    let mul = (a, b) => {
        let result = a + b;
        return result;
    };

    console.log("Arrow sum",sum(1,2))
}




































































