// for-of-loop

let str="dipendrasingh";
let size=0;
for (let i of str){// iterator
  console.log("i=",i);
  size++;
}
console.log("string size=",size);//13





//for in loop

// let student={
//   name: "samir singh",
//   age:21,
//   cgpa:8.9,
//   ispass: true,
// };

// for (let key in student){
//   console.log("key=", key,"value=",student[key]);
// }







//print all number from 0 to 100
// for (let num=0; num<=100; num++){
//   console.log("num=",num);
// }






//print all even number
// for(let num=0; num<=100; num++){
//   if(num%2===0){
//       console.log("num=",num);
//   }
// }






//strings


// let SpecialString=`hi my name is dipendra`;
// console.log(SpecialString);
// console.log(typeof SpecialString);



//to uppercase()

// let str=("samir singh");
// let newStr=str.toUpperCase();
// console.log(str);
// console.log(newStr);



//to lowercase

// let str=("SAMIR SINGH");
// str = str.toLowerCase();
// console.log(str);



// trim case

// let str="     Dipendra singh";
// console.log(str.trim());//



//slice case
// let str= "students";
// console.log(str.slice(1,5));//tude



//concat case
// let str1="samir";
// let str2=" singh";
// let result=str1.concat(str2);
// console.log(result);



//another concat case
// let str1="samir";
// let str2=" singh";
// let result="my name is "+str1+str2;
// console.log(result);




//prompt the user to enter their full name. generate a username for them based on their input . start username with @ followed by their full name and ending with the full nam e length.
// let fullName=prompt("enter your fullname without spaces");

// let username="@"+fullName+fullName.length;
// console.log(username);
