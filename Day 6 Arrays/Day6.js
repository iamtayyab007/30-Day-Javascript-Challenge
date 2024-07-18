// Activity 1

// Task 1
const Numbers = [1, 2, 3, 4, 5];
console.log(Numbers);
// Task 2
const cars = ["Audi", "mercedes", "Kia", "Land cruiser"];

console.log(cars[0], cars[3]);

// Activity 2
// Task 3

const fruits = ["orange", "Mangoes", "Apple"];
fruits.push("pine apple");

console.log(fruits.length);
// Task 4

fruits.pop();

console.log(fruits.length);

// Task 5

fruits.shift();
console.log(fruits.length);

// Task 6

fruits.unshift("peach");
console.log(fruits);

// Activity 3

// Task 7

const Num = [2, 4, 6, 8, 9];

console.log(Num.map((num) => num * 2));

// Task 8

const checkNum = [1, 2, 3, 4, 5, 6, 7, 8];

const even = checkNum.filter((even) => (even % 2 === 0 ? even : ""));

console.log(even);

// Task 9

const AddNumbers = [25, 45, 65, 76, 54, 34, 99];

const reduceNum = AddNumbers.reduce((acc, num) => {
  return acc + num;
}, 0);

console.log(reduceNum);

// Activity 4
// Task 10

const vegetables = ["ladyfinger", "onion", "potatoes", "ginger"];

for (let i = 0; i <= vegetables.length - 1; i++) {
  console.log(vegetables[i]);
}

// Task 11
console.log("ForEach Method");
vegetables.forEach((vegetable) => {
  console.log(vegetable);
});

console.log("For of Loop");
for (const items of vegetables) {
  console.log(items);
}

// Activity 5
// Task 12

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix);

// Task 13

console.log(matrix[1][1]);
