function averageArray(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}

console.log(averageArray([1, 2, 3, 4, 5])); // 3
