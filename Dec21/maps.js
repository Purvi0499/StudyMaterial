// var maps = new Map();
// maps.set('Purvi','name');
// maps.set('Amravati','Place');
// maps.set('Engineer','Occupation');
// console.log(maps);
// console.log(maps.size);

///////////////////////////////////////////////
// "use strict"
// var Col = new Map([
//     ['1','Black'],
//     ['2','Blue'],
//     ['3','Brown'],
//     ['4','Green']

// ]);

// for(let colo of Col.values()){
// console.log(colo);
// }

// for(let colo of Col.entries()){
//     console.log(`${colo[0]}:${colo[1]}`);
// }
/////////////////////////////////////////////////////

var cartoons = new Map([
    ['1','Osworld'],
    ['2', 'Dora'],
    ['3', 'Hattori'],
    ['4','Perman']
])

var itr = cartoons.values()
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

var itr1 = cartoons.entries()
console.log(itr1.next());
console.log(itr1.next());
console.log(itr1.next());
console.log(itr1.next());

var itr2 = cartoons.keys()
console.log(itr2.next());
console.log(itr2.next());
console.log(itr2.next());
console.log(itr2.next());



