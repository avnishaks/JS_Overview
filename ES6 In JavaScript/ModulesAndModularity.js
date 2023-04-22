function addition(a, b) {
    console.log("Result of addition: "+(a+b))
}

function subtract(a, b) {
    console.log("Result of subtraction: "+(a-b))
}

function multiply(a, b) {
    console.log("Result of multiplication: "+(a*b))
}

function divide(a, b) {
    console.log("Result of division: "+(a/b))
}


// to use the concept of the module, we need to import the module , with the sub-key !

module.exports = {
    add:addition,
    mult:multiply,
    sub:subtract,
    div:divide
}