"use strict";

//stop
//https://learn.javascript.ru/object-methods

{
    let user = {
        name: "John",
        age: 30,
        //более короткая запись
        Bye: function (){
            console.log("Bye")
            console.log("my name",this.age);
        }
    };

    //в общем довольно удобно, что можно использовать
    //this в методах объекта

    user.Hi = function(){
        console.log("HI");
        console.log("my age",this.name);
    }

    user.Hi();
    user.Bye();

}

/*
В JavaScript ключевое слово «this» ведёт себя иначе,
 чем в большинстве других языков программирования.
 Его можно использовать в
любой функции, даже если это не метод объекта.

Значение this вычисляется во время выполнения кода, в
 зависимости от контекста.
Например, здесь одна и та же функция назначена двум разным
 объектам и имеет различное значение «this» в вызовах:

 */

{
    let user = { name: "John" };
    let admin = { name: "Admin" };

    function sayHi() {
        console.log( this.name );
    }

// используем одну и ту же функцию в двух объектах
    user.f = sayHi;
    admin.f = sayHi;

// эти вызовы имеют  разное значение this
// "this" внутри функции - это объект "перед точкой"
    user.f(); // John  (this == user)
    admin.f(); // Admin  (this == admin)

    admin['f'](); // Admin (нет разницы между использованием точки или квадратных скобок для доступа к объекту)
}

//когда используешь this
//лучше это делать в режиме strict
//т.к. в нём мы получим  undefined
//а в обычном режиме мы получим глобальное window
{
    function sayHi() {
        console.log(this);
    }

    sayHi(); // undefined
}

//У стрелочных функций нет «this»
/*
Если мы ссылаемся на this внутри такой функции,
то оно берётся из внешней «нормальной» функции.
 */

{
    console.log("operator NEW")

    /*
    Функции-конструкторы технически являются обычными
    функциями. Но есть два соглашения:

    Имя функции-конструктора должно начинаться с большой
     буквы.
    Функция-конструктор должна выполняться только с
     помощью оператора "new".

     вообще по коду функция ничего не возвразщает
     и если вызывать её как обычную функцию
     то словишь type errror
     */

    function User(name) {
        this.name = name;
        this.isAdmin = false;
    }

    let user = new User("Jack");
    // let user2 = User("Jack");
    // console.log(user2.name,user2.isAdmin)
    console.log(user.name,user.isAdmin)

    /*
  если нам будет необходимо создать других пользователей,
  мы можем просто вызвать new User("Ann"),
  new User("Alice") и так далее. Данная конструкция
  гораздо удобнее и читабельнее, чем многократное
  создание литерала объекта.

  Это и является основной целью конструкторов –
  реализовать код для многократного создания
  однотипных объектов.


     */

    //можно сделать что-то типа анонимного конструктора
    /*
    // создаём функцию и сразу же вызываем её с помощью new
let user = new function() {
  this.name = "John";
  this.isAdmin = false;

  // ...другой код для создания пользователя
  // возможна любая сложная логика и инструкции
  // локальные переменные и так далее
};
  который можно будет выщвать только один раз

     */


}

{
    //new.target
    //эта штука позволяет вызывать функцию конструктор
    //без new, чтобы обеспечить более гибкое использование
    //кода, чтобы не ловить type error, в целом полезная
    //штука
    function User(name) {
        if (!new.target) { // в случае, если вы вызвали меня без оператора new
            return new User(name); // ...я добавлю new за вас
        }

        this.name = name;
    }

    let john = User("John"); // переадресовывает вызов на new User
    console.log(john.name); // John
  let john2 = new User("John2"); // переадресовывает вызов на new User
    console.log(john2.name); // John

}

{
    /*
    Обычно конструкторы не имеют оператора return
    если return всё же есть, то применяется простое правило:

    При вызове return с объектом, вместо this вернётся объект.
    При вызове return с примитивным значением, оно проигнорируется.

     */

    function BigUser() {

        this.name = "John";

        return { name: "Godzilla" };  // <-- возвращает этот объект
    }

    function SmallUser() {

        this.name = "John";

        return "wow"; // <-- возвращает this
    }


    console.log(new BigUser());
    console.log(new SmallUser());

    //можно создавать и методы внутри
    // конструктора, что тоже довольно удобно
    function User(name) {
        this.name = name;

        this.sayHi = function() {
            console.log( "Меня зовут: " + this.name );
        };
    }

    let john = new User("John");

    john.sayHi()

}

/*
Пропуск скобок

Кстати, мы можем не ставить круглые скобки после new:

let user = new User; // <-- без скобок
// то же, что и
let user = new User();

Пропуск скобок считается плохой практикой,
но просто чтобы вы знали, такой синтаксис разрешён спецификацией.

 */


//Опциональная цепочка '?.'

/*


У большинства наших пользователей есть адреса
в свойстве user.address с
улицей user.address.street, но некоторые из них их не указали.
в общем эта штука позволяет безопасно обращться к undefined


 */
{
    let user = {name:"user"};
    let user2 = {};

    console.log("user",user.name)
    console.log("user2",user2.name)
    //тут словим type error
    // console.log("user2",user2.name.address)
    //а тут нет т.к  ?. немедленно останавливает
    // вычисление, если левая часть не существует.
    console.log("user2 name?.adress",user2?.name?.address)
    console.log("user adress",user?.name?.address)


    //при проверке методов тоже так можно делать
    //но процедура проверки выглядит так
    //и поэтому нужно быть внимательным

    let userAdmin = {
        admin() {
            console.log("Я админ");
        }
    };

    let userGuest = {};

    userAdmin.admin?.(); // Я админ

    userGuest.admin?.(); // ничего не произойдет (такого метода нет)

}
    /*
    Синтаксис ?.[] также работает, если мы
    хотим использовать скобки [] для доступа к
    свойствам вместо точки .. Как и в предыдущих случаях,
    он позволяет безопасно считывать
    свойство из объекта, который может не существовать.
     */
{
    let key = "firstName";

    let user1 = {
        firstName: "John"
    };

    let user2 = null;

    console.log( user1?.[key] ); // John
    console.log( user2?.[key] ); // undefined


    //// ReferenceError: user is not defined
    // user?.address;


    delete user?.name; // удаляет user.name если пользователь существует
}

/*
Мы можем использовать ?. для безопасного
чтения и удаления, но не для записи
 */




































































