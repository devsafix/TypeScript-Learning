# **TypeScript Learning Guide**

This repository contains my journey of learning TypeScript. It includes various concepts explained with examples, covering everything from the basics to advanced topics. The purpose is to document key learnings and provide future reference for working with TypeScript effectively.

## **Getting Started**

To run the examples in this repository:

1. Install [Node.js](https://nodejs.org/) if you haven't already.
2. Install TypeScript globally:
   ```bash
   npm install -g typescript
   ```
3. Clone this repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```
4. Compile TypeScript files:
   ```bash
   tsc <filename>.ts
   ```
5. Run the compiled JavaScript file:
   ```bash
   node <filename>.js
   ```

## **Learning Topics**

### 1. **Basic Types**
- Numbers, Strings, Booleans, Arrays, and Tuples
- Example:
  ```typescript
  let isDone: boolean = true;
  let age: number = 25;
  let name: string = "John";
  let scores: number[] = [90, 80, 70];
  let tuple: [number, string] = [1, "Apple"];
  ```

### 2. **Functions**
- Type annotations for parameters and return types
- Example:
  ```typescript
  function greet(name: string): string {
      return `Hello, ${name}!`;
  }
  ```

### 3. **Type Aliases and Interfaces**
- Defining reusable types
- Example:
  ```typescript
  type Person = { name: string; age: number };
  interface Employee extends Person {
      position: string;
  }
  ```

### 4. **Classes**
- Object-oriented programming with TypeScript
- Example:
  ```typescript
  class Car {
      constructor(public brand: string, private speed: number) {}
      drive(): void {
          console.log(`${this.brand} is driving at ${this.speed} km/h.`);
      }
  }
  ```

### 5. **Generics**
- Creating reusable components
- Example:
  ```typescript
  function identity<T>(value: T): T {
      return value;
  }
  ```

### 6. **Modules**
- Importing and exporting in TypeScript
- Example:
  ```typescript
  export function add(a: number, b: number): number {
      return a + b;
  }

  import { add } from './math';
  ```

## **Resources**
- Official Documentation: [TypeScript Docs](https://www.typescriptlang.org/)
- Tutorials: [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

## **Author**
- **Kawser**
- LinkedIn: [Your Profile](https://www.linkedin.com/in/devsafix/)
- GitHub: [Your GitHub](https://github.com/devsafix)

---

Happy coding with TypeScript! 🎉
