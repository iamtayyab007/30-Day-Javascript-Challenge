// Activity 1
// Task 1

const personName = "jokado";
const personAge = 24;

console.log(
  `the person name is ${personName} and the person Age is ${personAge}`
);
// Task 2

const multiString = `
this is the first line
this is the second line
this is the third line
this is the fourth line`;
console.log(multiString);

// Activity 2 Destructuring

// Task 3

const Numbers = [2, 4, 5, 6, 3, 2, 34, 5];

const [, , , , , , first, second] = Numbers;
console.log(`First element: ${first}`);
console.log(`First element: ${second}`);

// Task 4

const book = {
  title: "heroke",
  author: "begid",
  year: 1009,
};

const { title, author } = book;

console.log(`Book Title: ${title} and Book Author: ${author}`);

// Activity 3 Spread and Rest Operators

// Task 5

const array1 = ["apple", "orange", "pineapple"];
const array2 = [...array1, "peach", "mangoes"];
console.log(array2);

// Task 6

function sumNumbers(...numbers) {
  // const result = numbers.reduce((sum, number) => sum + number);
  // return result;
  // let result = 0;

  // for (const items of numbers) {
  //   result = result + items;
  // }
  // return result;
  let sum = 0;
  const result = numbers.map((num) => (sum += num));
  return sum;
}

const addNumbers = sumNumbers(12, 34, 14, 15, 23);

console.log(addNumbers);

// Activity 4 Default parameters
// Task 7

function product(a, b = 1) {
  return a * b;
}
console.log(product(2));
console.log(product(2, 3));

// Activity 5
// Task 8

const persons = {
  name: "jalile",
  age: 23,

  greet() {
    return `The name of the person is ${this.name} and the age is ${
      this.age
    }. After ${this.afterTwentyYears} years, I will be ${
      this.age + this.afterTwentyYears
    }`;
  },

  haveBirthday() {
    this.age += 1;
    this.name = "birthday Boy";
  },
  ["afterTwentyYears"]: 25,
};

console.log(persons.greet());
persons.haveBirthday();

console.log(persons.greet());

// Task 9

const dynamicName = "firstName";
const dynamicLast = "lastName";

const demo = {
  [dynamicName]: "jalil",
  [dynamicLast]: "jatt",
  age: 25,
};

console.log(demo);
