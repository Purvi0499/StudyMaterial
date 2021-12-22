var arr = ['purvi', 'karina', 'katrina', 'shahid','ranbir'];
var [a,b,c,d,e] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);



// ///////////////////////////////////////
var arr = ['purvi', 'karina', 'katrina', 'shahid','ranbir'];
var [a,b,...args]=arr;
console.log(a);
console.log(b);
console.log(args);

// ////////////////////////////////////////
var arr = ['purvi', 'karina', 'katrina', 'shahid','ranbir'];
var [a,b,,d,]=arr;
console.log(a);
console.log(b);
console.log(d);

///////////////////////////////////////

a = 20, b= 115;
[a,b]=[b,a];
console.log(a);
console.log(b);

///////////////////////////////////////

function retArray(){
    return ['P','U','R','V'];
}
var[...args]=retArray();
console.log(args);

///////////////////////////////////////





