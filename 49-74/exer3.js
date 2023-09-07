
{
    console.log("Closure sum")
    // Сумма с помощью замыканий
    function sum(a) {

        return function(b) {
            return a + b; // берёт "a" из внешнего лексического окружения
        };

    }

    console.log( sum(1)(2) ); // 3
    console.log( sum(5)(-1) ); // 4

}

{
    console.log("by field")
    //сортировка по полю
    let users = [
        { name: "John", age: 20, surname: "Johnson" },
        { name: "Pete", age: 18, surname: "Peterson" },
        { name: "Ann", age: 19, surname: "Hathaway" }
    ];

    /*
    usual
    // по имени (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);
     */


    function byField(field) {
        return (a, b) => a[field] > b[field] ? 1 : -1;
    }

    users.sort(byField('name'));
    users.forEach(user => console.log(user.name)); // Ann, John, Pete

    users.sort(byField('age'));
    users.forEach(user => console.log(user.name)); // Pete, Ann, John


}
{
    //Сумма с произвольным количеством скобок
    function sum(a){
        let c_sum = a;

        c = function(b){
          c_sum+=b;
          return c   
        }

        f.toString = function(){
            return currentSum;
        }

        return c
    }

    function sum(a) {

        let currentSum = a;
      
        function f(b) {
          currentSum += b;
          return f;
        }
      
        f.toString = function() {
          return currentSum;
        };
      
        return f;
      }
      

    // let a = 
    console.log(String(sum(1)(2)(1)))
}