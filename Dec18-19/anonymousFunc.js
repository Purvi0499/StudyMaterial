////////////Anonymous function//////////

var table = function(){
    console.log("hello, I am table")

}
table();
////////////Anonymous funtion as an argument//////
// setTimeout(function(){
//     console.log("Hello World");
// },1000);

var anon = function(a,b){
    return a+b;
}
function sum()
{
    var res;
    res = anon(10,20);
    console.log(res);
}
sum();
