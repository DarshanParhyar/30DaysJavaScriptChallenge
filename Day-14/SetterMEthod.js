//Task 8: Add a setter method to the Person class

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

const person = new Person("mahi", "jinxy", 20);
console.log(person.fullName);
person.fullName = "mahi xo";
console.log(person.fullName);
