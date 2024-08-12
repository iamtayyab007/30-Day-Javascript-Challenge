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

// Activity
// Task 5 & 6

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(elements) {
    this.items.push(elements);
  }
  dequeue() {
    if (this.items.length === 0) {
      return "No elements in the queue";
    } else {
      return this.items.shift();
    }
  }

  front() {
    if (this.items.length === 0) {
      return "Queue is empty";
    } else {
      return this.items[0];
    }
  }

  display() {
    console.log("The items are: " + this.items.join(", "));
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display();
console.log(queue.dequeue());
queue.display();
console.log(queue.front());
queue.display();
queue.display();



class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(elements) {
    this.items.push(elements);
  }

  dequeue() {
    if (this.items.length == 0) {
      return "Queue is empty";
    } else {
      const jobs = this.items.shift();
      console.log(`Processing job`);
      return jobs;
    }
  }
  front() {
    if (this.items.length == 0) {
      return "Queue is empty";
    } else {
      return this.items[0];
    }
  }

  display() {
    const jobs = this.items;
    console.log(`Current jobs in the queue ${jobs}`);
  }
}
const queue = new Queue();
queue.enqueue("Job1");
queue.enqueue("Job2");
queue.enqueue("Job3");
queue.display();
console.log(queue.dequeue());
queue.display();
console.log(queue.front());


// Activity 4
// Task 7

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);

root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;

console.log((root.right = node3));
*/
}
// Task 8

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null; // Initialize the root of the tree as null
  }

  // Method to insert a value into the binary tree
  insert(value) {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode; // If the tree is empty, the new node becomes the root
    } else {
      this.insertNode(this.root, newNode); // Otherwise, find the correct position and insert the node
    }
  }

  // Helper method to recursively find the correct position to insert the new node
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode; // Insert as the left child if left is null
      } else {
        this.insertNode(node.left, newNode); // Recur to the left subtree
      }
    } else {
      if (node.right === null) {
        node.right = newNode; // Insert as the right child if right is null
      } else {
        this.insertNode(node.right, newNode); // Recur to the right subtree
      }
    }
  }

  // Method to perform in-order traversal
  inOrderTraversal(node = this.root) {
    if (node !== null) {
      this.inOrderTraversal(node.left); // Visit left subtree
      console.log(node.value); // Visit current node
      this.inOrderTraversal(node.right); // Visit right subtree
    }
  }
}
