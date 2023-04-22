/*

AGENDA OF TOPICS:
 * What is the Callback function?
-> A callback functions is a function that is passed into another function as an argument.
 * Writting the callback function
-> Done
 * Application of callback function


*/

function CallbackFirstName(firstName,lastName){
    console.log(firstName);
    lastName("Sweety")
}
// CallbackLastName is passed as an argument to CallbackFirstName
CallbackFirstName("John",CallbackLastName);

function CallbackLastName(lastName){
    console.log(lastName);
}

// Number is even or odd 

const isEven=(n)=>{
    return (n%2===0);
}

// Callback function , as isEven is passed as an argument to check for the given number even or odd

let printResult = (isEven,num)=>{
    const isNumberEven = isEven(num);
    console.log(`The number ${num} is an Even Number : ${isNumberEven}`);
}

printResult(isEven,29);



