/**
 * console.log(this) : this refer to the Windows Object
 * Function : this refer to the Window Object
 * Object -> Function(Method) : this refer to the Object itself
 * Object -> Function (Method)-> Function(Method) : this refer to the Window Object itself
 * 
 */

// 1. console.log(this) 

console.log(this)

// 2. Function

function Fun() {
    console.log(this)
}
Fun();


// 3. Object -> Function

let browserObj={
    name:'Chrome',
    version:'1.2.0',

    browserFun: function(){
        console.log(this)
    }
}

browserObj.browserFun()


// 4. Object -> Function(Method) -> Function(Method)

let browserObjeDemo={
    name:'ChromeBrowser',
    version:'1.2.0',
    satisfies:'true',

    ObjectFun: function(){
        function demo(){
            console.log(this)
        }
        demo()
    }

}

browserObjeDemo.ObjectFun()