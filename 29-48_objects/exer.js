

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



}