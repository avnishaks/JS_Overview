/**
 * Creating your own promises 
 */

const cart=["shoes","kurta","pants"]


// here we are passing the data from one chain to another , i.e called Promise Chaining
createOrder(cart)
    .then(orderID=>console.log(orderID))
    .then(orderID=>proceedToPayment(orderID))
    .then(paymentinfo=>console.log(paymentinfo))
    .catch(err=>console.log(err.message))
    .then(orderID=>console.log("No matter what happens it get called definietely !"))


// Producer end 

function createOrder(cart) {
   
    // creating your own promises

    const pr=new Promise(function(resolve, reject) {
        // createOrder , validateCart and OrderID
        if(!validateCart(cart)) {
            const err=new Error("Cart is not valid");
            reject(err);
        }

        // logic for createOrder
        const orderID="12345"
        if(orderID){
            setTimeout(
                function() {
                   resolve(orderID);
                },
                5000
            );
        }
    });
    return pr;
}

function proceedToPayment(orderID){
    return new Promise(function(resolve, reject){
        resolve("Payment Successful");
    })
}

function validateCart(cart){
    return true;
}



/***
 * RECAP OF VIDEO
 * Creating the Promises
 * Reject and Resolve the Promise
 * 
 */
