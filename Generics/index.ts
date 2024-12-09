// Basic functions for specific types
function age(something: string): string {
    return something;
}

function age1(something: number): number {
    return something;
}

function age2(something: boolean): boolean {
    return something;
}

// Calling the specific type functions
age("Ten"); // Works with a string
age1(10);    // Works with a number
age2(false); // Works with a boolean

// Using Generics to make the function reusable
// DynamicType is a placeholder for any type
// function age3<DynamicType>(something: DynamicType): DynamicType {
//     return something;
// }

// A more common shorthand is using <T> for the generic
function age3<T>(something: T): T {
    return something; // Returns the same type as the input
}

// Calling the generic function
age3<string>("Ten");  // Works with a string
age3<number>(10);     // Works with a number
age3<boolean>(true);  // Works with a boolean

// Example of combining two objects with generics and type constraints
function combineObj<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 }; // Combines the properties of both objects
}

// Calling the function with two objects
combineObj({ name: "Safi", age: "20" }, { name: "Rafi" }); 
// Output: { name: "Rafi", age: "20" }
