function add(a,b,callback){
    console.log(`sum is ${a+b}`);
    callback();
}
function disp(){
    console.log(`display is called`)
}
add(5,6,disp);
