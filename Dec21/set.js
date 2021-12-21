let vehicles = new Set(['car', 'truck','bike','auto']);
console.log(vehicles);
console.log(vehicles.size);
console.log(vehicles.add('jcb'));
console.log(vehicles.delete('jcb'));
var itr = vehicles.entries();
for(var vehi of itr){
    console.log(vehi);
}
function details(values){
    console.log(values);
}
vehicles.forEach(details);

