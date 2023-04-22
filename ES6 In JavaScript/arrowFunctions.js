// let test1 =function(){
//     console.log('test1');
// }

let test1 =()=>{
    console.log('test1');
}

// let test2 =function(a){
//     console.log(a+2);
// }

let test2 =(a)=>{
    console.log(a+2);
}

// let test3 =function(a,b){
//     console.log(a+b);
// }

let test3 =(a,b)=>{
    console.log(a+b);
}

test1();
test2(10);
test3(10,20);



let value=(a,b,c)=>console.log(a+b+c);

value(10,20,30);