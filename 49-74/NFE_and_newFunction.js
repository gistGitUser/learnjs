
//https://learn.javascript.ru/function-object
//В JavaScript функции – это объекты.
{
function JustPRINT(){
    console.log("PRINT")
    console.log(this.name)//empty
}

let l = JustPRINT;

JustPRINT()
console.log(JustPRINT.name)
console.log(l.name)

/*
В спецификации это называется «контекстное имя»:
 если функция не имеет name, 
то JavaScript пытается определить его из контекста.
*/
function f(sayHi = function() {}) {
    console.log(sayHi.name); // sayHi (работает!)
  }
  
  f();

function args(a,b,c,d){
    args.counter++;
}  

//если имя определить невозможно, то выводится просто пустая строка


console.log(JustPRINT.length)
console.log(f.length)
console.log(args.length)

/*
Мы также можем добавить свои собственные свойства.

Давайте добавим свойство counter для отслеживания 
общего количества вызовов:
*/
args.counter = 0

args()
args()
args()

console.log("counter = ",args.counter)


/*
Named Function Expression или NFE – это термин
 для Function Expression, у которого есть имя.
*/

let NFE = function func(who) {
    
    if (who) {
        console.log(`Hello, ${who}`);
      } else {
        func("Guest"); // использует func, чтобы снова вызвать себя же
      }
};

/*
Добавление "func" после function не превращает
объявление в Function Declaration, потому
что оно все ещё является частью выражения присваивания.

Добавление такого имени ничего не ломает.
*/

console.log("NFE.name = ", NFE.name)


/*
Есть две важные особенности имени func, ради
 которого оно даётся:k
    Оно позволяет функции ссылаться на себя же.
    Оно не доступно за пределами функции.
*/

NFE()
NFE("Hello")
//func("Hello") //не работает, хотя внутри функции используется




// let collapse = document.getElementById(colId+i);
// let select = collapse.getElementsByTagName("select");
//Named Function Expression, or NFE

}


// Синтаксис "new Function"

{
  // let func = new Function([arg1, arg2, ...argN], functionBody);
/*
Функция создаётся с заданными аргументами 
arg1...argN и телом functionBody.
*/

/*
Главное отличие от других способов объявления
функции, которые были рассмотрены ранее, заключается в том, что функция создаётся 
полностью «на лету» из строки,
переданной во время выполнения.
*/
let sum = new Function('a', 'b', 'return a + b');
/*
Но new Function позволяет превратить любую 
строку в функцию. Например, можно 
получить новую функцию с сервера и затем выполнить её:
*/

/*
вообще - это может быть прикольной штукой для проерки кукисов
от утчеки(подумать над этим)

Это используется в очень специфических случаях, 
например, когда мы получаем код с сервера для 
динамической компиляции функции из шаблона, в 
сложных веб-приложениях.
*/

console.log(sum(11,14))














}










