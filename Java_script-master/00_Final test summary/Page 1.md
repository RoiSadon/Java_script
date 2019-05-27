# Java  script test:
___
# טיפוס משתנה דינאמי
js is dynamic language. 
therefore there is no need to declare on variable. 
type of variable will be dynamicly determined during the runtime. 
```js

var x;
x = 42;
x = "Yuli";
x = {fName:"Yuli",lName:"Cohen"};
x = true;

```
___
# types: 
1. primitive types:
  * string - each char - 16 bit. 
  * boolean
    false - undefined , null, +0, -0, NaN , "" , false
  * number - allways in js is 64 bit.
  * null (typeof(null)=object)
  * undefined
  * symbol
2. object types:
  every type that isn't in primitive types. 
  object - collection of attributes that have- key:value pairs. 
  regular js object - defined as unordered collection of key-value. 
  ordered collection - array. (has index)
  function is defined in js as object type. 
  * Built-in objects in js:
    * Date
    * RegExp
    * Error

**automatic garbage collection** -by the js interpeter. Meaning - no need to worry about deallocation.

#### mutable and immutable types
mutable - can be changed - objects
immutable - can't be changed. (example: we can access every string index, but can't change it).
####	Ref type VS value type
value type - primitive types
Ref type - object types
* Why it is important?
1. The objects have their addresses. 
```js
var x = {n:5},y={n:5};
console.log(x==y);  // false

var a = [],b=[];
console.log(a==b); // false
```
2. in placement
Value type - copy the value inside the variable
Reference type - copy the address the pointer is pointing on
```js
var a = [];
var b = a;    // gets the address of a[0]
b[0]=1;
console.log(a[0]);  // 1

console.log(a===b); // true
```
___

# == VS ===
### == Abstract comparison
check if 2 values are equal by their content.
### === Strict comparison
check if 2 values are equal by their content and their type.

___
# typeof
```js
// typeof string
console.log(typeof "hello");

// typeof number
console.log(typeof 3);
console.log(typeof Infinity);
console.log(typeof NaN);

// typeof boolean
console.log(typeof true);
console.log(typeof flase);

// typeof object
console.log(typeof [1,2,3]);
console.log(typeof {name:"me"});
console.log(typeof /^[0-9]$/);
console.log(typeof (new Date()));
console.log(typeof null);

// typeof undefined
console.log(typeof undefined);

// typedef function
console.log(typeof function(){});
```
* note: 
typeof - can work on 'undefined'
=== will throw ReferenceError on 'undefined'

___
# Wrapper objects
each time we want to get property of a string - js converts the string to object. (new String())
this object inherits from string, and is being reference property.
deletes automaticly when ends.
the same thing happen with numbers and booleans. 
there is no wrapper object for null and undefined (typeError)
```js

var s = "test";
var n = 1;
var b = true;

var S = new String(s);
var N = new Number(n);
var B = new Boolean(b);

console.log(typeof (s));  // string
console.log(typeof (n));  // number
console.log(typeof (b));  // boolean
console.log(typeof (S));  // object
console.log(typeof (N));  // object
console.log(typeof (B));  // object

console.log(b==B);        //true
console.log(b === B);     // false
console.log(typeof (b)==typeof (B));     // false
```
___
# Global object
gloabl is globally defined symbol. 
JS interpeter gives in every new program this globals:
* global attributes: Infinity, undefined, NaN
* global functions: ParseInt , isNaN , eval etc..
* global built-functions: Array(), object(), String(), regExp(), Date()
* gloabl objects: Math , JSON etc..