console.log('normal string which is \n multiline');
console.log(`multiline string using 
template literal`);

//////////////string interpolation//////////////
var name1 = 'Purvi';  
var cname = 'house';  
console.log(`Hello, ${name1}!  
Welcome to ${cname}`); 

////////////////////////////////////////////

var x = 10;  
var y = 20;  
console.log(`sum of  ${x} and ${y} is:  
 ${x+y}`);  

 //////////////////////Tagged template///////////////////////

 function TaggedLiteral(str){
     console.log(str);
 }
 TaggedLiteral `Hi Purvi`

 /////////////////////Raw Text////////////

 var rawText = String.raw`Hi ! How are you?`;
 console.log(rawText);

 