export const addTwoNumbers = (a, b) => {
  return a + b;
};

export const person = {
  name: "Khan",
  age: 23,
  haveBirthday() {
    console.log("My birthday is on 23 april");
  },
};

export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

function randomNumbers(num) {
  return Math.random() * num;
}

export default randomNumbers;
