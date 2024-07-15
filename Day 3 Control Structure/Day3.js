// Activity 1

// Task 1

let number = -2;

if (number > 0) {
  console.log("It is a positive number");
} else if (number < 0) {
  console.log("It is a negative number");
} else {
  console.log("It is a Zero");
}

// Task 2

let age = 17;
if (age >= 18) {
  console.log("The person is eligible to vote");
} else {
  console.log("The person is not eligible to vote");
}

// Activity 2
// Task 3

let a = 11,
  b = 12,
  c = 13;

if (a > b) {
  if (a > c) {
    console.log("A is the largest number");
  } else {
    console.log("C is the largest number");
  }
} else {
  if (b > c) {
    console.log("B is the largest number");
  } else {
    console.log("C is the largest number");
  }
}

// Activity 3

// Task 4
let Day = 2;
switch (Day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
}

// Task 5
let score = 73;
let grade;
switch (true) {
  case score >= 90:
    grade = "A";
    console.log("You have secured " + grade);
    break;

  case score >= 80:
    grade = "B";
    console.log("You have secured " + grade);
    break;

  case score >= 70:
    grade = "C";
    console.log("You have secured " + grade);
    break;

  case score >= 60:
    grade = "D";
    console.log("You have secured " + grade);
    break;

  default:
    grade = "F";
    console.log("You are failed " + grade);
}

// Activity 4

// Task 6

let checkNumber = 4;

checkNumber % 2 === 0
  ? console.log("The number is even")
  : console.log("The Number is ODD");

// Activity 5

// Task 7

let year = 2017;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    console.log("It is a leap year");
    return true;
  }
} else {
  console.log("It is not a leap year");
  return false;
}
