function sumEvenNumbers(numbers) {
    return numbers.reduce((sum, number) => {
        if (number % 2 === 0) {
            return sum + number;
        }
        return sum;
    }, 0);
}

// Usage example
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 12 (2 + 4 + 6)
