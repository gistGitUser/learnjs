"use strict"

/*
setTimeout позволяет вызвать функцию один раз через
определённый интервал времени.
setInterval позволяет вызывать функцию регулярно, 
повторяя вызов через определённый интервал времени.

Эти методы не являются частью спецификации JavaScript. 
Но большинство сред выполнения JS-кода имеют 
внутренний планировщик и предоставляют доступ к 
этим методам. В частности, они поддерживаются во 
всех браузерах и Node.js.

*/

//setTimeout
{
    /*
    let timerId = setTimeout(func|code, [delay], 
        [arg1], [arg2], ...);
    
    func|code
    Функция или строка кода для выполнения. Обычно это 
    функция. По историческим причинам можно передать и 
    строку кода, но это не рекомендуется.
    delay Задержка перед запуском в миллисекундах (1000 мс 
    = 1 с). Значение по умолчанию – 0. arg1, arg2…
    Аргументы, передаваемые в функцию    
    */

    
    function sayHi() {
        console.log('Привет c таймаутом в 1000 мс');
      }
      
      setTimeout(sayHi, 1000);
      setTimeout("console.log('Привет c таймаутом в 2000 мс');", 2000);

      function sayHiParam(phrase, who) {
        console.log( phrase + ' ' + who );
      }
      setTimeout(sayHiParam, 3000, "Таймаут", "с параметром"); // Привет, Джон

      //Отмена через clearTimeout
      let TimerId =       setTimeout(sayHi, 3000, "Таймаут cancel", "с параметром"); // Привет, Джон
      console.log("TimerId = ",TimerId);
      clearTimeout(TimerId);
      console.log("cancel TimerId = ",TimerId);
};


