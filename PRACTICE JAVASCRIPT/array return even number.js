//Write a JavaScript function that takes an array of numbers and returns a new array containing only the even numbers from the original array. 
function filterEvenNumbers(arr) {
    // Create an empty array to hold the even numbers
    let evenNumbers = [];
    
    // Loop through each element in the input array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is even
        if (arr[i] % 2 === 0) {
            // Add the even number to the new array
            evenNumbers.push(arr[i]);
        }
    }
    
    // Return the new array with even numbers
    return evenNumbers;
}

// Example usage
const numbers = [1, 2, 3, 4, 5, 6];
const result = filterEvenNumbers(numbers);
console.log(result); // Output: [2, 4, 6]
