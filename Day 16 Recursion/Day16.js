// Activity 1
// Task 1
{
  /*
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(2));
console.log(factorial(1));

// Task 2

function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));
console.log(fibonacci(4));
console.log(fibonacci(3));
console.log(fibonacci(2));
console.log(fibonacci(1));


// Activity 2
// Task 3

function sumArray(arg) {
  if (arg.length === 0) {
    return 0;
  }

  return arg[0] + sumArray(arg.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5]));


// Task 4

function maxNumber(arg) {
  // base case

  if (arg.length === 1) {
    return arg[0];
  }

  let maxOfRest = maxNumber(arg.slice(1));

  return Math.max(arg[0], maxOfRest);
}

console.log(maxNumber([23, 45, 22, 13, 99]));


// Activity 3

// Task 5
function reverseString(str) {
  if (str.length <= 1) {
    return str;
  }

  return reverseString(str.slice(1)) + str[0];
}

console.log("Reversed 'hello':", reverseString("hello")); 
console.log("Reversed 'world':", reverseString("world")); 
console.log("Reversed 'javascript':", reverseString("javascript")); 
console.log("Reversed 'a':", reverseString("a")); 
console.log("Reversed '':", reverseString("")); 


// Task 6

function isPalindrome(str) {
  // base case

  if (str.length <= 1) {
    return true;
  }

  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  if (cleanedStr[0] === cleanedStr[cleanedStr.length - 1]) {
    return isPalindrome(cleanedStr.slice(1, -1));
  }
  return false;
}

console.log("Is 'racecar' a palindrome?:", isPalindrome("racecar")); // Output: true
console.log("Is 'hello' a palindrome?:", isPalindrome("hello")); // Output: false
console.log(
  "Is 'A man, a plan, a canal, Panama' a palindrome?:",
  isPalindrome("A man, a plan, a canal, Panama")
); // Output: true
console.log(
  "Is 'No 'x' in Nixon' a palindrome?:",
  isPalindrome("No 'x' in Nixon")
); // Output: true
console.log("Is 'abc' a palindrome?:", isPalindrome("abc")); // Output: false

// Task 7

function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  // Base case: if the range is invalid, the target is not in the array
  if (start > end) {
    return -1;
  }

  // Calculate the middle index
  let mid = Math.floor((start + end) / 2);

  // Check if the middle element is the target
  if (arr[mid] === target) {
    return mid;
  }

  // If the target is less than the middle element, search the left half
  if (target < arr[mid]) {
    return binarySearch(arr, target, start, mid - 1);
  }

  // If the target is greater than the middle element, search the right half
  return binarySearch(arr, target, mid + 1, end);
}

// Test cases
let sortedArray = [1, 2, 3, 4, 5, 6, 8, 9, 10];

console.log("Index of 5:", binarySearch(sortedArray, 5)); // Output: 4
console.log("Index of 7:", binarySearch(sortedArray, 7)); // Output: -1 (not found)
console.log("Index of 1:", binarySearch(sortedArray, 1)); // Output: 0
console.log("Index of 10:", binarySearch(sortedArray, 10)); // Output: 8
console.log("Index of 8:", binarySearch(sortedArray, 8)); // Output: 6


// Task 8

function countOccurences(arr, target, index = 0) {
  // base case
  if (index === arr.length) {
    return 0;
  }

  let count = arr[index] === target ? 1 : 0;

  return count + countOccurences(arr, target, index + 1);
}
let array1 = [1, 2, 3, 4, 2, 2, 5];
let array2 = [7, 7, 7, 7, 7];
let array3 = [1, 2, 3, 4, 5];

console.log("Occurrences of 2 in array1:", countOccurences(array1, 2)); // Output: 3
console.log("Occurrences of 7 in array2:", countOccurences(array2, 7)); // Output: 5
console.log("Occurrences of 3 in array3:", countOccurences(array3, 3)); // Output: 1
console.log("Occurrences of 6 in array3:", countOccurences(array3, 6)); // Output: 0

// Activity 5
// Task 9

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function inOrderTraversal(node) {
  if (node == null) {
    return;
  }

  inOrderTraversal(node.left);

  console.log(node.value);

  inOrderTraversal(node.right);
}

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);
console.log("In-order traversal of the binary tree:");
inOrderTraversal(root);

*/
}

// Task 10

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function calculateDepth(node) {
  // Base case: if the node is null, the depth is 0
  if (node === null) {
    return 0;
  }

  // Recursively find the depth of the left and right subtrees
  let leftDepth = calculateDepth(node.left);
  let rightDepth = calculateDepth(node.right);

  // The depth of the current node is the maximum of the left and right depths plus 1
  return Math.max(leftDepth, rightDepth) + 1;
}

let tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);
tree1.left.left = new TreeNode(4);
tree1.left.right = new TreeNode(5);

let tree2 = new TreeNode(1);
tree2.right = new TreeNode(2);
tree2.right.right = new TreeNode(3);
tree2.right.right.right = new TreeNode(4);

// Tree 3: Empty tree
let tree3 = null;

// Perform depth calculations and log the results
console.log("Depth of tree1:", calculateDepth(tree1)); // Output: 3
console.log("Depth of tree2:", calculateDepth(tree2)); // Output: 4
console.log("Depth of tree3:", calculateDepth(tree3)); // Output: 0
