import './style.css'
import { setupCounter } from './counter.ts'


// Exercise 1
class Person {
    constructor(private firstName: string, private lastName: string, public age: number, protected address: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.age = age
    }
    getFullName() {return (this.firstName + ' ' + this.lastName)};
}
const myPerson = new Person("David", "Zamir", 28, "beersheva")
console.log(myPerson.getFullName());


// Exercise 2
interface Vehicle {
    make: string;
    model: string;
    start(): any;
}
interface Car extends Vehicle {
    numberOfDoors: number;
}
class Sedan implements Car {
    make: string;
    model: string;
    numberOfDoors: number;
    constructor(make: string, model: string, numberOfDoors: number) {
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
    }
    start() { return "vroom vroom"}
}
const myCar = new Sedan("Ford", "Mustang", 5)
console.log(myCar.start());


// Exercise 3
interface firstObj {
    greet: string;
}
interface secondObj {
    goodbye: string;
}

type objA = firstObj;
type objB = secondObj;
type allTypes = objA & objB;

function combineObjects(obj_one: objA, obj_two: objB) {
    const merged: allTypes = {greet: obj_one.greet, goodbye: obj_two.goodbye};
    return merged;
}
const myGreeting: firstObj = { greet: "Hello"};
const myGoodbye: secondObj = { goodbye: "Goodbye"};
console.log(combineObjects(myGreeting, myGoodbye));

// Exercise 4
class Stack<T> {
    private items: T[] = [];
    push(item: T): void {
        this.items.push(item);
    }
    pop(): T | undefined {
        return this.items.pop();
    }
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

const integers = new Stack<number>();
const strings = new Stack<string>();
integers.push(1);
integers.push(50);
strings.push("hello");
strings.push("world");

console.log(integers.pop());
console.log(integers.isEmpty());
console.log(strings.pop());
console.log(strings.isEmpty());

// Exercise 5

function filterArray<T>(array: T[], predicate: (element: T) => boolean): T[] {
    const result: T[] = [];
    for (const element of array) {
        if (predicate(element)) {
            result.push(element);
        }
    }
    return result;
}
// modulo %2
const isEven = (num: number): boolean => num % 2 === 0;
const myNums = [1, 2, 3, 4, 5, 6];
const getEvenNums = filterArray(myNums, isEven);
console.log(getEvenNums);



// Daily Challenge
function validateUnionType(value: any, allowedTypes: string[]): boolean {
    for (let type of allowedTypes) {
        if (typeof value === type) {
            return true;
        }
    }
    return false;
}
const myAllowedTypes = ["number", "boolean"];
const myText = "Hello, TypeScript!";
//false
console.log(validateUnionType(myText, myAllowedTypes));
// true
console.log(validateUnionType(150, myAllowedTypes));
console.log(validateUnionType(false, myAllowedTypes));





document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Day 2 Typescript</h1>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
