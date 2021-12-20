/////////////loop/////////////////
//////for////////////
var a;
for(a=1,b=13;b>3,a<11;b--,a++)
{
    console.log(a*b);
}

/////////for...in///////

function Fruits(name)
{
    this.name = name;
    this.color ='Yellow';
    this.taste = 'sweet and sour';
    this.price = '50 rs per kg';

}
var Mango = new Fruits('Alphanso')
for(var props in Mango)
{
    console.log(props+':'+Mango[props]);
}

////////for...of////////////

var flowers = ['Daisy', 'Lily', 'Rose','Jasmine'];
for(let value of flowers){
    console.log(value);
}

////////while////////////

var x = 1;
while(x<10){
    console.log(x);
    x++;
}

//////////do while ///////
var x=0;
do{ 
    console.log(x);
    x++;
     
}while(x<10);
