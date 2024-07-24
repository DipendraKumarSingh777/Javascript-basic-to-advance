let number = 55;
let usernumber = prompt(" Enter Your guessing Number from 0 to 100 :");

for( let i=0; i <=100; i++){
  if(usernumber < number){
    console.log(" The number you guessed is too small . Choose a larger number");
  }
  else if( usernumber > number  ){
    console.log(" The number you guessed is too large . Choose a smaller number");
  }else if( usernumber = number){
    console.log(" The number you guessed is  correct.")
    console.log(" Thank you for playing the game .")

    }
}