/**
 * Creating your own promises 
 */

const cart=["shoes","kurta","pants"]

const promise=createOrder(cart); // orderID
console.log(promise);

promise
    .then(orderID=>console.log(orderID))
    .catch(err=>console.log(err.message))


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

function validateCart(cart){
    return false;
}

