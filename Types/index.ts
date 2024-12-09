// Demonstrating type annotations in TypeScript

// Example 1: Using a number type
// Declares a variable `numberOfItems` of type number
let numberOfItems: number = 10;

numberOfItems += 1; // Increment the value by 1
numberOfItems -= 2; // Decrement the value by 2

// Example 2: Using a string type
// Declares a variable `friendName` of type string
let friendName1: string = "Sagor";
friendName1 = "Hashibur"; // Updating the string value

// Example 3: Using the `any` type
// Declares a variable `friendName` of type `any`
// Note: `any` allows the variable to hold any type, which can lead to unexpected behavior.
let friendName2: any = "Sagor";
friendName2 = 10;   // Changing the value to a number
friendName2 = true; // Changing the value to a boolean

// Example 4: Declaring a variable without an explicit type
// By default, the type is `any` if no type annotation is provided.
let friendName3; // TypeScript infers it as `any`.
friendName3 = 10;   // Assigns a number
friendName3 = true; // Assigns a boolean

// Example 5: Using a boolean type
// Declares a variable `isPassed` of type boolean
let isPassed: boolean = true;
isPassed = false; // Updating the boolean value

// Uncommenting the line below will cause an error because `isPassed` expects a boolean value.
// isPassed = 10;

// Example 6: Using a union type
// Declares a variable `number` that can hold a number, string, or boolean
let number: number | string | boolean = 0;
number += 1;  // Valid: performs addition when the value is a number
number = "safi"; // Valid: assigns a string value
number = true;   // Valid: assigns a boolean value
