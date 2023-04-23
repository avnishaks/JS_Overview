// hiding the data , inside the few class outside the enviroment

function Person(_name, _age){
    let name=_name;
    this.age=_age;

    this.getName=function(){
        return name;
    }
}

let p1=new Person("John", 20);

// from outside the enviroment , the person name value is changed


console.log(p1.getName());