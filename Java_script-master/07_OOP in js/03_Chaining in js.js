


function Dog(age){
    this.getInfo = ()=>{
        console.log(`Hello dog 1`);
        return this;
    }

    this.getInfo2 = ()=>{
        console.log(`Hello dog 2`);
    }
}

// Chain in 1 way:
let d1 = new Dog(3);
d1.getInfo().getInfo2();

// Chain in 2 way:
let d2 = new Dog(1);
let tempD = d2.getInfo();
tempD.getInfo2();


// Another example:
// We will use 2 functions on str at the same time. 
let str = "this is example!";
console.log(str.toLocaleUpperCase().indexOf('E'))