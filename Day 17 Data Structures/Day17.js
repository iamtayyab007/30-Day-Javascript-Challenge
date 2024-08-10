// Activity 1
// Task 1 && Task 2

{
  /*
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  removeNode() {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }
    if (this.head.next === null) {
      this.head = null;
    } else {
      let current = this.head;
      let previous = null;
      while (current.next !== null) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
    }
  }

  displayNodes() {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }
    let current = this.head;
    let nodes = [];
    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }
    console.log(nodes.join("->"));
  }
}

const list = new LinkedList();

list.addNode(10);
list.addNode(20);
list.addNode(30);
console.log("Current list:");
list.displayNodes(); // Output: 10 -> 20 -> 30

list.removeNode();
console.log("After removing the last node:");
list.displayNodes(); // Output: 10 -> 20

list.removeNode();
console.log("After removing another node:");
list.displayNodes(); // Output: 10

list.removeNode();
console.log("After removing the last node:");
list.displayNodes(); // Output: List is empty

list.removeNode(); // Output: List is empty

*/
}

// Activity

// Task 3 & 4

class Stack {
  constructor() {
    this.items = [];
  }

  pushItems(items) {
    this.items.push(items);
  }
  popItems() {
    if (this.items.length === 0) {
      return "Stack is empty";
    } else {
      return this.items.pop();
    }
  }
  peekItems() {
    return this.items[this.items.length - 1];
  }
  printStack() {
    console.log(this.items.join(", "));
  }
}

const stack = new Stack();

stack.pushItems(20);
stack.pushItems(30);
stack.pushItems(40);
stack.popItems();
stack.peekItems();
stack.printStack();

function reverseString(str) {
  const stack = new Stack();
  for (let i = 0; i <= str.length - 1; i++) {
    stack.pushItems(str[i]);
  }
  let reversedStr = "";

  while (stack.items.length !== 0) {
    reversedStr += stack.popItems();
  }
  return reversedStr;
}

const originalString = "Honda";
const reversedString = reverseString(originalString);
console.log("reverseString ", reversedString);
