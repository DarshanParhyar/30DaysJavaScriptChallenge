let myname = "darshana";
var rollNum = 372;
const graduated = false;
let largeNumber = 12341324234324231413241423141234143134;
let collegeName = undefined;
const mixedArray = ["js", 1, 3, 4, "chai"];
let myObject = {
  myName: "darshana",
  age: 20,
};

function multiplication(num1, num2) {
  return num1 + num2;
}

const result = multiplication(5, 4);

console.log(
  `my name is ${myname} and data type of my name is ${typeof myname}`
);
console.log(
  `my roll number is ${rollNum} and data type of my roll number is ${typeof rollNum}`
);
console.log(
  `my graduated status is ${graduated} and data type of my graduated status is ${typeof graduated}`
);
console.log(
  `the large number is ${largeNumber} and data type of large number is ${largeNumber}`
);
console.log(
  `the college name is ${collegeName} and data type of college name is ${typeof collegeName} `
);
console.log(
  `mixedArray is ${mixedArray} and data type of mixed array is ${typeof mixedArray}`
);
console.log(
  `my object is ${myObject} and data type of my object is ${myObject}`
);
console.log(
  `multiplication of two numbers is ${result} and data type of function is ${multiplication}`
);
