//Task 7: Add a getter method to the Person class

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person = new Person("mahi", "jinxy", 20);
console.log(person.fullName);
