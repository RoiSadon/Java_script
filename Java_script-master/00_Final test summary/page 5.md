# Async js
async - we continue while something is waiting
sync - we wait until the something will end
## java script -ONE THREADED LANGUAGE
js in the browser has the following cases that are running in async mode:

setTimeout / setInterval
Event listeners
Ajax
ways to write async code:

callbacks
promise
async - await
___
## setTimeOut zero
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script>
        console.log("line 1");
        setTimeout(
            () => { console.log("line 2"); }
            ,0)
        console.log("line 3");
    </script>
</head>
<body>
</body>
</html>

<!--RESULT:
line 1
line 3
line 2
-->
```
___
# promise
The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
```js
promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({message:"The man kept his promise",
    code:"KeptHisWord"});
    },10*1000);
});
console.log(promise1);
```
```js

let globalVar = true;
console.log("Before promise");

let p = new Promise((x,y)=>{globalVar?x("OK"):y("NOT OK")});

p 
.then((x)=>{console.log("resolve got: ",x)})
.catch((err)=>{console.log("reject got: ",err)});

console.log("After promise");
/*
OUTPUT:
_________________________
BEFORE PROMISE
AFTER PROMISE
resolve got:  OK
*/
```
### chained promise
```js
let globalVar=true;
let p=new Promise((x, y)=>{ globalVar ? x("OK"): y("NOT OK");});
p
.then((x)=>{console.log("resolve 1 got: ",x)})
.then((y)=>{
    console.log("resolve 2 got: ",y);
    return 5; 
})
.then((z)=>{
    console.log("resolve 3 got: ",z);
})
.catch((err)=>{console.log("reject got: ",err)});
/*
OUTPUT:
________________________
resolve 1 got:  OK
resolve 2 got:  undefined
resolve 3 got:  5
*/
```
### return promise from function
```js
let globalVar = true;
function func() {
    return new Promise((x, y) => { globalVar ? x("OK") : y("NOT OK"); });;
}
func().then((x) => { console.log("resolve 1 got: ", x) })
    .then((y) => {
        console.log("resolve 2 got: ", y);
        return 5;
    })
    .then((z) => {
        console.log("resolve 3 got: ", z);
    })
    .catch((err) => { console.log("reject got: ", err) });


/*
OUTPUT:
________________________
resolve 1 got:  OK
resolve 2 got:  undefined
resolve 3 got:  5
*/
```

___
# fetch
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <script>
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((body) => { console.log("I got the body", body) })
            .catch((err) => { console.log("I got an error", err) });
    </script>
</head>
<body>
</body>
</html>
```
___
## diffrence between promise & callback
Everything you can do with promises you can do with callbacks.
promises are better. shorter. 
#### promise
```js
new Promise((resolve, reject) => {
    setTimeout(
        () => {
            console.log(`Timer number 1, waited 2 sec (${(new Date()).toLocaleTimeString()})`);
            resolve();
        }, 2 * 1000)
})
    .then(() => new Promise((resolve, reject) => {
        setTimeout(
            () => {
                console.log(`Timer number 2, waited 4 sec (${(new Date()).toLocaleTimeString()})`);
                resolve();
            }, 4 * 1000)
    }))
    .then(() => new Promise((resolve, reject) => {
        setTimeout(
            () => {
                console.log(`Timer number 3, waited 1 sec (${(new Date()).toLocaleTimeString()})`);
                resolve();
            }, 1 * 1000)
    }));
```
#### callback
```js
setTimeout(
    () => {
        console.log(`Timer number 1, waited 2 sec (${(new Date()).toLocaleTimeString()})`);
        setTimeout(
            () => {
                console.log(`Timer number 2, waited 4 sec (${(new Date()).toLocaleTimeString()})`);
                setTimeout(
                    () => {
                        console.log(`Timer number 3, waited 1 sec (${(new Date()).toLocaleTimeString()})`);
                    }, 1 * 1000)
            }, 4 * 1000)
    }, 2 * 1000)

```
___
# async await
Every function with async decleration:
1) can use `await` keyword
2) the returned value is sent as resolve of a promise
```js

function func1(num){
    return new Promise((x,y)=>{x(num**num)});
}

func1(3).then(x=>console.log("Normal call",x));

async function func2(){
    let res = await func1(3);
    console.log("Await call",res);
}

func2();
// Normal call 27
// Await call 27
```
___
# Three Async JavaScript Approaches
## 1. Callback Functions
Callbacks are conceptually simple — you pass a function as a parameter that should be called later
##### Advantages
* Simple — Callbacks are conceptually simple. You pass a function that you want to run later.
* Universal — Callbacks run everywhere. No transpilation or polyfills required.
##### Disadvantages
* Clunky composition — They don’t compose as elegantly as alternatives below. Nested callbacks can lead to deeply nested code — commonly called callback hell, though this concern can be mitigated by extracting code to separate functions.
* Clunky error handling — As you can see above, you have to pass the error around rather than using traditional try/catch.
* Unintuitive flow — Callbacks require you to jump around to comprehend the code’s flow. Alternative patterns below provide a more linear reading experience.

## 2. promise
A promise is an object that represents the eventual completion of an async operation, and its resulting value. Today, promises are the most popular asynchronous approach. Promises are also the foundation for async/await
##### Advantages
1. Easily chainable — Promises can be easily chained together to handle complex asynchronous flows without resorting to the deep nesting required with callbacks.
2. Powerful — Promises provide exceptional power for composing complex asynchronous operations. You can utilize whichever promise resolves first via promise.race, and run multiple async operations simultaneously with promise.all.
##### Disadvantages
1. Swallowed exceptions — You must declare .catch for error handling instead of traditional try/catch. Without a .catch, some browsers silently swallow unhandled exceptions in promises.
2. Error prone API — You must be sure to return the promise — note the return on line 6 above. Without it, you’ll get a confusing error: Cannot read property ‘then’ of undefined. Promises are powerful, but they’re easy to get wrong.
3. Polyfill required — Promises aren’t supported in Internet Explorer, so be sure to use a promise polyfill.

## Async/Await
##### Advantages
1. Traditional try/catch — Unlike promises, Async/await allows you to use traditional try/catch for error handling.
2. Easier to read — Nesting is reduced via the await keyword. With callbacks and promises, multiple async operations can lead to code that’s harder to read. With async/await, you just add another await keyword. No extra nesting required.
3. Easy debugging — When you’ve chained multiple async operations together, async/await produces a more useful stack trace because it displays the exact await statement that failed. With chained promises, the error message is often ambiguous. It’s also straightforward to set a breakpoint on an async statement. In contrast, with some promise structures, you’ll need to refactor just to be able to set a breakpoint.
For more examples of the advantages above, read here.

##### Disadvantages
2. Less power  — You lose some compositional power with async/await. For example, With async/await, each await keyword will pause, so there’s no way to run multiple async operations simultaneously. In contrast, with promises, you can run multiple async operations simultaneously using promise.all.
3. Transpile bloat — If you need to transpile for your environment, the resulting code is bloated. For example, with Babel, 8 lines becomes 37 lines. However, some of this bloat is a one-time cost. If you use async/await multiple times, the code in _asyncToGenerator is reused.



















