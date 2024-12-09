// Function to display a person's name and age after adjustment
function sayDetails(name: string, age: string | number): void {
    // Declare a variable to hold the adjusted age
    let currentAge;

    // Type narrowing using `typeof`
    if (typeof age === "string") {
        // If `age` is a string, convert it to a number and subtract 2
        currentAge = Number(age) - 2;
    } else {
        // If `age` is already a number, directly subtract 2
        currentAge = age - 2;
    }

    // Log the final details to the console
    console.log(`Name Is: ${name}, age is: ${currentAge}`);
}

// Call the function with a number as the age
sayDetails("Safi", 20); // Output: Name Is: Safi, age is: 18

// Call the function with a string as the age
sayDetails("Safi", "22"); // Output: Name Is: Safi, age is: 20
