// Activity 1
// Task 1
{
  /*
function greeting(greetings) {
  return function (name) {
    return `${greetings}, ${name}`;
  };
}

const greetHi = greeting("Welcome");

console.log(greetHi("janagu"));


function createCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const trackCounter = createCounter();
console.log(trackCounter());
console.log(trackCounter());
console.log(trackCounter());


function createCounter() {
  let counter = 0;
  return {
    increment: function () {
      return ++counter;
    },
    getValue: function () {
      return counter;
    },
  };
}

const counter = createCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.getValue());

// Activity 2
// Task 3
function uniqueIDs() {
  let lastId = 0;
  return {
    increment: function () {
      return ++lastId;
    },
    getLastId: function () {
      return lastId;
    },
  };
}

const generateUniqueId = uniqueIDs();
console.log(generateUniqueId.increment());
console.log(generateUniqueId.increment());
console.log(generateUniqueId.increment());
console.log(generateUniqueId.getLastId());

// Task 4
function userName(name) {
  return function () {
    return `welcome to the party ${name}`;
  };
}

const myName = userName("saman");
console.log(myName());


// Activity 3

// Task 5
function createFunctionArray(size) {
  let functions = [];

  for (let i = 0; i < size; i++) {
    functions.push(
      (function (index) {
        return function () {
          console.log(index);
        };
      })(i)
    );
  }

  return functions;
}

let functionArray = createFunctionArray(5);

// Test the functions
functionArray[0](); // Logs: 0
functionArray[1](); // Logs: 1
functionArray[2](); // Logs: 2
functionArray[3](); // Logs: 3
functionArray[4](); // Logs: 4


// Activity 4
// Task 6

function manageItems(item) {
  let items = [];
  return {
    add: function (item) {
      items.push(item);
      return `${item} added`;
    },
    remove: function (item) {
      const index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
        console.log(item + " has been removed");
      } else {
        console.log(item + " not found");
      }
    },
    listItems: function () {
      console.log("items in the collection: ");
      items.forEach((item) => {
        console.log(item);
      });
    },
  };
}

const itemsModule = manageItems();

console.log(itemsModule.add("cars"));
console.log(itemsModule.add("tomato"));
console.log(itemsModule.add("potato"));
console.log(itemsModule.remove("potato"));
console.log(itemsModule.add("egg"));
console.log(itemsModule.remove("egg"));
console.log(itemsModule.listItems());


// Activity 5
// Task 7

function memorize(fn) {
  let cache = {};

  return function (...args) {
    let key = JSON.stringify(args);

    if (key in cache) {
      console.log(`Returning cached Result`, key);
      return cache[key];
    }
    let result = fn(...args);

    cache[key] = result;
    console.log("Computing and caching result for:", key);
    return result;
  };
}

function slowFunction(x, y) {
  // Simulate a time-consuming computation
  let sum = 0;
  for (let i = 0; i < 1e6; i++) {
    sum += x + y;
  }
  return sum;
}

// Create a memoized version of the slow function
const memoizedSlowFunction = memorize(slowFunction);

// Call the memoized function with various arguments
console.log(memoizedSlowFunction(5, 10)); // Computes and caches result
console.log(memoizedSlowFunction(5, 10)); // Returns cached result
console.log(memoizedSlowFunction(10, 20)); // Computes and caches result
*/
}

// Task 8

function memoize(fn) {
  // Create an object to store cached results
  let cache = {};

  // Return a new function that wraps the original function
  return function (...args) {
    // Convert arguments to a string key for caching
    let key = JSON.stringify(args);

    // Check if the result is already cached
    if (key in cache) {
      console.log("Returning cached result for:", key);
      return cache[key];
    }

    // Compute the result if not cached
    let result = fn(...args);

    // Cache the result and return it
    cache[key] = result;
    console.log("Computing and caching result for:", key);
    return result;
  };
}

// Function to calculate factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Create a memoized version of the factorial function
const memoizedFactorial = memoize(factorial);

// Test the memoized factorial function
console.log(memoizedFactorial(5)); // Computes and caches result
console.log(memoizedFactorial(5)); // Returns cached result
console.log(memoizedFactorial(6)); // Computes and caches result
console.log(memoizedFactorial(4)); // Computes and caches result
