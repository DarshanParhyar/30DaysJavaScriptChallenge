
let fruits = ['apple', 'banana'];
console.log("Initial array:"+ fruits);

// push: Add to the end
fruits.push('orange');
console.log("After push:"+ fruits);

// pop: Remove from the end
let lastFruit = fruits.pop();
console.log("Removed fruit:"+ lastFruit);
console.log("After pop:"+ fruits);

// unshift: Add to the beginning
fruits.unshift('grape');
console.log("After unshift:"+ fruits);

// shift: Remove from the beginning
let firstFruit = fruits.shift();
console.log("Removed fruit:"+ firstFruit);
console.log("After shift:"+ fruits);

