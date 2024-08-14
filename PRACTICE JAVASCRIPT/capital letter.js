//Write a JavaScript function that takes a string as input and returns the string with the first letter of each word capitalized.
function capitalizeWords(str) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

// Example usage:
let inputString = "hello world, welcome to javascript!";
let capitalizedString = capitalizeWords(inputString);
console.log(capitalizedString); // Output: "Hello World, Welcome To Javascript!"
