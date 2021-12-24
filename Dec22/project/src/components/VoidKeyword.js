var x , y, z;
x = void(y=10,z=24);
console.log(x, y, z);

/////////////////void in iife///////////////////

void function hello(){
    function text(){
        console.log('Hi welcome to MCU');
    }
    text();
}();

//////////////////////////////////////