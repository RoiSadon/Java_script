
# variable declaration
#### var
var declaration will be acting as the var was defined in the head of the execusion content.
It can cause an unintuitive behaviour.

#### let 
let recognized only in his scope. 
better on var in most cases.

* note - var can be defined twice with the same name in one function. let - shadow effect - will create a new variable.
```js
function f1(){
  let a = 4;
  {
    let a;
    console.log(a);    // undefined
  }
}
f1();

function f2(){
  var b = 4;
  {
    var b;
    console.log(b);   // 4
  }
}
f2();
```
### 2 diffrences between var and let
1. var is defined globaly (or globaly per function) , while let - only in the scope
2. var initialized with - "undefined", while let - with "uninitialized"

#### const 
const - we must put a value in declaration.
we can't change the value. 
```js
const a=4;
console.log(a)
a = 31;
console.log(a)   // error! same with every change!
```
* Note: const isn't immutable. 
The variable always has the same value, but the referenced value can be changed.
```js 
const a = {};
a.name = "Me";
console.log(a);   // { name: 'Me' }
```

___

# TDZ = Temporal dead zone
const and let have TDZ
when the code arrives to the scope of that variable - we can't access it - until declaration time. 

#### The life cycle of var-declared variables
* when running comes to the var's scope - memory is assigned, and the variable immediately initialized with 'undefined'
* When coming to declaration - the variable gets its value. (if there is one- else undefined). 

#### The life cycle of let-declared variables
* when running comes to the let's scope - memory is assigned, and the variable stays with 'uninitialized'
* Acess to let in 'uninitialized' state - causes - 'ReferenceError'
* When coming to declaration - the variable gets its value. (if there is one- else undefined). 

###### const - the same as let, but must be initialized in declaration line. 
Example:
```js
var a = !a;
console.log(a);  // true

let b = !b;
console.log(b);  // reference error - b is not defined!
```
### Default TDZ with parameters:
if parameters in function has default values - they will be as let. Means - they have TDZ
```js

// Will work - x declared before y
function f(x=1,y=x){
  return y;
}

// will not work - y isn't declared yet
function b(x=y,y=1){
  return x;
}
console.log(b()); // referenceError
```
___

# Loops 

We can declare variables in the loop's header:
* for
* for-in
* for-of

### For: 
Reason - 
in var - each i has the same binding - return the same value
in let - each i has diffrent binding. 
```js
const arr=[]
for(var i=0;i<3;i++)
  arr.push(()=>i);
  
arr.map(x=>console.log(x()));

// Result = 3 3 3 

const arr2=[]
for(let i=0;i<3;i++)
  arr2.push(()=>i);

arr2.map(x=>console.log(x()));

// Result = 0 1 2 
```
* Note - const is like let, but we can't change the value:
```js
const arr2=[]
for(const i=0;i<3;i++)
  arr2.push(()=>i);

arr2.map(x=>console.log(x()));  // TypeError
```

### for of:
in for-of - declaring variable by 'var' - will get the same binding
const - created one immutable binding for each iteration:
let - creates the same as const, but the binding is mutable.
```js
// var: 
const arr=[];

for(var i of[0,1,2])
  arr.push(()=>i);
arr.map(x=>console.log(x()));   // 2 2 2 

// const:
const arr1=[];

for(const i of[0,1,2])
  arr1.push(()=>i);
arr1.map(x=>console.log(x()));    // 0 1 2 
```
## Diffrence between for-in & for-of

```js
var arr = ["a","b","c","d"];
for(let i in arr)
    console.log(i)    // 0 1 2 3 
console.log("\n\n")
for(let i of arr)
    console.log(i)    // a b c d
 ```


















