
// destruct in js:

// objects:
let obj={
    "id":1,
    "name":"Bob",
    "age":21
};

let {id,name,age}={...obj};

console.log(id);  //--> 1
console.log(name);  //--> Bob


// Arrays:
let arr=["a","b","c"]
console.log(arr)

// one way:
let[x,y,z]=[...arr]
console.log(x,y,z)

// sec way:
let [a,b,c]=arr
console.log(a,b,c)

// Diffrence between for-in, for-on:


// in array:
// for-in: go on index
console.log("------------I am for-in---------")
for(let x in arr){
    console.log(x , arr[x]);
}
// for-on: go on object (value)
console.log("------------I am for-of---------")
for(let x of arr){
    console.log(x);
}

// in object: for-of will not work!
let obj1={
    "name":"Bob",
    "age":12
};
console.log("------------I am for-in---------")
for(let x in obj1){
    console.log(x , obj1[x]);
}

