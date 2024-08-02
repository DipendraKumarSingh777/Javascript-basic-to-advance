
// take a number n as input from user . create an array of numbers from 1 to n
let n= prompt("enter a value:");

let arr =[];
for (let i=1; i<=n; i++){
    arr [i-1]=i;
}
console.log(arr);




// use the reduce method to calculate sum of all numbers in the array.
let sum=arr.reduce ((res,curr)=>{
    return res+curr;
});
console.log(sum);




// use the reduce method to calculate product of all numbers in the array
let factorial=arr.reduce ((res,curr)=>{
    return res*curr;
});
console.log("factorial=",factorial);