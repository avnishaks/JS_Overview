// var keyword can leads to security issues for the code 

/*
What are the major security issues of var keyword?
1. Re-declare a variable latest one matter which create the security issue
2. Scoping issues variable is access outside the block also , so its not a 
blocked scoped , but they are function scoped.
*/

// 1. Re-declare a variable latest one matter which create the security issue
var a = 10;
var a=35;
console.log(a);

//2. Scoping issues for var , where we declare a variable inside the block , but it access outside 
// also.
 
if(a===35){
    var b=40;
    console.log("Value of b will be  ", b);
}


// Its not allowed to access the value of b outside the conditional block
console.log("Outside the Conditional Blocke",b);




