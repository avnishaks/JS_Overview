/*

1. Imperative:-
* How to go about a problem
* Approach , Structure and Logic


2. Declarative:-
* What to achieve from the problem
* Give me problem , I have the way to solve it


*/

// Square of the number is even or not !
// Imperative:- Declaring the variable and following all the steps patterns

const a=5

const aSquared=a*a;
let isEven;

if(aSquared%2===0){
    isEven=true;
}
else{
    isEven=false;
}

console.log(isEven);


// Declarative way of writting the code

const checkforSquared = (x)=>(x*x%2===0?true:false)
console.log(checkforSquared(12));
