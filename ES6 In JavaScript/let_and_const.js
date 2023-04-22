// Here we see how let and const help us to overcome the var keyword issues
/*
1. let keyword solve the problem of redeclaration problems of variables.
2. let keyword is blocked scope and function scoped
3. let keyword value is re-asssign to avoid re-assigning we use const keyword
*/



/*********************************** REDECLARE VARIABLES ********************************/

var a=10

let b=40

// If we update the value of a and b , by redeclaring them again.
console.log(a)
console.log(b)


var a=20

console.log("After the redeclaration Value of a gets updated to for using var keyword" ,a)

// let b=50
// console.log("After the redeclaration Value of b throw error by using let keyword",b);



/*********************************** SCOPING PROBLEM **********************************/


if(true){
    let sign=90;
    console.log(sign);
}

//console.log(sign); -> let keyword is blocked scope and function scoped
    
// function

function fun(){
    let good="Avnish";
    console.log(good);
}

fun();
// console.log(good); -> let keyword is blocked scope and function scoped




/*********************************** CONST keyword **********************************/

// no re-assigning , redeclaration for the variable


const abc=10;
console.log("Const Keyword Variable",abc);

//const abc=40; // on redeclaration, it throw error
// abc=899 // re-assigning of the value is not allowed with const keyword
// console.log("Const Keyword Variable After Re-assigning",abc);
