"use strict";

funcObjects();
funcObjectsCopy();


function funcObjects(){


    console.log("Objects START");

    /*
    Объект может быть создан с помощью фигурных скобок
    {…} с необязательным списком свойств. Свойство – это
    пара «ключ: значение», где ключ – это строка (также
    называемая «именем свойства»),
    а значение может быть чем угодно.
     */

    let user = new Object(); // синтаксис "конструктор объекта"
    let userL = {};  // синтаксис "литерал объекта"

    /*
        можно сразу создать объект со свойствами
     */
    let userWithProps = {     // объект
        name: "John",  // под ключом "name" хранится значение "John"
        age: 30,        // под ключом "age" хранится значение 30
        "likes birds": true
        // Имя свойства может состоять из нескольких слов,
        // но тогда оно должно быть заключено в кавычки:
    };

    //добавить/удалить свойство можно в любой момент
    userWithProps.isAdmin = true;
    console.log(userWithProps)
    delete userWithProps.age;
    console.log(userWithProps)
    //обращение к свойству в ключ пишется через пробел
    console.log(userWithProps["likes birds"])


    function makeUser(name, age) {
        return {
            name, // то же самое, что и name: name
            age   // то же самое, что и age: age
            // ...
        };
    }


    let ob = makeUser("wow","old")
    console.log(ob);

    //check props for undefined
    let userUnd = {};
    console.log("user.noSuchProperty === undefined",user.noSuchProperty === undefined)
    //но есть более этичный способ для проверки
    console.log( `"name" in userWithProps`,"name" in userWithProps)
    console.log(`"home" in userWithProps`, "home" in userWithProps)

    //соответсвенно можно и перебор так организовать
    for (let key in userWithProps) {
       console.log(key,userWithProps[key])
    }

    console.log("Objects END");




}


function funcObjectsCopy(){
    console.log("funcObjectsCopy START");

    //Сравнение по ссылке
    let a = {};
    let b = a; // копирование по ссылке
    console.log(a == b);
    console.log(a === b);//true т.к. это один и тот же объект
    let c = {};
    let d = {};
    console.log(c == d);
    console.log(c === d);//false

    {
        let user = {
            name: "John",
            age: 30
        };

        let clone = {}; // новый пустой объект

// давайте скопируем все свойства user в него
        for (let key in user) {
            clone[key] = user[key];
        }
        //для простого копирования - это будет работать
        let clone2 = Object.assign({}, user);

        console.log("clone test");
        console.log(user === clone);
        console.log(user === clone2);

    }

    //Вложенное клонирование
    {
        let user = {
            name: "John",
            sizes: {
                height: 182,
                width: 50
            }
        };
        //можно юзать loadsh
        let clone = _.cloneDeep(user);

        console.log(clone);

    }



    console.log("funcObjectsCopy END");
}