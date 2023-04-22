// arrays provides the order collection of the data

var arr=[12,"12",1,3,4,"greater than 100000000000000000"];

console.log(arr);

for(var i=0;i<arr.length;i++){
    arr[i]="ABC"+i;
    console.log(arr[i]," ");
}