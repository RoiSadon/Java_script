
// Arrow functions:

// function that doesn't get parameter and doesn't return value:

let a = () =>{
    console.log("a");
}
a();

// Function that gets parameter and doesn't return value:
// One parameter- can move the ()
let b = p =>{
    console.log(p);
}
b("hello");

let c = (a,b)=>{
    console.log(`a:${a}, b:${b}`);
}
c("first","last");

// Function that doesn't get parameter and returns value:
let d = () =>{
    return "hi";
}
console.log(d());

// Function that gets parameter and returns value:
let e1 = (x)=>{
    return x*x;
}
console.log(e1(5));

// Or: remove () and return
let e2 = x => x*x;
console.log(e2(4));



