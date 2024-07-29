//Task 4: Reverse a string using Stack

const reverseString = (str) => {
    const stack = new Stack();
    for (const char of str) {
      stack.push(char);
    }
    let reversedStr = '';
    while (stack.peek() !== null) {
      reversedStr += stack.pop();
    }
    return reversedStr;
  };
  
  console.log(reverseString("hello")); 
  