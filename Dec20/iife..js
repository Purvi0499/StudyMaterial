(function(){
    console.log('I am in IIFE');
})();

///////////////////////
(function(a,b,c){
    console.log(a*b*c);
})(2,5,8);

///////////////////////