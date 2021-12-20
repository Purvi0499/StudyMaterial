var arrow = ()=>{
    console.log("this is arrow function");
}
arrow();

///////////////
var sum = (a,b)=>{
    var result;
    result = a + b;
    console.log(result);
};
sum(2,3);

/////////////////

var display = (a, ...args)=>{
    
    console.log(a+" "+args);

}
display(10,20,200,30,48);