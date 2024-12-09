// Defining a TypeScript class named `Computer`
class Computer {
    // Private field: Accessible only within this class
    private _ssd: number = 512;

    // Constructor: Initializes the `name` and `ram` properties
    // `public` automatically creates and assigns the properties to the class instance
    constructor(public name: string, public ram: number) { }

    // Private method: Only callable within this class
    private getDetails(): void {
        console.log(`Private Computer Name: ${this.name}`);
    }

    // Getter: Provides read-only access to the private `_ssd` field
    get ssdDetails(): number {
        return this._ssd;
    }

    // Setter: Allows controlled modification of the private `_ssd` field
    set ssdDetails(value: number) {
        if (value > 0) {
            this._ssd = value;
        } else {
            console.error("SSD size must be a positive number.");
        }
    }

    // Public method to expose private details
    public aboutComputer(): void {
        console.log(`Computer Name: ${this.name}, RAM: ${this.ram}GB, SSD: ${this._ssd}GB`);
        this.getDetails(); // Call the private method
    }
}

// Creating an instance of the `Computer` class
const computer1 = new Computer("HP", 16);

// Accessing public properties directly
console.log(`Name: ${computer1.name}`); // Output: Name: HP
console.log(`RAM: ${computer1.ram}GB`); // Output: RAM: 16GB

// Using the getter to access private `_ssd` field
console.log(`SSD Details: ${computer1.ssdDetails}GB`); // Output: SSD Details: 512GB

// Modifying `_ssd` field via the setter
computer1.ssdDetails = 1024; // Sets the SSD size to 1024GB
console.log(`Updated SSD: ${computer1.ssdDetails}GB`); // Output: Updated SSD: 1024GB

// Attempting to set an invalid SSD size
computer1.ssdDetails = -256; // Output: SSD size must be a positive number.

// Using a public method to log complete details
computer1.aboutComputer();
// Output: 
// Computer Name: HP, RAM: 16GB, SSD: 1024GB
// Private Computer Name: HP


// --------------- Interface in TypeScript Class ---------------

// Defining an interface to describe the basic properties of a computer
interface ComputerInterface {
    name: string; // Name of the computer
    ram: number;  // RAM size in GB
}

// Defining another interface to describe behavior (methods)
interface DetailsInterface {
    aboutComputer(): void; // Method to provide details about the computer
}

// A class that implements both `ComputerInterface` and `DetailsInterface`
class Computer5 implements ComputerInterface, DetailsInterface {
    // Constructor initializes the `name` and `ram` properties
    constructor(public name: string, public ram: number) {}

    // Implementation of the `aboutComputer` method from `DetailsInterface`
    aboutComputer(): void {
        console.log(`Computer name: ${this.name}, RAM: ${this.ram} GB`);
    }
}

// Creating an instance of the `Computer5` class
let computer10 = new Computer5("Dell", 16);

// Calling the `aboutComputer` method on the instance
computer10.aboutComputer(); 
// Output: Computer name: Dell, RAM: 16 GB
