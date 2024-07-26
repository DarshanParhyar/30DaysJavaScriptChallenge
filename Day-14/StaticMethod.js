//Task 5: Add a static method to the Person class

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    static genericGreeting() {
        return "Hello, welcome!";
    }
}

console.log(Person.genericGreeting());
