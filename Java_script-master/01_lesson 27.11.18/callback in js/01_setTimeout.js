
// setTimeout - is a built in function
// parameters: function to execute, ms time to wait

setTimeout(
    function myFunc(){
        console.log("3 seconds passed");
    },3000);

setTimeout( function (){
    console.log("5 seconds passed");
},5000);

// Using arrow fuction makes it way shorter.
setTimeout(()=>{console.log("1 seccond passed");},1000);

console.log("printed first! ");
