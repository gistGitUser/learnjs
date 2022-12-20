"use strict"

//Рекурсивные обходы
{
    let company = {
        sales: [{
            name: 'John',
            salary: 1000
        }, {
            name: 'Alice',
            salary: 600
        }],

        development: {
            sites: [{
                name: 'Peter',
                salary: 2000
            }, {
                name: 'Alex',
                salary: 1800
            }],

            internals: [{
                name: 'Jack',
                salary: 1300
            }]
        }
    };


    //если массив то просто проходимся reduce по нему
    //и считаем, в ином случае передаём объект дальше по рекурсии
    //
    function sumSalaries(department) {
        if (Array.isArray(department)) { // случай (1)
            return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
        } else { // случай (2)
            let sum = 0;
            for (let subdep of Object.values(department)) {
                sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
            }
            return sum;
        }
    }

    console.log(sumSalaries(company)); // 6700

}

{
    // Связанный список
    let list = {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    };
    //Альтернативный код для создания:
    let list2 = { value: 1 };
    list2.next = { value: 2 };
    list2.next.next = { value: 3 };
    list2.next.next.next = { value: 4 };
    /*
    Список можно легко разделить
    на несколько частей и впоследствии объединить обратно:
     */
    let secondList = list.next.next;
    list.next.next = null;
    //Для объединения:
    list.next.next = secondList;

    console.log(list);
// добавление нового элемента в список
    list = { value: "new item", next: list };
    console.log(list.next);
    list.next = list.next.next;
    console.log(list.next);
}

/*
Рекурсивно определяемая структура данных – это структура данных,
которая может быть определена с использованием самой себя.
 */












