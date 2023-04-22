// Inbuilt methods of Array in JavaScript

/*
1.pop methods -> takes out the last element of the array
2.push methods -> adds an element to the end of the array
3.shift methods -> takes out the first element of the array
4. unshift methods -> adds an element to the beginning of the array
*/

var arr = [1, 2, 3, 4, 5, 6,7,8,9,10];

arr.pop();

console.log(arr);

arr.push(110);

console.log(arr[arr.length - 1]);

// shift method

arr.shift();

console.log("After the shift operation", arr);

// unshift method

arr.unshift(100);

console.log("After the unshift operation", arr);




