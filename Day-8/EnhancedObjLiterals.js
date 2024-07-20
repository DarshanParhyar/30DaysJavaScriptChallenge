//Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

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


//Task 9: Create an object with computed property names based on variables and log the object to the console.


const propName = "age";
const value = 25;

const dynamicObject = {
    [propName]: value,
    name: "Charlie"
};

console.log(dynamicObject);
