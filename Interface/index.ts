// Using `type` for defining a shape of an object
type People = {
    firstName: string,
    lastName: string,
    age: number
};

// Example of using `type`
let rafi: People = {
    firstName: "Safi",
    lastName: "Ahmed",
    age: 20
};

// -------------------------

// Using `interface` to define a structure for an object
interface People1 {
    firstName: string,
    lastName: string,
    age: number;
}

// Extending an existing interface by re-declaring it (allowed in TypeScript)
interface People1 {
    email: string; // New property added
    fullName(): string; // Method added
}

// Example of implementing an interface
let safi: People1 = {
    firstName: "Safi",
    lastName: "Ahmed",
    age: 20,
    email: "devsafix@gmail.com",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(safi.fullName()); // Output: Safi Ahmed

// -------------------------

// Defining a complete interface in one declaration
interface People3 {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    fullName(): string;
}

// Example of using `People3`
let mafi: People3 = {
    firstName: "Safi",
    lastName: "Ahmed",
    age: 20,
    email: "devsafix@gmail.com",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

// -------------------------

// Defining an interface for an employee
interface Employee {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    fullName(): string;
    designation: string; // New property specific to employee
    yearsOfExperience: number; // Another specific property
}

// Example of using `Employee`
let mafi2: Employee = {
    firstName: "Safi",
    lastName: "Ahmed",
    age: 20,
    email: "devsafix@gmail.com",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    designation: "Front end developer",
    yearsOfExperience: 2
};

// -------------------------

// Using `extends` to combine interfaces
interface Family {
    isWife: boolean; // Property specific to family members
}

// Extending multiple interfaces to create a new one
interface Employee2 extends People3, Family {
    designation: string;
    yearsOfExperience: number;
}

// Example of using `Employee2`
let mafi3: Employee2 = {
    firstName: "Safi",
    lastName: "Ahmed",
    age: 20,
    email: "devsafix@gmail.com",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    designation: "Front end developer",
    yearsOfExperience: 2,
    isWife: false // From `Family` interface
};
