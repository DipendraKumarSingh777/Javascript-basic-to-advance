1//
// function largestNumber(arr) {
//     return Math.max(...arr);
// }

// console.log(largestNumber([1, 2, 3, 4, 5, 6, 7, 8])); // 8



2//
// function reversestring(str){
//     return str.split('').reverse().join('');
// }
// console.log(reversestring('pranay'));


3//
function isPalindrome(str){
    const reversed =str.split('').reverse().join('');
    return str ===reversed;
}
console.log (isPalindrome('dsd'));