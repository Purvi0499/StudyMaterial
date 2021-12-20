//"use strict";  

// var msg =  "Hello World"       
// console.log(msg);  

example();  
function example() {  
 x= 89;   // It will also cause an error because x is not declared<br>  
}  


///////////strict mode having local scope//////////////
a=10;
example1();
function example1(){
    //"use strict";
    y = 94
}


/////////////spread operator///////////////////

let flowers = ["rose", "jasmine"]
let newFlowers = [...flowers, "daisy", "lily"]
console.log(newFlowers)

let moreFlowers = [...newFlowers]
console.log(moreFlowers)

let str = ["P", ..."URV", "I"];
console.log(str);

////////////////rest parameter////////////////

function show(...args){
    let sum = 0;
    for(let i of args)
    {
        sum = sum + i;
    }
    console.log(sum);
}
show(10,20,30)

//////////////