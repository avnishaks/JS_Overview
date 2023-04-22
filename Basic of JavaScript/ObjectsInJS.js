// JavaScript , an object is an unordered collection of key-value pairs. 
//Each key-value pair is a string and a value.

var car={
    make:'Ford',
    model:'Mustang',
    year:2016
}

console.log(car.make+"   "+car.model+"   "+car.year);


console.log(car);

console.log(Object.keys(car));

console.log(Object.values(car));

console.log(Object.entries(car));

console.log(Object.getOwnPropertyDescriptors(car));

console.log(car['make']+" "+car['model']+" "+car['year']);



console.log("--------------------------------");

var car2={
    firstName:'John',
    lastName:'Doe',
    age:20,
    gender:'Male',

    friends:["A","B","C"],

    address:{
        city:'New York',
        state:{
            country:'USA',
            pincode:12345
        }
    }
};

console.log(car2);

console.log(Object.keys(car2));


console.log("The value of all the feild iteam of the Car 2 is shown Below");

console.log(car2.firstName+" "+car2.lastName+" "+car2.age+" "+car2.address.city+" "+car2.address.country+" "+car2.address.state.country+" "+car2.address.state.pincode);