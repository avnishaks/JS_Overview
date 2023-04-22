let arr=[
    {name:"A",age:20,gender:"M"},
    {name:"B",age:30,gender:"F"},
    {name:"C",age:28,gender:"N"},
    {name:"D",age:60,gender:"M"},
    {name:"E",age:50,gender:"F"},
    {name:"F",age:90,gender:"N"},
]

let malesName=arr.filter(function(obj){
    return obj.gender==="M"
}).map(function(males){
    return males.name
})



console.log(malesName)



// upsolving 

// filter out positive elements and calculate sum

let sum=0;
let trans=[10,20,30,40,-100,50,60,70,80]

let ans=trans.reduce((x,sum)=>x+sum)

console.log(ans)

// Done 
let tsum=0;

let tans=trans.filter(x=>x>0).reduce((tsum,element)=>element+tsum)

console.log("Filter and Reduce ",tans);
