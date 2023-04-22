/*

the process whereby the interpreter appears to move the declaration of functions,
variables or classes to the top of their scope, prior to execution of the code


Note :- In JavaScript code execution the interpreter in two stage one is Memory and 
other is Code execution, at the run time variables is undefined in Memory and whole 
functon will assign in Memory , so if not shink then it worked.

*/


console.log(a);
greet();


var a='hi'

function greet(){
    console.log("Hello from Scalar");
}


var multiply= function(a,b){
    return a*b;
}

var mut=multiply(4,5);
console.log(mut);


