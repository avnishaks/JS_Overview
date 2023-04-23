function createCar(_name, _company,_color){
    this.name = _name;
    this.color = _color;
    this.company = _company;

    this.drive = function(){
        console.log(`I'm driving ${this.name} and its of ${this.color} color`);
    }
}

let car1 = new createCar('X4', 'BMW', 'red');

car1.drive();