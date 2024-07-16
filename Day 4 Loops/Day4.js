// Activity 1
// Task 1

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 2
//let result;
for (let i = 1; i <= 10; i++) {
  //result+=i*5;
  console.log(i * 5);
}

// Activity 2
// Task 3
let i = 1;
let sum = 0;
while (i <= 10) {
  sum = sum + i;
  i++;
}
console.log("Sum of Number from 1 to 10 is : " + sum);

// Task 4

let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

// Activity 3
// Task 5
let f = 1;
do {
  console.log(f);
  f++;
} while (f <= 5);

// Task 6

let count = 5;
let factorial = 1;

do {
  factorial *= count;
  console.log(factorial);
  count--;
} while (count > 1);

// Activity 4
// Task 7

console.log("Task 7");

for (let i = 1; i <= 1; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += " *";
    console.log(row);
  }
}

// Activity 5
// Task 8

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Task 9
for (let i = 1; i <= 10; i++) {
  if (i > 7) {
    break;
  }
  console.log(i);
}
