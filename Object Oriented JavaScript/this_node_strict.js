/**
 * Node js ( Strict Mode)
 1. console.log(this ) : Empty object is returned by calling this using the console.log
 2. Function : this keyword refers to undefined
 3. Object -> Function : this keywords refers to the object itself
 4. Object -> Function -> Function : this keywords refers to undefined
 * 
 */

 'use strict';

 // Empty object is returned by calling this using console.log
 console.log(this)

 // Inside the function

 function demoDisplay(){
    console.log(this)
 }

 demoDisplay()


 // Object -> Function ( this refers to object itself )

 let demoObject ={
    name: 'Avnish',
    gender: 'Male',
    age: 22,

    demoFun:function(){
        console.log(this)
    }
 }

 demoObject.demoFun();


 // Object -> Function -> Function : ( undefined )

 let demoObject2 ={
    name: 'Kumar Singh',
    gender: 'Male',
    age:28,

    demoObject2Fun:function(){
        function test(){
            console.log(this)
        }
        test();
    }
 }

 demoObject2.demoObject2Fun();