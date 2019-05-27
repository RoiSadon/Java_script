# Callback in js
## 1. setTimeout:
takes 2 arguments:
1. function to execute
2. time to wait in miliseconds
Example:
```js
setTimeout(()=>{console.log("Hi")},1000);
```
## 2. event Listener:
```html
<!DOCTYPE html>
<html lang="en">
<head> 
</head>
<body>
    <button id="btn">Click me</button>
    <script>
        document.getElementById("btn").addEventListener(
            "click",()=>{console.log("Hello")});
        console.log(`After addEventListener`); // will run first
</script>
</body>
</html>
```
## 3. Ajax request:
```html
<!DOCTYPE html>
<html lang="en">
<head> 
</head>
<body>
<script>
    let req = new XMLHttpRequest();
    req.open("GET","https://jsonplaceholder.typicode.com/todos/1");

    req.onreadystatechange=()=>{
        if(req.readyState==4){
            console.log(req.status,req.response);
        }
    }
    req.send();
    console.log("After sending ajax request!");
</script>
</body>
</html>
```
___
## JSON - parse and stringify
```js
let str = `{"name":"Bob","age":"20"}`;  // type - string
let obj = JSON.parse(str);              // type - object

let new_str = JSON.stringify(obj);      // type - string
```
___
