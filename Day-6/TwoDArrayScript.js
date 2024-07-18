

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Original matrix:");
console.log(matrix);


console.log("Element at row 1, column 2:"+ matrix[1][2]);

// Modifying an element
matrix[0][0] = 10;
console.log("After modifying element:");
console.log(matrix);

// Adding a new row
matrix.push([10, 11, 12]);
console.log("After adding a new row:");
console.log(matrix);

// Iterating over the matrix
console.log("Iterating over the matrix:");
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`Element at [${i}][${j}]:`, matrix[i][j]);
    }
}

