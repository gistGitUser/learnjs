"use strict";

//примеры есть в exer.js
//все методы для массива
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots
{
    // Объявление  Существует два варианта синтаксиса
    // для создания пустого массива:

    let arr = new Array();
    let arr2 = []; //обычно используют этот вариант
    let arr3 = new Array("Яблоко", "Груша", "и тд");
    let arr4 = new Array(2); // создает массив с length 2



    let fruits = ["Яблоко", "Апельсин", "Слива"];

    //по индексу можно отдельно обращаться
    //к каждому элементу для read/write
    console.log(fruits[1]);
    fruits[1] = "test";
    console.log(fruits[1]);
    console.log(fruits.length);

    //можно добавлять различные свойства для массива
    fruits.name = "example name";
    fruits.addSymb = function (s){
        for (let i = 0 ; i < this.length;i++) {
            this[i] = this[i]+s;
        }
    };
    console.log(fruits);
    fruits.addSymb("s");
    console.log(fruits);

    /*
    Получение последних элементов при помощи «at»

    Допустим, нам нужен последний элемент массива.

    Некоторые языки программирования позволяют
    использовать отрицательные индексы для той же
    цели, как-то так: fruits[-1].

    Однако, в JavaScript такая запись не сработает.
    Её результатом будет undefined, поскольку индекс
    в квадратных скобках понимается буквально.

    Мы можем явно вычислить индекс последнего элемента,
    а затем получить к нему доступ вот так:
    fruits[fruits.length - 1].
*/
    console.log(fruits[fruits.length - 1]);
    console.log(fruits.at(-1));//тоже самое


}

{

    //Методы pop/push, shift/unshift
    console.log("Методы pop/push, shift/unshift");

    /*
push добавляет элемент в конец. + возвращает этот элемент
shift удаляет элемент в начале, сдвигая
очередь, так что второй элемент становится первым.
 + возвращает этот элемент
 */

    let fruits = ["Яблоко", "Апельсин", "Груша"];

    console.log( fruits.pop() ); // удаляем "Груша" и выводим его

    console.log( fruits ); // Яблоко, Апельсин
    fruits.push("Груша");// тоже что и fruits[fruits.length] = ....
    console.log( fruits );

    console.log( fruits.shift() );
    console.log( fruits );
    fruits.unshift('Яблоко');
    console.log( fruits );
}

{
    /*
    Внутреннее устройство массива
     */

    /*

Следует помнить, что в JavaScript
существует 8 основных типов данных.
Массив является объектом и, следовательно,
ведёт себя как объект.
Например, копируется по ссылке:
     */

    console.log("/////////Arrays structure///////////")
    let fruits = ["Банан"]

    let arr = fruits; // копируется по ссылке (две переменные ссылаются на один и тот же массив)

    arr.push("Груша"); // массив меняется по ссылке

    console.log(arr);
    console.log(fruits);

    /*
     Движок JavaScript старается хранить элементы
     массива в непрерывной области памяти, один
     за другим, так, как это показано на иллюстрациях
     к этой главе. Существуют и другие способы
     оптимизации, благодаря которым массивы работают
     очень быстро.
     */


    /*
    Но все они утратят эффективность, если мы
    перестанем работать с массивом как с «упорядоченной
    коллекцией данных» и начнём использовать его как
    обычный объект.
    Например, технически мы можем сделать следующее:
let fruits = []; // создаём массив

fruits[99999] = 5; // создаём свойство с индексом, намного превышающим длину массива

fruits.age = 25; // создаём свойство с произвольным именем


Варианты неправильного применения массива:

Добавление нечислового
свойства, например: arr.test = 5.
Создание «дыр», например: добавление arr[0],
затем arr[1000] (между ними ничего нет).
Заполнение массива в обратном порядке, например:
arr[1000], arr[999] и т.д.
     */


}

/*
Эффективность
Методы push/pop
выполняются быстро, а методы shift/unshift – медленно.
 */

/*
Операция shift должна выполнить 3 действия:

Удалить элемент с индексом 0.
Сдвинуть все элементы влево, заново пронумеровать их, заменив 1 на 0, 2 на 1 и т.д.
Обновить свойство length .
 */

//для массивов возможен и другой вариант цикла, for..of:
{
    console.log("///////for of/for in ////////")
    let fruits = ["Яблоко", "Апельсин", "Слива"];
    let fruits2 = ["Яблоко", "Апельсин", "Слива"];

    //такой способ не даёт доступа к индексам объектов
    for (let fruit of fruits) {
        console.log( fruit );
    }
    /*
    Технически, так как массив является
    объектом, можно использовать и вариант for..in: НО
     Существуют скрытые недостатки этого способа:

     Цикл for..in выполняет перебор всех
     свойств объекта, а не только цифровых.

    Цикл for..in оптимизирован под произвольные
    объекты, не массивы, и поэтому в 10-100 раз медленнее.
     */
    for (let key in fruits) {
        console.log( fruits[key],key );
    }
    /*
    В общем, не следует использовать цикл for..
    in для массивов.
    */

    /*
    20)
Свойство length автоматически
обновляется при изменении массива. Если быть
точными, это не количество элементов массива,
а наибольший цифровой индекс плюс один.
Например, единственный элемент, имеющий большой индекс,
даёт большую длину:
let fruits = [];
fruits[123] = "Яблоко";
alert( fruits.length ); // 124

21)
Ещё один интересный факт о свойстве
length – его можно перезаписать.
let arr = [1, 2, 3, 4, 5];
arr.length = 2; // укорачиваем до двух элементов
alert( arr ); // [1, 2]
arr.length = 5; // возвращаем length как было
alert( arr[3] ); // undefined: значения не восстановились
     */

/*
toString
Массивы по-своему реализуют метод toString,
 который возвращает список элементов, разделённых запятыми.
Например:
 */
console.log(fruits.toString())

    /*
    alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"

Массивы не имеют ни Symbol.toPrimitive,
ни функционирующего valueOf,
они реализуют только преобразование toString, таким
образом, здесь [] становится пустой строкой, [1]
становится "1", а [1,2] становится "1,2".
Когда бинарный оператор плюс "+" добавляет что-либо к
строке, он тоже преобразует это в строку, таким образом:
     */

    /*
    В JavaScript, в отличие от некоторых других языков программирования, массивы не следует
     сравнивать при помощи оператора ==.
     */

    console.log(fruits==fruits2);//false
    console.log(fruits===fruits2);//false

}

{
    console.log("*******METHODS*****")
    console.log("*******splice*****")
    let arr = ["Я", "изучаю", "JavaScript"];
    /*
    Метод arr.splice(str) – это универсальный «швейцарский
    нож» для работы с массивами. Умеет всё: добавлять,
    удалять и заменять элементы.
     */
    console.log(arr)
    arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
    console.log(arr)
    //добавление
    arr.splice(1, 0,"example");
    console.log(arr)
    let removed = arr.splice(0, 2);
    console.log(removed)//splice возвращает удаленные элементы
    arr.splice(0, 0,removed[0],removed[1]);

    /*
    Отрицательные индексы разрешены
    В этом и в других методах массива допускается использование отрицательного индекса.
    Он позволяет начать отсчёт элементов с конца, как тут:
     */
    arr.splice(-1,0,63,25,15,"raw data")
    console.log(arr)
    //'Я', 'example', 63, 25, 15, 'raw data', 'JavaScript']

}

{
    console.log("*******slice*****")
    /*
    Он возвращает новый массив, в который копирует
    элементы, начиная с индекса start и до end
    (не включая end). Оба индекса
    start и end могут быть отрицательными.
     */

    let arr = ["t", "e", "s", "t"];

    console.log( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)

    console.log( arr.slice(-2) ); // s,t (копирует с -2 до конца)

}

//Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.
//
// Его синтаксис:
//
// arr.concat(arg1, arg2...)
{
    let arr = [1, 2];
    console.log( arr.concat([3, 4]) ); // 1,2,3,4
    console.log( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
    console.log( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

    let arrayLike = {
        0: "что-то",
        1: "ещё",
        2: 3,
            //если не добавить это свойство то
        //объект просто вствится в конец
        //если добавить то каждое свойство
        //будет добавлено как отдельный элемент
        [Symbol.isConcatSpreadable]: true,
        length: 3 //также важно указать правильную длину
        //а то не зарабоает нормально
    };

    console.log( arr.concat(arrayLike) ); // 1,2,что-то,ещё

    /*
    Метод arr.forEach позволяет
     запускать функцию для каждого элемента массива.
     */

    ["Bilbo", "Gandalf", "Nazgul"].forEach(function(item, index, array) {
      console.log(`${item} имеет позицию ${index} в ${array}`)
    });

}


/*
indexOf/lastIndexOf и includes
Методы arr.indexOf, arr.lastIndexOf и arr.includes
имеют одинаковый синтаксис и делают по сути то же
самое, что и их строковые аналоги, но работают с
элементами вместо символов:

arr.indexOf(item, from) ищет item, начиная с индекса from,
и возвращает индекс, на котором был найден
искомый элемент, в противном случае -1.
arr.lastIndexOf(item, from) – то же самое, но ищет
справа налево.
arr.includes(item, from) – ищет item, начиная с индекса
from, и возвращает true, если поиск успешен.
 */
{
    let arr = [1, 0, false];
    //Обратите внимание, что методы используют
    //строгое сравнение ===. Таким образом, если мы ищем
    //false, он находит именно false, а не ноль.
    console.log( arr.indexOf(0) ); // 1
    console.log( arr.indexOf(false) ); // 2
    console.log( arr.indexOf(null) ); // -1

    console.log( arr.includes(1) ); // true

    /*
    Кроме того, очень незначительным отличием includes
    является то, что он правильно
    обрабатывает NaN в отличие от indexOf/lastIndexOf:
     */

    const arr1 = [NaN];
    console.log( arr1.indexOf(NaN) ); // -1 (должен быть 0, но === проверка на равенство не работает для NaN)
    console.log( arr1.includes(NaN) );// true (верно)

}

/*
find и findIndex
Представьте, что у нас есть массив объектов.
Как нам найти объект с определённым условием?

Здесь пригодится метод arr.find.
 */
{

    let users = [
        {id: 1, name: "Вася"},
        {id: 2, name: "Петя"},
        {id: 3, name: "Маша"}
    ];

    /*

    let result = arr.find(function(item, index, array) {
  // если true - возвращается текущий элемент и
   перебор прерывается
  // если все итерации оказались ложными, возвращается
   undefined
});

    Функция вызывается по очереди для каждого элемента
     массива:

item – очередной элемент.
index – его индекс.
array – сам массив.
     */

    let user = users.find(item => item.id === 1);
/*
Обратите внимание, что в данном примере мы передаём
 find функцию item => item.id == 1, с одним аргументом.
 Это типично, дополнительные аргументы этой функции
  используются редко.

  Метод arr.findIndex – по сути, то же самое, но возвращает
  индекс, на котором был найден элемент, а не сам элемент,
  и -1, если ничего не найдено.
 */
    console.log(user.name); // Вася
}

/*
filter
Метод find ищет один (первый попавшийся) элемент,
на котором функция-колбэк вернёт true.
На тот случай, если найденных элементов может быть много,
предусмотрен метод arr.filter(fn).

Синтаксис этого метода схож с find, но filter возвращает
 массив из всех подходящих элементов:
 */

{
    let users = [
        {id: 1, name: "Вася"},
        {id: 2, name: "Петя"},
        {id: 3, name: "Маша"}
    ];

// возвращает массив, состоящий из двух первых пользователей
    let someUsers = users.filter(item => {
        // в данном случае можно сделать так
        // но просто для наглядности можно
        //расписать немного подробнее
        // return item.name.includes("я");
        if (item.name.includes("я")) {
            return true;
        }
        return false;
    });

    console.log(someUsers); // 2
}

//map
/*
Метод arr.map является
одним из наиболее полезных
и часто используемых.
Он вызывает функцию для каждого элемента массива и
возвращает массив результатов выполнения этой функции.

let result = arr.map(function(item, index, array) {
  // возвращается новое значение вместо элемента
});
 */
{
    let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
    console.log(lengths); // 5,7,6
}

/*
Вызов arr.sort() сортирует
массив на месте, меняя в нём порядок элементов.
 */
{
    let arr = [ 1, 2, 15 ];
// метод сортирует содержимое arr
    arr.sort();
    console.log( arr );  // 1, 15, 2
    /*
    Порядок стал 1, 15, 2. Это неправильно! Но почему?
    По умолчанию элементы сортируются как строки.
     */

    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
    }

    arr.sort(compareNumeric);
    console.log(arr)//теперь всё нормально
    /*
    Кстати, если мы когда-нибудь захотим узнать, какие элементы сравниваются –
    ничто не мешает нам вывести их на экран:
    [1, -2, 15, 2, 0, 8].sort(function(a, b) {
  alert( a + " <> " + b );
  return a - b;
});
     */
        let arr2 = [1, -2, 15, 2, 0 , 8];
        let arr3 = arr2.sort(function(a, b) {
        console.log( a + " <> " + b );
        return a - b;
    });

    console.log(arr2)
    console.log(arr3)

    //так сортировка выглядит более аккуратной
    //arr.sort( (a, b) => a - b );

}

{
    /*
    reverse split и join
    Метод arr.reverse меняет порядок элементов в arr
    на обратный.
    Например:
     */

    let arr = [1, 2, 3, 4, 5];
    arr.reverse();

    console.log( arr ); // 5,4,3,2,1


    let names = 'Вася, Петя, Маша';

    let arrSpl = names.split(', ');

    for (let name of arrSpl) {
        console.log( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
    }

    /*
    У метода split есть необязательный второй числовой
    аргумент – ограничение на количество элементов в
    массиве. Если их больше, чем указано, то остаток
    массива будет отброшен.
    На практике это редко используется:
     */
    let arr3 = 'Вася, Петя, Маша, Саша'.split(', ', 2);

    console.log(arr3); // Вася, Петя
    //Разбивка по буквам
    let str = "тест";

    console.log( str.split('') ); // т,е,с,т

    let etarr = ['Вася', 'Петя', 'Маша'];

    let str2 = etarr.join(';'); // объединить массив в строку через ;

    console.log( str2 ); // Вася;Петя;Маша

}

//reduce/reduceRight
//Методы arr.reduce и arr.reduceRight
//похожи на методы forEach, for или for..of  map.
//Но Они используются для вычисления
//какого-нибудь единого значения на основе всего массива.
{
//    let value = arr.reduce(function(accumulator,
//   item, index, array) {
//   // ...
// }, [initial]);

/*
Аргументы:

accumulator – результат предыдущего вызова этой
 функции, равен initial при первом вызове (если передан
  initial),
item – очередной элемент массива,
index – его индекс,
array – сам массив.

 */
    console.log("////////REDUCE//////");
    let arr = [1, 2, 3, 4, 5];
    //let result = arr.reduce((sum, current) => sum + current);
    let result = arr.reduce((sum, current) => {
       return  sum + current;
    }, 0);
    //Мы также можем опустить начальное значение:
    /*
    Результат – точно такой же! Это потому, что
    при отсутствии initial в качестве первого значения
    берётся первый элемент массива, а перебор стартует
     со второго.
Поэтому рекомендуется всегда указывать начальное значение.

Метод arr.reduceRight работает аналогично,
 но проходит по массиву справа налево.

     */
    console.log(result); // 15

    /*
              sum	current	result
первый вызов	0	  1	    1
второй вызов	1	  2	    3
третий вызов	3	  3	    6
четвёртый вызов	6	  4	    10
пятый вызов	    10	  5	    15

     */





}



{
    console.log("////////isArray//////");
    let arr = [1, 2, 3, 4, 5];
    let user = {
        test:"test"
    }
    /*
    typeof всё равно что перед ним будет, т.к.
    массив это объект, для различия,
    есть специальный метод Array.isArray()
     */
    console.log(typeof arr)
    console.log(typeof user)
    console.log(Array.isArray(arr));
    console.log(Array.isArray(user));
}

/*
Большинство методов поддерживают «thisArg»
 */
{
    /*
    arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);

Этот параметр не объяснялся выше, так как очень
 редко используется, но для
наиболее полного понимания темы мы обязаны его рассмотреть.
     */

    console.log("THIS ARGGGGGGGG")
    let army = {
        minAge: 18,
        maxAge: 27,
        canJoin(user) {
            return user.age >= this.minAge &&
                   user.age < this.maxAge;
        }
    };

    let users = [
        {age: 16},
        {age: 20},
        {age: 23},
        {age: 30}
    ];

// найти пользователей, для которых
//army.canJoin возвращает true

    /*
    в целом выглядит логично, но сейчас более идиоматичным считается второй
    вариант
     */
//     let soldiers = users.filter(army.canJoin, army);

    //делает тоже самое
    let soldiers = users.filter(user => army.canJoin(user))
/*
Если бы мы в примере выше использовали просто
users.filter(army.canJoin), то вызов army.canJoin был бы в режиме отдельной функции,
с this=undefined. Это тут же привело бы к ошибке.
 */


    console.log(soldiers.length); // 2
    console.log(soldiers[0].age); // 20
    console.log(soldiers[1].age); // 23

}

/*
если нужны все методы то они будут выше
Шпаргалка по методам массива:

Для добавления/удаления элементов:

push (...items) – добавляет элементы в конец,
pop() – извлекает элемент с конца,
shift() – извлекает элемент с начала,
unshift(...items) – добавляет элементы в начало.
splice(pos, deleteCount, ...items) – начиная с индекса pos, удаляет deleteCount элементов и вставляет items.
slice(start, end) – создаёт новый массив, копируя в него элементы с позиции start до end (не включая end).
concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.
Для поиска среди элементов:

indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
findIndex похож на find, но возвращает индекс вместо значения.
Для перебора элементов:

forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.
Для преобразования массива:

map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
sort(func) – сортирует массив «на месте», а потом возвращает его.
reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
split/join – преобразует строку в массив и обратно.
reduce/reduceRight(func, initial) – вычисляет одно значение на
основе всего массива, вызывая func для каждого элемента и
передавая промежуточный результат между вызовами.
Дополнительно:

Array.isArray(arr) проверяет, является ли arr массивом.
 */




































