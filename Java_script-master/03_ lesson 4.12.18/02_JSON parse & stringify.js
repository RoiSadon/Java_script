
// JSON.parse:

// str contains a string that is in a jsn format:
// typeof(str) is string. 
let str1=`{"name":"Bob", "age":12}`;  
// convert string to JSON object:
let objFromString = JSON.parse(str1);
console.log(typedef(objFromString));        //object
console.log(objFromString.age);             //12


// JSON.stringify:

// obj contains a JSON object:
let obj={
    "name":"Bob",
    "age":12
}
// convert JSON obj to string:
let str2 = JSON.stringify(obj);
console.log(str2.age);          // undefined!
