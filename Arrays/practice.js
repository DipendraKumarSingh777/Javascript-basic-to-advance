let marks=[98,95,64,36,75];
console.log(marks);
console.log(marks.length);//property




let heroes= ["tony","thor","hulk","shaktiman"];
console.log(heroes);
 




//practice question for a given array with marks of students =[85,97,44,37,76,60] find the average marks of the entire class.
let mark=[85,87,44,50,77,90];

let sum=0;
for (let val of mark){
    sum+= val;
}

let avg=sum/mark.length;
console.log(`avg marks of the class = ${avg}`);