// Define a type for a person's name
type NameType = {
    firstName: string, // The person's first name
    lastName: string   // The person's last name
};

// Define a type for a person's age
type AgeType = {
    myAge: number // The person's age
};

// Using the defined types in an object
// Create an object to store a person's basic details (name)
let myDetails: {
    firstName: string, // First name
    lastName: string   // Last name
} = {
    firstName: "Ahmed", // Assign the first name
    lastName: "Safi"    // Assign the last name
};

// Create an object that combines multiple properties using custom types
let myBio: {
    myName: string,  // A string to store the person's name
    myAge: AgeType,  // An object type that adheres to `AgeType`
    myFriends: NameType // An object type that adheres to `NameType`
} = {
    myName: "Kawser", // Assign the name
    myAge: { myAge: 20 }, // Assign an object that matches the structure of AgeType
    myFriends: {
        firstName: "Ahmed", // Friend's first name
        lastName: "Safi"    // Friend's last name
    }
};

// Example of combining types using intersection (&)
// Define a type for name details
type DetailsNameType = {
    firstName: string, // First name
    lastName: string   // Last name
};

// Define a type for age details
type DetailsAgeType = {
    age: number // The person's age
};

// Combine `DetailsNameType` and `DetailsAgeType` into a single type using `&` (intersection)
type DetailsType = DetailsNameType & DetailsAgeType;

// Function to display details of an object
// The parameter `obj` must match the `DetailsType` structure
function sayDetails(obj: DetailsType): string {
    let { firstName, lastName, age } = obj; // Destructure properties from the object
    return `Full Name: ${firstName} ${lastName}, age ${age}`; // Return a formatted string
}

// Example of an object that adheres to `DetailsType`
let instructorDetails: DetailsType = {
    firstName: "Safi",  // Assign the first name
    lastName: "Ahmed",  // Assign the last name
    age: 20             // Assign the age
};

// Call the function and log the result to the console
console.log(sayDetails(instructorDetails)); // Output: Full Name: Safi Ahmed, age 20
