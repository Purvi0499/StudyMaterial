// function myDisplayer(some) {
//     console.log(some);
//   }

// let myPromise  = new Promise(function(myResolve, myReject){
//     let x = 10;
//     if(x==0){
//      myResolve('Hi! I am okay');
//     }
//     else{
//      myReject('Oops! There is an error');
//     }

// });

// myPromise.then(
//     function(value){myDisplayer(value);},
//     function(error){myDisplayer(error);}
// )


// ////////////////////////////////////////////////////////////////

// let myPromise2 = new Promise(function(myResolve,myReject){
//     setTimeout(function(){console.log('Hi');},3000)
//     setTimeout(function(){console.log('Hello');},3000)

// });
// myPromise2.then(
//     function(value){
//         console.log(value);
//     }
// )
// /////////////////////////////////////////////////////////////////

// let myPromise3 = new Promise((myResolve, myReject)=>{
    
//     let add = 12;
//     if(add==15){
//         myResolve('success')
//     }
//     else{
//         myReject('failure')
//     }

// })

// myPromise3.then((message)=>{console.log('then block '+message)})
// .catch((message)=>{console.log('catch block '+message)})


// /////////////////////////// .race ////////////////////////////////////////
// const PromiseA = new Promise((resolve,reject) => {  
//     setTimeout(resolve("Promise 1 is first"),1000)  
// })  
  
// const PromiseB= new Promise((resolve,reject) =>{  
//     setTimeout(resolve("Promise 2 is first"),2000)  
// })  
  
// Promise.race([PromiseA,PromiseB]).then(result => {  
//     console.log(result);  
// })  


////////////////////////Promise chaining/////////////////////////////

let myPromiseP = ()=> { 
    return new Promise((resolve,reject) =>{
    resolve('In myPromiseP');
});
}

let myPromiseQ = () => { 
    return new Promise((resolve,reject) =>{
    resolve('In myPromiseQ');
});
}

let myPromiseR = () => { 
    return new Promise((resolve,reject) =>{
    resolve('In myPromiseR');
});
}

myPromiseP().then((P)=>{
    console.log(P);
    return myPromiseQ();
}).then((Q)=>{
    console.log(Q);
    return myPromiseR();
}).then((R)=>{
    console.log(R);
});
