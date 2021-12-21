let fname = 'Purvi',
lname = 'Lohana';
var info = {
    fname,
    lname
}
console.log(info.fname);
console.log(info.lname);
/////////////////////////////////////////
var home = 'house_name'
let house ={
    house_no:'40-A',
    [home] : 'Shreeji Krupa'
} 
console.log(house);

///////////////////////////////////////

let userinfo = {
    fname:'Purvi',
    lname:'Lohana',
    fullname(){
       return this.fname+" "+this.lname;
    }
}
console.log(userinfo.fullname());
///////////////////Merging objects//////////////////
let obj1 = {1: ' Purvi ', 2:' Khushi'}
let obj2 = {3: 'katrina', 4:'kareena' }
let obj3 = {5: 'abhishek'}
let final_obj = Object.assign(obj1,obj2,obj3);
console.log(final_obj);
let final_obj1 = {...obj3,...obj2,...obj1}
console.log(final_obj1);
delete obj2[3];
console.log(obj2[3]);

//////////////////////destructuring///////////////////////////////

let names = {name1:'Rahul', place:'Amravati',rollno:'17004031'};
let {name1,place,rollno} = names;
console.log(name1);
console.log(place);
console.log(rollno);

////////////////

let nam = {name1:'Rahul', place:'Amravati',rollno:'17004031'};
let {name1:a,place:b,rollno:c} = nam;
console.log(a);
console.log(b);
console.log(c);


///////////////////////////////////
const {a:num1=100, b:num2=200} = {a:300};  
console.log(num1); //300  
console.log(num2); //200  
