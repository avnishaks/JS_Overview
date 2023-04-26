console.log("Starting with Promises in JavaScript")

const cart = ["pants", "kurta", "shirt"]

/*
 * CreateOrder API // order ID
 * ProceedToPayment API // takes to Payment Page
*/

// using callback , we will do , but issues is the inversion of the control

createOrder(cart, function(orderID) {
    proccedOrder(orderID)
})

// To resolve the problem of inversion of the control we use Promises

// const promise= createOrder(cart); 

promise.then(function(orderID){
    proceedToPayment(orderID);
})




/*

Steps in the Promises:- 

1. When the api is called for createOrder , then JavaScript Engine will return the Empty Object
with undefined values . { data :undefined}
2. The rest of the code will execute and everything works fine , when after 5-10 second OrderID , 
is generated then previous Empty Object is filled with the value {data : #somevalue}. 
#somevalue=OrderID
3. When the Data is returned and attached with the Empty object then the Attached promise function
is automatically called , it is called just once.

Benfits of Promises:- 

1. previously we are passing the callback function , but here in the promises we are attaching
the function to the return promise object.
*/


const GITHUB_URL = "https://api.github.com/users/avnishaks"

const user = fetch(GITHUB_URL)

/*

In chrome , when we log the user info , it show in the pending state , when we expand 
the promise object , then we used to see the state as fulfilled !

Three states in Promise:- 
1. fulfilled
2. rejected
3. pending

*/ 

console.log(user)

user.then(function(data) {
    console.log(data)
})




/*
Interview Point of View Short ans Crisp :-
 * Promises object is a placeholder for certain period of time , until we recive the value 
from asynchronous operations.
 * A container for the future value
 * MDN :  Promise is a object representing the eventual completion or failure of an asynchronous 
 operations operation.
 */

// Above all steps solve the problem of inversion control

/*********************************** RESOLVE THE PROBLEM OF CALLBACK HELL  **********************************/


// Pyramid of Doom Problem is resolved by Promise Chaining

OrderCreat(cart,function(id){
    PaymentPage(id,function(infoPayment){
        summaryPage(infoPayment,function(){
            walletUpdate();
        })
    })
})

/*
Above written code is growing horizontally rather than vertically , which leads to callback hell,
function inside the function is passed through the reference. To solve this problem , we have 
the concept in Promises which we called is Promises Chaining!
*/ 


// Promises Chaining : we call the function on after the another , and return the value which
// will be passed to next function!

OrderCreat(cart).then(function(id){
    return PaymenPage(id);
})
.then(function(infoPayment){
    return summaryPage(infoPayment);
})
.then(function(infoPayment){
    return walletUpdate(infoPayment);
})

// with the help of arrow function , we get rid of return statement , in Promise Chaining

OrderCreate(cart)
    .then(id=>PaymentPage(id))
    .then(infoPayment=>summaryPage(infoPayment))
    .then(infoPayment=>walletUpdate(infoPayment))




/**
 Recap of Promises :- 
 * Inversion of Control solve by attaching the api call with promises Object
 * CallBack Hell is solved by Promises Chaining
 * Defination of Promises :- Eventual completion of an asynchronous operation
 */