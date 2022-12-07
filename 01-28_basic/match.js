"use strict";


/*
Алгоритм сравнения двух строк довольно прост:

    Сначала сравниваются первые символы строк.
    Если первый символ первой строки больше (меньше),
    чем первый символ второй, то первая строка больше
    (меньше) второй. Сравнение завершено.

    Если первые символы равны, то таким же образом сравниваются уже
    вторые символы строк.

    Сравнение продолжается, пока не закончится одна из строк.

    Если обе строки заканчиваются одновременно, то они равны. Иначе,
    большей считается более длинная строка.

 */

