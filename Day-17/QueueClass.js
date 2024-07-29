//Task 5: Implement a Queue class

class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.items.length === 0) return null;
      return this.items.shift();
    }
  
    front() {
      if (this.items.length === 0) return null;
      return this.items[0];
    }
  }
  