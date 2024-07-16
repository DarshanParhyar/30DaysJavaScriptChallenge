//Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement

let num = 1;

while (num <= 10) {
    console.log(num);
    if (num === 7) {
        break;
    }
    num++;
}

console.log('Loop stopped at number 7.');
