

{
    //пример чейнинга
    console.log("EXER 1")
    let ladder = {
        step: 0,
        up() {
            this.step++;
            return this;
        },
        down() {
            this.step--;
            return this;
        },
        showStep: function() { // показывает текущую ступеньку
            console.log( this.step );
        }
    };

    ladder.down().down().up().up().up().up().up().up().showStep()

}

{
    function randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    function RandomInteger(min, max) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
}

{
    /*
    Переведите текст вида border-left-width в borderLeftWidth
     */

    function capitalize(str){
        return str.charAt(0).toUpperCase()+str.slice(1)
    }

    function camelize(str){

        let arr = str.split("-");
        for (let i = 1 ; i < arr.length;i++){
            arr[i] = capitalize(arr[i]);
        }
        return arr.join("")
    }

    console.log(camelize("background-color") === 'backgroundColor')
    console.log(camelize("list-style-image") === 'listStyleImage')
    console.log(camelize("-webkit-transition") === 'WebkitTransition')

    //решение с сайта выглядит более идиоматичным
    function camelizeLearn(str) {
        return str
            .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
            .map(
                // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
                // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
                (word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)
            )
            .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
    }
}
{
    console.log("////filterRange////")
    /*
    Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со
    значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
    Функция должна возвращать новый массив и не изменять исходный.
     */

    function filterRange(arr,a,b){
        return arr.filter(item => {
            return item >= a && item <= b;
        });
    }

    let arr = [5, 3, 8, 1];

    let filtered = filterRange(arr, 1, 4);

    console.log( filtered ); // 3,1 (совпадающие значения)

    console.log( arr ); // 5,3,8,1 (без изменений)

}

{
    console.log("Фильтрация по диапазону \"на месте\"")

    let arr = [5, 3, 8, 1];


    //решение с learnJS не сильно отличается
    function filterRangeInPlace(arr,a,b){
        for(let i = 0; i < arr.length;){
            if (!(arr[i]>= a && arr[i] <= b)){
                arr.splice(i,1);
                continue
            }
            i++;
        }
    }

    filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

    console.log( arr ); // [3, 1]
}

{
    console.log("копирование и сортировка arr.slice().sort();")
    function copySorted(arr) {
        return arr.slice().sort();
        //slice копирует массив а сорт сортирует строки по умолчанию
    }
    let arr = [5, 3, 8, 1];
    let arr2 = copySorted(arr);
    console.log(arr,arr2);
}

{
    //массив имён
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let users = [ vasya, petya, masha ];

    let names = users.map(item => item.name)

    console.log(names)
}

{
    let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
    let petya = { name: "Петя", surname: "Иванов", id: 2 };
    let masha = { name: "Маша", surname: "Петрова", id: 3 };

    let users = [ vasya, petya, masha ];

    let usersMapped = users.map(item => {
        return {
            fullName:item.name+" "+item.surname,
            id:item.id,
        }
    })

    console.log(usersMapped[0].id);
    console.log(usersMapped[0].fullName);

}

{
    function sortByAge (arr){
        arr.sort(function (a,b){
            return a.age - b.age;
        });
    }

    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let arr = [ vasya, petya, masha ];

    sortByAge(arr);

// теперь: [vasya, masha, petya]
    console.log(arr[0].name); // Вася
    console.log(arr[1].name); // Маша
    console.log(arr[2].name); // Петя
}

{
    //shuffle
//Тасование Фишера — Йетса.
    console.log("Тасование Фишера — Йетса.");
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

            // поменять элементы местами
            // мы используем для этого синтаксис "деструктурирующее присваивание"
            // подробнее о нём - в следующих главах
            // то же самое можно записать как:
            // let t = array[i]; array[i] = array[j]; array[j] = t
            [array[i], array[j]] = [array[j], array[i]];
        }
    }


    let count = {
        '123': 0,
        '132': 0,
        '213': 0,
        '231': 0,
        '321': 0,
        '312': 0
    };

    for (let i = 0; i < 1000000; i++) {
        let array = [1, 2, 3];
        shuffle(array);
        count[array.join('')]++;
    }


    for (let key in count) {
        console.log(`${key}: ${count[key]}`);
    }




}

{
    /*
    есть объект, который как-то создается внутри функции
    затем мы начинаем устанавливать ему различные поля
    и возвращаем его на выходе получаем новый объект
    с новыми свойствами
     */
    function groupById(array) {
        return array.reduce((obj, value) => {
            obj[value.id] = value;
            return obj;
        }, {})
    }

    let users = [
        {id: 'john', name: "John Smith", age: 20},
        {id: 'ann', name: "Ann Smith", age: 24},
        {id: 'pete', name: "Pete Peterson", age: 31},
    ];

    let usersById = groupById(users);

    console.log(usersById)

}

{
    console.log("//////sumSalaries/////")

    function sumSalaries(s){
        return Object.values(s).reduce((sum, current) => {
            return sum + current
        }, 0)

        // let result = 0;
        // for (let value of Object.values(s)) {
        //     result += value; // John, затем 30
        // }
        //
        // return result

    }

    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };


    console.log(sumSalaries(salaries));
}

{
    console.log("//////count/////");
    let user = {
        name: 'John',
        age: 30
    };
    function count(c){
        return Object.keys(c).length
    }

    console.log(count(user))

}

{
    function topSalary(salaries){
        let max = -1;
        let obj = -1;
        for (let entr of Object.entries(salaries)){

            [n,s] = entr;
            if (s > max){
                max = s;
                obj = entr;
            }
        }

        if (max === -1){
            return null;
        }

        return obj;

    }

    console.log("//////////let salaries////////")

    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };

    console.log(topSalary(salaries))
}
{
    /*
    Напишите функцию getLastDayOfMonth(year, month),
    возвращающую последнее число
    месяца. Иногда это 30, 31 или даже февральские 28/29.
     */
    function getLastDayOfMonth(year, month) {
        let date = new Date(year, month + 1, 0);
        return date.getDate();
    }

    function getSecondsToday() {
        let now = new Date();

        // создаём объект с текущими днём/месяцем/годом
        let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        let diff = now - today; // разница в миллисекундах
        return Math.round(diff / 1000); // получаем секунды
    }

    function getSecondsToTomorrow() {
        let now = new Date();

        // завтрашняя дата
        let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

        let diff = tomorrow - now; // разница в миллисекундах
        return Math.round(diff / 1000); // преобразуем в секунды
    }

    //or
    /*
    function getSecondsToTomorrow() {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
  let totalSecondsInADay = 86400;

  return totalSecondsInADay - totalSecondsToday;
}
     */


}

{
    //Исключить обратные ссылки
    let room = {
        number: 23
    };

    let meetup = {
        title: "Совещание",
        occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
        place: room
    };

    room.occupiedBy = meetup;
    meetup.self = meetup;

    //есть несколько вариантов для обхода циклических ссылок

    console.log( JSON.stringify(meetup, function replacer(key, value) {
        return (key != "" && value == meetup) ? undefined : value;
    }));

    console.log( JSON.stringify(meetup, function replacer(key, value) {
        return (this.occupiedBy == room.occupiedBy && key != 'number' || key == 'self' ) ? undefined : value;
    }));

    /*
    {
      "title":"Совещание",
      "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
      "place":{"number":23}
    }
    */
}