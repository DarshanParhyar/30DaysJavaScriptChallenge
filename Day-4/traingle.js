//Write a program to print a pattern of traingle using nested for loops?

let rows = 5;

for (let i = 0; i < rows; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}