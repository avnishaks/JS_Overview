// Destructing the object


let myObj ={
    name: "John",
    age: 13,
    gender: 'male'
}

// let {a, b,c} = myObj;
// console.log(a+" "+b+" "+c);

// In object Destructing we need to pass the same object name as the variable

let {name:n, age:a, gender:g} = myObj;

// console.log(name+" "+age+" "+gender);

console.log(n+" "+a+" "+g);