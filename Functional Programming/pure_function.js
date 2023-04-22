// In this we going to talk about the Pure Functions and Side Effects.

/*
Agenda of this Topics:- 
1. What is the Impure Function?
* Impact depnds on external factors.
2. What is the Pure Function?
* A pure function is a function which give same input and always return same output. (No side Effect)
3. Side Effect in a Pure Function?
* When we use to console the value for the Pure Function , then we using 
the external factors of printing the value. So to remove this impurity we should 
return the value rather than printing the value.
*/

//1. Impure Function (On giving same input , output coming different as it depend on extrernal factors )


var a=10;

function greet(x){
    console.log(x+a);
    a++;
}

greet(15);
greet(15);
greet(15);

// 2. Pure Function (On giving same input, output coming same as it not depend on extrernal factors)

function addPure(x,y){
    console.log(x+y);
}

addPure(15,16);
addPure(15,16);
addPure(15,16);



// 3. After removing the impurity of the Function , we can make it pure


// allImpureRemove-> it is the pure function, with all impurity removed.
function allImpureRemove(a,b){
    return a+b;
}

let result=allImpureRemove(105,106);
console.log(result);
