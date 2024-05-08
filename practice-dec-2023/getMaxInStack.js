// Use your Stack class to implement a new class MaxStack with a 
// method getMax() that returns the largest element in the stack. 
// getMax() should not remove the item.
// Your stacks will contain only integers.


class Stack {
    constructor() {
  
      // Initialize an empty stack
      this.items = [];
    }
  
    // Push a new item onto the stack
    push(item) {
      this.items.push(item);
    }
  
    // Remove and return the last item
    pop() {
  
      // If the stack is empty, return null
      // (It would also be reasonable to throw an exception)
      if (!this.items.length) {
        return null;
      }
      return this.items.pop();
    }
  
    // Returns the last item without removing it
    peek() {
      if (!this.items.length) {
        return null;
      }
      return this.items[this.items.length - 1];
    }
}

// class MaxStack {
//     constructor() {
//       this.items = [];
//     }


// }
result = -Infinity
origionalStack = [3,5,9,10,6,8]

maxStack = [8,6,10,9,5,3]