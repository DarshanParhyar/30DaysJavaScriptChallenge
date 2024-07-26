class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static genericGreeting() {
        return "Hello, welcome!";
    }
}

console.log(Person.genericGreeting());
