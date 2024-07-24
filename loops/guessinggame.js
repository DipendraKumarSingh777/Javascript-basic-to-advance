//create a game where you start with any random number.ask the user to keep guessing thw number until the user enters correct value
let gameNum=22;

let userNum = prompt("guess the game number:");

while(userNum!=gameNum){
  userNum = prompt("you entered wrong number, guess again:");

}
console.log("congrats,you entered the right number");