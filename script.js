// let marks=[98,95,64,36,75];
// console.log(marks);
// console.log(marks.length);//property




// let heroes= ["tony","thor","hulk","shaktiman"];
// console.log(heroes);
 



//looping over an array

// let villian=["puri","deol","jeewan"];
// console.log(villian);




// let hero=["samir","jeewan","roshan","pranay","devashish"];
// // using for loop
// // for (let i=0; i<hero.length;i++){
// //     console.log(hero[i]);
// // }



// //using for of loop
// for(let character of hero){
//     console.log(character);
// }


// let cities=["delhi","bangalore","mumbai","pune","hyderabad"];
// for (let city of cities){
//     console.log(city);
//}


// let places=["delhi","bangalore","mumbai","pune","hyderabad"];
// for (let city of places){
//     console.log(city.toUpperCase());
// }




//practice question for a given array with marks of students =[85,97,44,37,76,60] find the average marks of the entire class.
// let marks=[85,87,44,50,77,90];

// let sum=0;
// for (let val of marks){
//     sum+= val;
// }

// let avg=sum/marks.length;
// console.log(`avg marks of the class = ${avg}`);







// function MyFunction(){
//     console.log("my name is dipendra kumar singh");
// };

// MyFunction();




// function myfunction(msg){
//     console.log(msg);
// }
// myfunction("dipendra kumar singh");




//sum function
// function sum(a,b){
//     s=a+b;
//     return s;
// }
// let val= sum(5,9);
// console.log(val);



//using arrow function
// const arrowSum=(a,b)=>{
//    console.log(a+b);
// };


//multiplication function
// function mul(a,b){
//     return a*b;
// }

// const arrowMul=(a,b)=>{
//     console.log(a*b);
// }


//return the value whenever we call the function suddenly a*b value will return
// const arrowMul=(c,d)=>{
//     return c*d;
// };



//practice question  create a function using the "function" keyword that takes a string as an argument and returns the number of vowel in the string.
function countVowels(str){
    let count=0;
    for(const char of str){
        if (char==="a"||char==="e"|| char==="i"||  char==="o"|| char==="u"){
            count++;
        }
    }
    return(count);
}


//create an arrow function to perform same task
// const countVow=(str)=>{
//     let count=0;
//     for(const char of str){
//         if (char==="a"||char==="e"|| char==="i"||  char==="o"|| char==="u"){
//             count++;
//         }
//     }
//     return(count);
// }












