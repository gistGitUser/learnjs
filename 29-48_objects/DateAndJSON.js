"use strict"

{
    let now = new Date();
    console.log(now);

    /*
    Целое число, представляющее собой
    количество миллисекунд, прошедших с
    начала 1970 года, называется таймстамп (англ. timestamp).
     */

    let Jan01_1970 = new Date(0);
    let Jan02_1970 = new Date(24 * 3600 * 1000);
    console.log(Jan01_1970);
    console.log(Jan02_1970);

    /*
    Датам до 1 января 1970 будут соответствовать
     отрицательные таймстампы, например:
     */
    let Dec31_1969 = new Date(-24 * 3600 * 1000);
    console.log( Dec31_1969 );

    let date = new Date("2017-01-26");
    console.log(date);
// Время не указано, поэтому оно ставится в полночь по Гринвичу и
// меняется в соответствии с часовым поясом места выполнения кода
// Так что в результате можно получить
// Thu Jan 26 2017 11:00:00 GMT+1100 (восточно-австралийское время)
// или
// Wed Jan 25 2017 16:00:00 GMT-0800 (тихоокеанское время)

}


{
    /*
    new Date(year, month, date, hours, minutes, seconds, ms)

   Создать объект Date с заданными компонентами в местном
   часовом поясе. Обязательны только первые два аргумента.

   year должен состоять из четырёх цифр. Для совместимости
   также принимаются 2 цифры и рассматриваются
   как 19xx, к примеру, 98 здесь это тоже самое, что
   и 1998, но настоятельно
   рекомендуется всегда использовать 4 цифры.

   month начинается с 0 (январь) по 11 (декабрь).
   Параметр date здесь представляет собой день месяца.
   Если параметр не задан, то принимается значение 1.
   Если параметры hours/minutes/seconds/ms отсутствуют,
    их значением становится 0.

     */

    //Например:
   console.log(new Date(2011, 0, 1, 0, 0, 0, 0)) ; // // 1 Jan 2011, 00:00:00
   console.log(new Date(2011, 0, 1)); // то же самое, так как часы и проч. равны 0
}

//Получение компонентов даты
/*
Существуют методы получения года, месяца и т.д. из объекта Date:

getFullYear()
    Получить год (4 цифры)
getMonth()
    Получить месяц, от 0 до 11.
getDate()
    Получить день месяца, от 1 до 31, что несколько
    противоречит названию метода.
getHours(), getMinutes(), getSeconds(), getMilliseconds()
    Получить, соответственно, часы, минуты, секунды
     или миллисекунды.
Кроме того, можно получить определённый день недели:

getDay()
    Вернуть день недели от 0 (воскресенье) до 6 (суббота).
    Несмотря на то, что в ряде стран за первый день недели
    принят понедельник, в JavaScript начало
    недели приходится на воскресенье.
 */
/*
Все вышеперечисленные методы возвращают значения в соответствии
 с местным часовым поясом.

Однако существуют и их UTC-варианты, возвращающие день,
месяц, год для временной зоны UTC+0: getUTCFullYear(),
getUTCMonth(), getUTCDay(). Для их использования требуется
после "get" подставить "UTC".
 */
{
// текущая дата
    let date = new Date();

// час в вашем текущем часовом поясе
    console.log( date.getHours() );

// час в часовом поясе UTC+0 (лондонское время без перехода на летнее время)
    console.log( date.getUTCHours() );
}

//Установка компонентов даты
/*

    setFullYear(year, [month], [date])
    setMonth(month, [date])
    setDate(date)
    setHours(hour, [min], [sec], [ms])
    setMinutes(min, [sec], [ms])
    setSeconds(sec, [ms])
    setMilliseconds(ms)
    setTime(milliseconds) (устанавливает дату в виде целого
    количества миллисекунд, прошедших с 01.01.1970 UTC)

У всех этих методов, кроме setTime(),
есть UTC-вариант, например: setUTCHours().

 */

//Автоисправление даты
/*
Автоисправление – это очень полезная особенность объектов Date.
Можно устанавливать компоненты даты вне
обычного диапазона значений, а объект сам себя исправит.

Пример:

let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
alert(date); // ...1st Feb 2013!
 */

//Преобразование к числу, разность дат
{
    console.log("/////Date conversion/////")
    let date = new Date();
    console.log(+date);

    let start = new Date(); // начинаем отсчёт времени

// выполняем некоторые действия
    for (let i = 0; i < 1000000; i++) {
        let doSomething = i * i * i ;
    }


    // заканчиваем отсчёт времени
        let end = new Date();
        console.log( `Цикл отработал за ${end - start} миллисекунд` );
}

//Бенчмаркинг
//какая функция отработает быстрее?
{
    function diffSubtract(date1, date2) {
        return date2 - date1;
    }

    function diffGetTime(date1, date2) {
        return date2.getTime() - date1.getTime();
    }

    function bench(f) {
        let date1 = new Date(0);
        let date2 = new Date();

        let start = Date.now();
        for (let i = 0; i < 100000; i++) f(date1, date2);
        return Date.now() - start;
    }

    let time1 = 0;
    let time2 = 0;


    // добавляем для "разогрева" перед основным циклом
    /*
    т.к. Современные интерпретаторы JavaScript начинают
     применять
    продвинутые оптимизации только к «горячему коду»,
     */
    bench(diffSubtract);
    bench(diffGetTime);

// bench(diffSubtract) и bench(diffGetTime) поочерёдно запускаются 10 раз
    for (let i = 0; i < 10; i++) {
        time1 += bench(diffSubtract); //235 мс
        time2 += bench(diffGetTime); //быстрее где-то в 9 раз
    }

    console.log( 'Итоговое время diffSubtract: ' + time1 );
    console.log( 'Итоговое время diffGetTime: ' + time2 );
}

/*
Разбор строки с датой

Метод Date.parse(str) считывает дату из строки.

Формат строки должен быть следующим:
YYYY-MM-DDTHH:mm:ss.sssZ, где:

    YYYY-MM-DD – это дата: год-месяц-день.
    Символ "T" используется в качестве разделителя.
    HH:mm:ss.sss – время: часы, минуты, секунды и миллисекунды.
    Необязательная часть 'Z' обозначает часовой пояс
     в формате +-hh:mm. Если указать просто
      букву Z, то получим UTC+0.

 */

{
    //-07:00 добавлет 7 часов и добавляет часовой пояс
    //т.е. для gmt 3 будет
    let ms = Date.parse('2012-01-26T13:51:50.417');

    console.log(ms); // 1327611110417 (таймстамп)
    console.log(new Date(ms)); // 1327611110417 (таймстамп)
    //Можно тут же создать объект new Date из таймстампа:
}
//Формат JSON, метод toJSON
{
    //JSON.stringify
    console.log("/////////JSON");
    let student = {
        name: 'John',
        age: 30,
        isAdmin: false,
        courses: ['html', 'css', 'js'],
        wife: null
    };

    let json = JSON.stringify(student);

    console.log(typeof json); // мы получили строку!

    console.log(json);
}

/*
JSON является независимой от языка спецификацией для данных,
поэтому JSON.stringify пропускает некоторые специфические
свойства объектов JavaScript.

А именно:

    Свойства-функции (методы).
    Символьные ключи и значения.
    Свойства, содержащие undefined.

let user = {
  sayHi() { // будет пропущено
    alert("Hello");
  },
  [Symbol("id")]: 123, // также будет пропущено
  something: undefined // как и это - пропущено
};

alert( JSON.stringify(user) ); // {} (пустой объект)

Важное ограничение: не должно быть циклических ссылок.

Например:
 */
{
    let room = {
        number: 23
    };

    let meetup = {
        title: "Conference",
        participants: ["john", "ann"]
    };

    meetup.place = room;       // meetup ссылается на room
    room.occupiedBy = meetup; // room ссылается на meetup
    //Uncaught TypeError: cyclic object value
   // JSON.stringify(meetup); // Ошибка: Преобразование цикличной структуры в JSON
}

//Исключаем и преобразуем: replacer
{
    //если нам нужно настроить процесс замены, например,
    //отфильтровать циклические ссылки,
    //то можно использовать второй аргумент JSON.stringify.

    let room = {
        number: 23
    };

    let meetup = {
        title: "Conference",
        participants: [{name: "John"}, {name: "Alice"}],
        place: room // meetup ссылается на room
    };

    room.occupiedBy = meetup; // room ссылается на meetup

    console.log( JSON.stringify(meetup, ['title', 'participants']) );
    //более мягкие правила
    console.log( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );

    //в качестве replacer мы можем использовать функцию, а не массив.
    console.log( "func replacer",JSON.stringify(meetup, function replacer(key, value) {
        return (key === 'occupiedBy') ? undefined : value;
    }));

    /*
    Третий аргумент в JSON.stringify(value, replacer, space) – это количество пробелов, используемых для удобного форматирования.
     */
    let user = {
        name: "John",
        age: 25,
        roles: {
            isAdmin: false,
            isEditor: true
        }
    };
    console.log(JSON.stringify(user, null, 2));


}


/*
Пользовательский «toJSON»
 */
{
    let room = {
        number: 23
    };

    let room2 = {
        number: 23,
        toJSON() {
            return this.number;
        }
    };

    let meetup = {
        title: "Conference",
        date: new Date(Date.UTC(2017, 0, 1)),
        room,
        room2,
    };

    console.log( JSON.stringify(meetup) );
    //"room":{"number":23}}
    //"room2":23

}

//let value = JSON.parse(str, [reviver]);
/*

str
    JSON для преобразования в объект.
reviver
    Необязательная функция, которая будет вызываться для
     каждой пары (ключ, значение) и может преобразовывать значение.

Например:
 */

{
    let numbers = "[0, 1, 2, 3]";

    numbers = JSON.parse(numbers);

    console.log( numbers[1],numbers ); // 1

    /*
    Вот типичные ошибки в написанном от
    руки JSON (иногда приходится писать его для отладки):

     let json = `{
  name: "John",                     // Ошибка: имя свойства без кавычек
  "surname": 'Smith',               // Ошибка: одинарные кавычки в значении (должны быть двойными)
  'isAdmin': false                  // Ошибка: одинарные кавычки в ключе (должны быть двойными)
  "birthday": new Date(2000, 2, 3), // Ошибка: не допускается конструктор "new", только значения.
  "friends": [0,1,2,3]                     // Здесь всё в порядке
}`;

Кроме того, JSON не поддерживает комментарии.
Добавление комментария в JSON делает его недействительным.

     */

    //Использование reviver
    let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

    //при помощи этой функции можно преобразовывать объекты
    //не только к дефолтным типам json а и к специфичным для js типам
    let meetup = JSON.parse(str, function(key, value) {
        //если этого не делать то вернется строка по умолчанию
        //и внизу была бы ошибка
        if (key === 'date') return new Date(value);
        //Кстати, это работает и для вложенных объектов:
        return value;
    });

    console.log( meetup.date.getDate() ); // 30 - теперь работает!

}




















































