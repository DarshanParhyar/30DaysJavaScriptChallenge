//Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 10;
let num2 = 50;
let num3 = 30;

if (num1 > num2) {
  if (num1 > num3) {
    console.log("The largest number is:", num1);
  } else {
    console.log("The largest number is:", num3);
  }
} else if (num2 > num1) {
  if (num2 > num3) {
    console.log("The largest number is:", num2);
  } else {
    console.log("The largest number is:", num3);
  }
} else {
  console.log("The largest number is:", num1);
}
