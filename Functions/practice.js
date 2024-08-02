//we are given array of marks of students . filter out of the marks of students that scored 90+.
let marks =[89,92,95,97,95,43];
let toppers=marks.filter ((val) =>{
    return val>90;
});
console.log (toppers);




// for each loop in arrays
let arr =[1,2,3,4,5,6];

arr.forEach (function printVal (val){
    console.log(val);
});