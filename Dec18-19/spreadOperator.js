// /////////////spread operator///////////////////

let flowers = ["rose", "jasmine"]
let newFlowers = [...flowers, "daisy", "lily"]
console.log(newFlowers)

let moreFlowers = [...newFlowers]
console.log(moreFlowers)

let str = ["P", ..."URV", "I"];
console.log(str);