var collect = new Array();
var i;
for(i=0;i<10;i++){
    collect[i]=i*5;
    console.log(collect[i]);
}

////////////////////////////
var flowers = ['Rose', 'Lily','Jasmine','Daisy','Sunflower']
function show(flowers){
    var i;
    for(i=0;i<flowers.length;i++){
        console.log(flowers[i]);
    }
}
show(flowers);

////////////////////////////

function display(){
    return new Array('brown', 'blue', 'black')
}
var colors = display()
for (var i in colors)
{console.log(colors[i]);}

