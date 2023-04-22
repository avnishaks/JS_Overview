/**
 AGENDA OF DISSCUSSION:
 * Find-> find return the first element of an array that satisfies a given condition.
 * FindIndex -> find the index of the first element of an array that satisfies a given condition.
 * Some -> To get true or false based on a condition. It will return true if even 1 element 
 * satisfies the condition.
 * Every -> Every element of an array satisfies a given condition.
 */

 // find
 let arr=[1,2,3,4,5,6,-7,8,-9,-10]

 let firstWithDrawn=arr.find(x=>x<0)

 console.log(firstWithDrawn)


 // findIndex


 let firstWithDrawnIndex=arr.findIndex(x=>x<0)

 console.log(firstWithDrawnIndex)


 // some 

 const trans=[-1,-2,-3,-4,-5,100,-6,-7,-8,-9,-10]

 let value=trans.some(x=>x>0)// At least one element is greater than 0

 console.log(value)

 // every 

 const transPositive=[1,2,3,4,-5,6,7,8,9,10]

 let ans=transPositive.every(x=>x>0)

 console.log(ans)


