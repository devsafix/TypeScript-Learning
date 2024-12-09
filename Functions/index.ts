// A simple function that greets a person with their name and age.
// Parameters:
// - personName: string - the name of the person.
// - age: number | string - the age of the person (can be either a number or a string).
function sayHi(personName: string, age: number | string): void {
    console.log("Hi!", personName, age);
}

// Example usage:
sayHi("Safi", "20"); // Output: Hi! Safi 20


// A function that takes two numbers as input and returns their sum.
// Parameters:
// - number1: number - the first number.
// - number2: number - the second number.
// Returns: number - the sum of the two numbers.
function addition1(number1: number, number2: number): number {
    return number1 + number2;
}

// Example usage:
addition1(10, 20); // Output: 30


// A function that takes two numbers as input and returns a formatted string with their sum.
// Parameters:
// - number1: number - the first number.
// - number2: number - the second number.
// Returns: string - a message showing the sum of the numbers.
function addition2(number1: number, number2: number): string {
    return `Your number is ${number1 + number2}.`;
}

// Example usage:
addition2(10, 20); // Output: "Your number is 30."


// A function that multiplies two numbers. If the second number is not provided, it defaults to 20.
// Parameters:
// - number1: number - the first number.
// - number2: number (optional, defaults to 20) - the second number.
// Returns: number - the product of the two numbers.
function multiply(number1: number, number2: number = 20): number {
    return number1 * number2;
}

// Example usage:
multiply(10);      // Output: 200 (10 * 20)
multiply(10, 5);   // Output: 50 (10 * 5)
