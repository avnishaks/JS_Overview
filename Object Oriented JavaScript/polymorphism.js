// same method function used in different class and behave differently , hence the 
// method is working differently

class Animal{

    sound(){
        console.log('Animal make sound');
    }

}

class Dog{
    sound(){
        console.log('Dog Barks');
    }
}

class Cat{
    sound(){
        console.log('Cat meow');
    }
}

let Animal1=new Animal();

let tommy=new Dog();

let percy=new Cat();

Animal1.sound();
tommy.sound();
percy.sound();