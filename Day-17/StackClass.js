//Task 3: Implement a Stack class

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.items.length === 0) return null;
      return this.items.pop();
    }
  
    peek() {
      if (this.items.length === 0) return null;
      return this.items[this.items.length - 1];
    }
  }
  