"use strict";
//есть циклы while for do-while

console.log("CYCLES")
outer:
for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        if (i === 2 && j === 2){
            console.log("break to label");
            break outer; // (*)
        }
        console.log("i = ",i,"j = ",j)
    }
}

//если что можно делать с разными типами
for (let i = 0; i < 4;i+=2){
    switch (i){
        case 0:
            console.log("switch i = ",i)
            break
        case 1:
            console.log("switch i = ",i)
            break
        case 2:
            console.log("switch i = ",i)
            break
        case 3:
            console.log("switch i = ",i)
            break
        case 4:
            console.log("switch i = ",i)
            break
        case 5:
            console.log("switch i = ",i)
            break
    }
}