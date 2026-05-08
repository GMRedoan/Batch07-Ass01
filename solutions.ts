// Problem 01

function filterEvenNumbers(numbers: number[]) {
    return numbers.filter((number) => number % 2 === 0);
}
filterEvenNumbers([1, 2, 3, 4, 5, 6])

//  Problem 02 

function reverseString(name: string) {
    return name.split("").reverse().join("")
}
reverseString("typescript")

// Problem 03

type StringOrNumber = string | number;

function checkType(value: StringOrNumber) {
    if (typeof value === "string") {
        return "String"
    } else (typeof value === "number")
    return "Number"
}

checkType("Hello")
checkType(42)

// Problem 04

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}
const user = {
    id: 1,
    name: "John Doe",
    age: 21,
};

getProperty(user, "name");

// Problem 05

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(myBook: Book): Book & { isRead: boolean } {
    return { ...myBook, isRead: true }
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };

toggleReadStatus(myBook);

// Problem 06

class Person {
    name: string;
    age: number;

    constructor (name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade : string;

    constructor(name: string, age: number, grade: string){
        super(name, age)
        this.grade = grade
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
const student = new Student("Alice", 20, "A");

student.getDetails();

// Problem 07

function getIntersection(array1: number[], array2 : number[]){
    return [...new Set(array1.filter((number) => array2.includes(number)))]
}

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);