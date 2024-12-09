// Example 1: Using Union Types for Variables
// `age` can be a number, string, or boolean
let age: number | string | boolean = 20; // Initially a number
age = "20"; // Reassigned to a string
age = true; // Reassigned to a boolean

// Example 2: Using Union Types with Arrays
// `ageArr2` can either be an array of numbers or an array of strings (but not mixed types)
let ageArr2: number[] | string[] = [20, 12]; // Array of numbers
ageArr2 = ["24", "25"]; // Reassigned to an array of strings

// `ageArr3` is another example of the same union type
let ageArr3: number[] | string[] = ["24", "25"]; // Array of strings

// Example 3: Mixed-Type Array
// `ageArr1` can contain numbers, strings, or booleans in the same array
let ageArr1: (number | string | boolean)[] = [20, 12, "24", "25", true];

// Example 4: Literal Types
// `day` can only be one of the specified string values
let day: "Friday" | "Sunday" | "Monday" = "Sunday"; // Assigned a valid value from the union of literal types

day = "Friday"; // Reassigned to another valid value
day = "Monday"; // Reassigned to another valid value

// Uncommenting the line below would cause an error because "Saturday" is not part of the allowed values
// day = "Saturday";
