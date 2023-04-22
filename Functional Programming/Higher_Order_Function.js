/*
AGENDA OF TOPICS:-
 * What is Higher Order Function ?
-> HOF is a function that takes a function as an argument and returns another function as output.
 * Writing a higher order function ?
 * Map and ForEach
 */

let arr=[1,2,3,4,5,6,7,8,9,10];

let sqarr=[];

for(let i=0;i<arr.length;i++){
    sqarr.push(arr[i]*arr[i]);
}

console.log(sqarr);


// map -> Map will loop through every element and will provide specific operation to each element 
// that is provided to the map function.

// Declartive way of writting of the code
const num=[1,2,3,4,5]

const sqnum=num.map(x=>x*x);

console.log("Using the Map Function we return the output",sqnum);

// upsolving the problem

const transaction =[1000,6000,-700,-8000]

const inrtoDollar=80

const total=transaction.map(x=>(x/inrtoDollar).toFixed(0));

console.log("Using the Map Function we return the output of INR to USD : ",total);

// using forEach -> don't return the value , we need to console the result , not array is created 
// only value is returned

const UsingForEach_total=transaction.forEach(x=>console.log((x/inrtoDollar).toFixed(0)))



