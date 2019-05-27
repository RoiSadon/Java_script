
# Events:
JS is "object - oriented" language. 
HTML events are "action" in the page, that js can recognize and translate as command to execute. 
js can react to this events

##### An HTML event can be something the browser does, or something a user does.

examples:
1. onchange - when a user changes the content of an input filed
2. onload - when a page has been loaded
3. onclick - when button is clicked
Example of x,y mouse on html page:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        #res {
            position: absolute;
            right: 0;
            left: 0;
            top: 0;
            bottom: 0;
        }
        p{
            padding: 40px;
            font-size: xx-large;
        }
    </style>
    <script>
        function func(event){
            document.getElementById("res").innerHTML=`
            <p>${event.x}</p>
            <p>${event.y}</p>
            `
        }
        </script>
</head>
<body>
    <div id="res" onmousemove="func(event)"></div>
</body>
</html>
```
param.target:
target - Get the element that triggered a specific event


___
# Arrays:
```js

let arr = ["a","b","c","d"];

console.log(arr.reverse())  // [ 'd', 'c', 'b', 'a' ]
console.log(arr.length)     // 4
console.log(arr.pop())      // pop   - removes last element
console.log(arr.push("z"))  // push  - add element to the end
console.log(arr.shift())    // shift - removes first element
console.log(arr.unshift("1"))// unshift - add first element

```
___

# OOP in js
We can create instance of a function. 
We can use it to make constructor.
```js
function cat(){
    console.log("hello cat");
}
let cat1=cat();

// constructor function:
function Dog(age){
    let myName="Bob";
    this.color="White";
    this.getInfo=()=>{
        console.log(`getInfo prints: ${age} , ${myName}, ${this.color}`)
    }
}

let dog1 = new Dog(5);
console.log(dog1.age);
dog1.getInfo();
```
___
















___
# Promises:


### prototypes methods:
1. Promise.prototype.catch(onRejected)

2. Promise.prototype.then(onFulfilled, onRejected)

3. Promise.prototype.finally(onFinally)
```js
var momsPromise = new Promise(function(resolve, reject) {
    momsSavings = 20000;
    priceOfPhone = 60000;
    if (momsSavings > priceOfPhone) {
      resolve({
        brand: "iphone",
        model: "6s"
      });
    } else {
      reject("We donot have enough savings. Let us save some more money.");
    }
  });
  momsPromise.then(function(value) {
    console.log("Hurray I got this phone as a gift ", JSON.stringify(value));
  });
  momsPromise.catch(function(reason) {
    console.log("Mom coudn't buy me the phone because ", reason);
  });
  momsPromise.finally(function() {
    console.log(
      "Irrespecitve of whether my mom can buy me a phone or not, I still love her"
    );
  });
  ```

# Async js:
Async and Await are extensions of promises.
1. The function operates asynchronously via event loop.
2. It uses an implicit Promise to return the result.
3. The syntax and structure of the code is similar to writing synchronous functions.

## fetch
fetch() allows you to make network requests similar to XMLHttpRequest (XHR). The main difference is that the Fetch API uses Promises, which enables a simpler and cleaner API, avoiding callback hell and having to remember the complex API of XMLHttpRequest.


