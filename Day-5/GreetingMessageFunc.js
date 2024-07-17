// Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age


function greetPerson(name, age = 18) {
    console.log(`Hello, ${name}!`);
    console.log(`Your current age is ${age}.`);

    
}

greetPerson("mahi")