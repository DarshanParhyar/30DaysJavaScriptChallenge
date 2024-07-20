const name = "Bob";
const age = 30;

const person = {
    name,
    age,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

console.log(person);
person.greet();

const propName = "age";
const value = 25;

const dynamicObject = {
    [propName]: value,
    name: "Charlie"
};

console.log(dynamicObject);
