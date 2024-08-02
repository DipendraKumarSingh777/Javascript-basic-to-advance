
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
const countVow=(str)=>{
    let count=0;
    for(const char of str){
        if (char==="a"||char==="e"|| char==="i"||  char==="o"|| char==="u"){
            count++;
        }
    }
    return(count);
}