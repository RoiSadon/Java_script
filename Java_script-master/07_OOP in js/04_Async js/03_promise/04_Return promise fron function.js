
// if a=true  - x,y,z will be printed. (then)
// if a=false - e will be printed(catch)
let a = true;

function func(){
    return new Promise((x,y)=>{a? x("YES"): y("NO")});
}

func().then((x)=>{console.log("Resolve 1 got: ",x)})
.then((y)=>{console.log("Resolve 2 got: ",y); return 10})
.then((z)=>{console.log("Resolve 3 got: ",z)})
.catch((e)=>{console.log("Reject got: ",e)});