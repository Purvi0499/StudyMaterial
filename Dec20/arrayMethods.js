// var Myname = Array.from('PurviLohana');
// console.log(Myname);

let mycount = Array.of(21);
console.log(mycount);
console.log(mycount.length);


var arr=[5,23,18,24,35];    
var result=arr.find(x=>x>10);    
console.log(result);  

var arr1=[5,22,19,25,34];    
var result=arr1.findIndex(x=>x>30);    
console.log(result);  

var movies = ['znmd', '3idiots', 'don','piku']
var names = movies.entries();
var key = movies.keys();
var value = movies.values();
console.log(...names);
console.log(...key);
console.log(...value);
var arrym=movies.fill('pk',2,4);
console.log(...arrym);

