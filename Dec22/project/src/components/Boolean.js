var bool = new Boolean()
console.log(bool.constructor);
/////////////////////////
Boolean.prototype.color = function(){
    if(this.valueOf == true){
        return "Yellow";
    }
    else
    {
        return "Red";
    }
};

function show(){
 var color_my=true;
 console.log(color_my.color());
}

show();

////////////////////////////////////////////////
var bool1 = new Boolean(true);
//console.log(bool1.toSource());
console.log(bool1.toString());