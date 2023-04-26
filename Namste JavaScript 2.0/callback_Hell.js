/**
 Agenda of the topic in callback function
 * CallBack Hell : If we want to execute the statement, just after 5 minutes then callback hell comes
 in play !
 * Inversion of Control
 */

console.log("Namaste")

// Callback function : Here we provide the time constraint for the function to do asynchronous task
setTimeout(function () {
    console.log("JavaScript")
}, 5000)

console.log("Season 2.0")

// Another Example
// E-commerce Website : 
/**
 * Step 0: Create Order
 * Step 1: Payment Transaction
 * Step 2: Order Summary
 * Step 3: Update Wallet
 */


/* 

CallBack Hell sitatution happens here , when one callback inside another callback function.
1. Code instead of growing vertically , it growing horizontally (This structure of code 
    is called Pyramid of Doom)

// Problem with that is we blindly trusting the createOrder api function ,to do the steps ,
if their is problem with createOrder function , if the Payment is happening twice or their 
will be always the grey box inside the createOrder function. that we call inversion of Control
where we loose the control of the function.


const cart=["shoes","pants","kurta"]

api.createOrder(cart, function(){
    api.proceedPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallet()
        })
    })
})



*/

const cart=["shoes","pants","kurta"]

api.createOrder(cart, function(){
    api.proceedPayment()
})


/*

 Recap of this session for CallBack Hell
 * Step 0: Importance of Callbacks 
 * Step 1: Issues with Callbacks
        a. Callbacks Hell ( Nested CallBack )
        b. Inversion of Control ( We loose the control of the Program , if we provide the control to 
            function ).

Problem with Callbacks Step 1:- 
1. Callbacks Hell :  Nested CallBack , giving the control of the Program to other functions in 
nested manner , leads to grow our code in horizontally rather than vertically, which leads to 
generate the problem of Pyramid of Doom.

2. Inversion of Control :- Giving the control to particular api to do actions for another 
api , might leads to the problem of recurring of api call , which might leads to affect the 
at company level , where cost of calling every api is sometimes is chargeable.
 */









