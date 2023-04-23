// Call , Apply and Bind in OOPS in JavaScript

/**
 * Call : Call help us to use the function method of the another object 
 * Apply : Apply do the same task , as argument is passed in form of an array
 * Bind : Bind help us to use store the object in a object variable and help us to print when
 *  the object is called !
 */

let p1={
    firstName:'John',
    lastname:'Doe',
    age:20,
    printDetails:function(){
        console.log("Hi here "+this.firstName+ "  "+this.lastname+"  my age is : "+this.age);
    }
}



let p2={
    firstName:'Tonny',
    lastname:'Stark',
    age:28
}

let subPart=function(city, country){
    console.log("I belong to "+city+"  and my nationality is : "+country);
}





// p1.printDetails();
// p2.printDetails();


// Call

p1.printDetails.call(p2);

subPart.call(p2, 'London', 'UK');

// Apply

subPart.apply(p2, ['New York', 'USA']);

// Bind 

let val=subPart.bind(p2, 'New York', 'USA');
console.log(val);

console.log(val()); 

val();





