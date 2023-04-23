// classical inheritance :- Methods and properties from base class can be passed to derived class

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    // Inherit the method using inheritance 
    Welcome(){
        console.log(`Welcome ${this.name}!`);
    }
}

class Teacher extends Person{
    constructor(name,age,classStrength){
        super(name,age);
        this.classStrength = classStrength;
    }

    test(){
        super.Welcome();
    }
}

class Student extends Person{
    constructor(name,age,cgpa){
        super(name,age);
        this.cgpa = cgpa;

    }

    demo(){
        super.Welcome();
    }

}


let p1=new Person("John",25);

let t1=new Teacher("John",25,56);

let s1=new Student("Avnish",25,8.8);

s1.demo();