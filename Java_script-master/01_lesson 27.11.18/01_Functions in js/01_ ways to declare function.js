// Diffrent ways to define function:

// 1. regular basic way: call function with name
function f1(){
    console.log("1. f1");
}

// 2. anonymous function: will be called through variable
let f2 = function (){
    console.log("2. f2");
}

// 3. arrow function. 
let f3 = ()=>{
    console.log("3. f3");
}

// Call to functions:
f1();
f2();
f3();

let f4 = f1;

f4();