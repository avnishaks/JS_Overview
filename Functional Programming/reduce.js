// Reduce

// Imparative way of writing code

// sum of the every element of the array

let num =[10,20,30,40,50,60,70,80]

let sum = 0;
for (let i = 0; i < num.length;i++) {
    sum+=num[i];
}

console.log(sum);


// Declarative way of writing code

let ans=0;

let dnum=[1,2,3,4]


ans=dnum.reduce((x,ans)=>ans+x); // using reduce method of the Higher Order Function

console.log(ans);