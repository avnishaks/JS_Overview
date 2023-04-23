class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    welcome(){
        console.log(`Welcome to the world ${this.name}`);
    }
}

let p1 = new Person('John', 20);

p1.welcome();

console.log(p1);

