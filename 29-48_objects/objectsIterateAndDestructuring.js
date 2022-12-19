"use strict"
/*
Простые объекты также можно перебирать как и map
Object.keys, values, entries

Для простых объектов доступны следующие методы:

    Object.keys(obj) – возвращает массив ключей.
    Object.values(obj) – возвращает массив значений.
    Object.entries(obj) – возвращает массив пар [ключ, значение].

Обратите внимание на различия (по сравнению с map, например):
	Map 	Возвращает 	перебираемый объект
map.keys()

Object Возвращает 	«реальный» массив

Object.keys(obj), не obj.keys()

и различия в синтаксисе
 */

{
    let user = {
        name: "John",
        age: 30
    };


    // перебор значений
    for (let value of Object.values(user)) {
        console.log(value); // John, затем 30
    }

    /*

Object.keys/values/entries игнорируют символьные свойства

Так же, как и цикл for..in, эти методы
игнорируют свойства, использующие Symbol(...) в качестве ключей.

Обычно это удобно. Но если требуется учитывать
и символьные ключи, то для этого существует отдельный метод
Object.getOwnPropertySymbols, возвращающий
массив только символьных ключей. Также, существует
метод Reflect.ownKeys(obj), который возвращает все ключи.

     */

}


{
    let prices = {
        banana: 1,
        orange: 2,
        meat: 4,
    };

    let doublePrices = Object.fromEntries(
        // преобразовать в массив, затем map, затем fromEntries обратно объект
        Object.entries(prices).
        map(([key, value]) => [key, value * 2])
    );

    console.log(doublePrices.meat); // 8
}

//Destructuring assignment
//В JavaScript есть две чаще всего
//используемые структуры данных – это Object и Array.


{
    let arr = ["Ilya", "Kantor"];
    let [firstName, surname] = arr;
    //или так
    //let [firstName, surname] = "Ilya Kantor".split(' ');
    console.log(firstName); // Ilya
    console.log(surname);  // Kantor

/*
«Деструктуризация» не означает «разрушение».
«Деструктурирующее присваивание» не уничтожает массив.
Оно вообще ничего не делает с правой частью
присваивания, его задача – только скопировать нужные значения
в переменные. Это просто короткий вариант записи:
*/

}


// второй элемент не нужен
{
    let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

    console.log( title ); // Consul
}

{
    /*
Работает с любым перебираемым объектом с правой стороны

…На самом деле мы можем использовать любой
перебираемый объект, не только массивы:

let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);
     */
}

/*
Цикл с .entries() (map)

В предыдущей главе мы видели метод Object.entries(obj).

Мы можем использовать его с деструктуризацией для цикличного перебора ключей и значений объекта:

let user = {
  name: "John",
  age: 30
};

// цикл по ключам и значениям
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, затем age:30
}
 */


//swap example
//// Давайте поменяем местами значения: сделаем guest
//= "Pete", а admin = "Jane"
// [guest, admin] = [admin, guest];


/*
Если мы хотим не просто получить первые значения,
но и собрать все остальные, то мы можем добавить
ещё один параметр, который получает остальные значения,
используя оператор «остаточные параметры» – троеточие ("..."):
 */

{
    let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest это массив элементов, начиная с 3-го
    console.log(rest[0]); // Consul
    console.log(rest[1]); // of the Roman Republic
    console.log(rest.length); // 2
}




{
    //Деструктуризация объекта
    let options = {
        title: "Menu",
        width: 100,
        height: 200
    };
    let {width, title,  height} = options;

    console.log(title);  // Menu
    console.log(width);  // 100
    console.log(height); // 200
    /*
    Свойства options.title, options.width и options.height присваиваются соответствующим переменным.

Порядок не имеет значения.

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

Двоеточие показывает «что : куда идёт».
В примере выше свойство width сохраняется в
переменную w, свойство height сохраняется в h,
а title присваивается одноимённой переменной.

Для потенциально отсутствующих свойств мы
можем установить значения по умолчанию, используя "=",
как здесь:
     */


}

//Вложенная деструктуризация
{
    let options = {
        size: {
            width: 100,
            height: 200
        },
        items: ["Cake", "Donut"],
        extra: true
    };

    // деструктуризация разбита на несколько строк для ясности
    let {
        size: { // положим size сюда
            width,
            height
        },
        items: [item1, item2], // добавим элементы к items
        title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
    } = options;

    console.log(title);  // Menu
    console.log(width);  // 100
    console.log(height); // 200
    console.log(item1);  // Cake
    console.log(item2);  // Donut

}

{
    //хотя в целом это довольно удобная штука
    // мы передаём объект в функцию
    let options = {
        title: "My menu",
        items: ["Item1", "Item2"]
    };


    /*
    //можно сделать еще и так
function showMenu({
  title = "Untitled",
  width: w = 100,  // width присваиваем в w
  height: h = 200, // height присваиваем в h
  items: [item1, item2] // первый элемент items присваивается в item1, второй в item2
}) {
     */
// ...и она немедленно извлекает свойства в переменные
    function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
        // title, items – взято из options,
        // width, height – используются значения по умолчанию
        console.log( `${title} ${width} ${height}` ); // My Menu 200 100
        console.log( items ); // Item1, Item2
    }

    showMenu(options);
    // showMenu(); //error
    // showMenu({}); //ok
}


























