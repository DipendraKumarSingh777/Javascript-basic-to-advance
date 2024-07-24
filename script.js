// for-of-loop

// let str="dipendrasingh";
// let size=0;
// for (let i of str){// iterator
//   console.log("i=",i);
//   size++;
// }
// console.log("string size=",size);//13





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


//create a game where you start with any random number.ask the user to keep guessing thw number until the user enters correct value
// let gameNum=22;

// let userNum = prompt("guess the game number:");

// while(userNum!=gameNum){
//   userNum = prompt("you entered wrong number, guess again:");

// }
// console.log("congrats,you entered the right number");

















let number = 55;
let usernumber = prompt(" Enter Your guessing Number from 0 to 100 :");

for( let i=0; i <=100; i++){
  if(usernumber < number){
    console.log(" The number you guessed is too small . Choose a larger number");
  }
  else if( usernumber > number  ){
    console.log(" The number you guessed is too large . Choose a smaller number");
  }
  else if( usernumber = number){
    console.log(" The number you guessed is  correct.")
    console.log(" Thank you for playing the game .")

  }
}




