function* furniture(){
yield 100,
yield 400,
yield 600,
yield
}
var mygen = furniture();
console.log(mygen.next().value);
console.log(mygen.next().value);
console.log(mygen.next().value);
console.log(mygen.next().value);

///////////////////////////////////////////////////
function *fruit(){
    yield 20;
}
var show = fruit();
console.log(show.next());//{value: 20, done: false}

//////////////////////return in generator////////////////////////////

function*retStatement(){
    yield "yield1";
    yield "yield";
    return "return1";
    yield "return2";
}
var retF = retStatement();
console.log(retF.next());
console.log(retF.next());
console.log(retF.next());
console.log(retF.next());

////////////////////generator with loop///////////////

function*vowels(){
    yield 'A';
    yield 'E';
    yield 'O';
    yield 'I';
    yield 'U';

}
for(let alpha of vowels()){
    console.log(alpha);
}

