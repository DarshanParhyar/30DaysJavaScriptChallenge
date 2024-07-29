//ask 2: Implement a LinkedList class
class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    remove() {
      if (!this.head) return null;
  
      if (!this.head.next) {
        const removedNode = this.head;
        this.head = null;
        return removedNode;
      }
  
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      const removedNode = current.next;
      current.next = null;
      return removedNode;
    }
  
    display() {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  