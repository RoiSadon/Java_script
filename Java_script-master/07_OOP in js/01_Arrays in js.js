// Create array in js:
let arr = ['a','b','c','d'];

// Functions on array:
//_________________________________________________________

// Append new element to array. in the end. 
arr.push('z');
console.log(arr);

// Removes the last element of the array and returns it.
x = arr.pop();
console.log(x);
console.log(arr);

//_________________________________________________________

// Add element to the begining of the array. 
arr.unshift('R');

// Removes the first element of the array and returns it.
y=arr.shift();
console.log(y);
console.log(arr);

//_________________________________________________________

// find - function to return the first element that fit to the given option. 
// Will get only function inside. 
let myName = arr.find(function(e){
    return e > 'a';
});
console.log(myName);            // print: 'b'

// Map - function to create new array with results of calling. 

var arr1 = [1,2,3,4];
newArr1 = arr1.map(x=>x*2)
console.log(newArr1);




