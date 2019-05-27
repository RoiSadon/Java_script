
let a = true;

console.log("Before promise:");

let p = new Promise((x,y)=>{a ? x("OK"): y("NOT OK")});

p
.then((x)=>{console.log("Resolve got:",x)})
.catch((x)=>{console.log("Reject got:",x)});

console.log("After promise:");

/*
result:
___________________

Before promise:
After promise:
Resolve got: OK

*/