// filter : Filter returns a new array it will return all those elements that matches
// the specific condition.

// Imprative Approach 
// Check for the even number and put it in seperate array

let number =[1,,2,3,4,5,6,7,8,9,10];

let evenNumber = [];

for(let i = 0; i < number.length; i++){
    if(number[i] % 2 === 0)
        evenNumber.push(number[i]);
}

console.log(evenNumber);

// using filter function ( Declarative Approach )

let evenNum=number.filter(num=>num%2===0);

console.log(evenNum);

