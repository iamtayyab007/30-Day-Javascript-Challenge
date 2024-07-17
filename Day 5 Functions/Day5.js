// Activity 1
// Task 1

function checkNum(num) {
  if (num % 2 === 0) {
    console.log("The num is EVEN");
  } else {
    console.log("The number is ODD");
  }
}

checkNum(2);

// Task 2

function numSqr() {
  let num = 2;
  let result;

  result = num * num;
  return result;
}
console.log(numSqr());

// Activity 2
// Task 3

function maxNum(a, b) {
  if (a > b) {
    console.log("A is greater than B");
  } else {
    console.log("B is greater than A");
  }
}

maxNum(1, 2);

// Task 4

function concatString(a, b) {
  let result = a + b;
  return result;
}

console.log(concatString("Hi", "World"));

//Activity 3
// Task 5

const sum = (a, b) => a + b;

console.log(sum(2, 3));

// Task 6
const checkSepcialCharacter = (str) => {
  const specialCharacter = /[^A-Za-z0-9]/;
  return specialCharacter.test(str);
};

console.log(checkSepcialCharacter("Hello123"));

// Activity 4
// Task 7

function productNum(a, b = 4) {
  let result = a * b;
  return result;
}

console.log(productNum(3));

// Task 8

function greeting(name, age = 27) {
  return `greeting ${name}, you are ${age} years old`;
}

console.log(greeting("Khan"));

// Activity 5
// Task 9

const higherOrderFunction = (func, times) => {
  for (let i = 1; i <= times; i++) {
    func();
  }
};

const sayHi = () => {
  console.log("Hi there");
};

higherOrderFunction(sayHi, 3);

// Task 10
const anonymousFn = (func1, func2, value) => {
  const result1 = func1(value);
  const result2 = func2(result1);
  return result2;
};

const addNum = (num) => num + 1;
const square = (num) => num * num;

const initialValue = 4;
const result = anonymousFn(addNum, square, initialValue);

console.log(result);
