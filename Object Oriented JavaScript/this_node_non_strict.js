/**
 * Node js ( Non Strict Mode)
 1. console.log(this)-> Log the this Keywords we use to get the empty objects
 2. Function inside a Function , this Keywords refers to Global objects
 3. Calling this keyword , inside a object using Function ( Function inside a object) then 
 it refers to the object itself
 4. Object -> Function -> Function ( this keywords refers to Global objects)
 * 
 */

// 1. Empty object is log we console it.
 console.log(this) 


 // 1. Calling the this inside a Function , then this keywords refers to Global objects
 function display(){
    console.log(this);
 }

 display();


 // 3. Defining the Function, inside a object 
 let myObj={
    name: 'Avnish',
    age: 36,

    myfun:function(){
        console.log(this);
    }
 }

 myObj.myfun();

 // 4. Obj-> Fun-> Fun ( this Keywords refers to Global objects)

 let demoObj ={
    name:'Avi',
    age:34,
    gender: 'Male',
    myDemoFun:function(){
        function testdemo(){
            console.log(this)
        }
        testdemo();
    }
 }


 demoObj.myDemoFun();



