function arrayIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

// Example usage:
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const intersection = arrayIntersection(array1, array2);
console.log(intersection);  // Output: [3, 4]
