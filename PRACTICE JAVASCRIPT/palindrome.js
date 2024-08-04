function isPalindrome(str){
    const reversed= str.split('').reverse().join('');
    return str===reversed;
}
console.log (isPalindrome('srkrs'));//true
console.log(isPalindrome('samir'));//false