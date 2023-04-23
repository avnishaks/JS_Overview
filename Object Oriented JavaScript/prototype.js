
/***
 * 
 proptotype created using two ways:
 * Object 
 
 -> Whenever an object is declared , then the object prototype is created 
 which will contains all the inbuilt properties and methods of the object.


 * Constructor 

 Whenever a new object is created using the constructor then the constructor proptotype is created
 to linked all the object created using the constructor , where we can customized the prototype 
 with own methods and properties. Constructor proptotype linked with object proptotype and 
 object proptotype linked with null container , if nothing found in null container also , then 
 error is log for requested methods.

 NOTES :- 
 Prototype chaining :- Person constructor -> Person prototype -> 
 Object proptotype -> null container-> Error

 */

let myObj={}

console.log(myObj)


let person={
    name: 'John',
    age: 21,
    gender: 'M'
}


console.log(person)
console.log(person.hasOwnProperty('name'))



// constructor fun

function Person(_name, _age, _gender){
    this.name = _name,
    this.age = _age,
    this.gender = _gender
}


let Person1 = new Person('John Elizabeth', 21, 'M')

console.log(Person1)


// Prototype chaining


function PersonDetails(_name, _age, _gender){
        this.name = _name,
        this.age =_age,
        this.gender = _gender

        /*
        Here for every object we using the getFullName function , but we need to 
        follow the concept of dry rule in our code , then we need to follow some 
        concept in our code , to avoid repeating the same code. Here function is 
        getting repeated. To avoid this problem we need to declared getFullName
        Function as a proptotype of constructor function PersonDetails
        */
        
        // this.getFullName = function(){
        //     console.log(this.name +'' + this.age +'' + this.gender);
        // }
}

// Here is the way to linked proptotype with constructor function
PersonDetails.prototype.getFullName = function(){
    console.log(" Name of the Person : "+this.name +" | Age of the Person : "+ this.age +" | Gender of the Person : "+ this.gender);
}


let persondetail1=new PersonDetails('Rekha', 21, 'M');
let persondetail2=new PersonDetails('Surekha', 28, 'F');


console.log(persondetail1);
console.log(persondetail1.getFullName());
console.log(persondetail2);
console.log(persondetail2.getFullName());


