// Activity 1
// Task 1
{
  /*}
function throwError() {
  throw new Error("THis is an intentional error");
}

try {
  throwError();
} catch (error) {
  console.log(error.message);
}

// Task 2

function checkNum(a, b) {
  if (a % b === 0) {
    throw new Error("this is false");
  }
}

try {
  checkNum(2, 2);
} catch (error) {
  console.log(error.message);
}


// Activity 2
// Task 3

function throwError() {
  throw new Error("THis is an intentional error");
}
function executionAndHandleError() {
  try {
    console.log("inside try block: Attempting to run throw error");
    throwError();
    console.log("THis line will not be executed");
  } catch (error) {
    console.log("Inside catch block: An error occured", error.message);
  } finally {
    console.log(
      "Inside finally block:Execution completed, whether an error occured or not"
    );
  }
}

executionAndHandleError();


// Activity 3
// Task 4

class MyCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyCustomError";
  }
}

function throwCustomError() {
  throw new MyCustomError("THis is a custom Error");
}

function executeAndHandleCustomError() {
  try {
    console.log("Inside try block: Attempting to run throwCustomError...");
    throwCustomError();
    console.log("This line will not be executed"); // This line will be skipped due to the error
  } catch (error) {
    if (error instanceof MyCustomError) {
      console.log(
        "Inside catch block: A custom error occurred:",
        error.message
      );
    } else {
      console.log(
        "Inside catch block: An unknown error occurred:",
        error.message
      );
    }
  } finally {
    console.log(
      "Inside finally block: Execution completed, whether an error occurred or not"
    );
  }
}
executeAndHandleCustomError();



// Task 5

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "Validation Error";
  }
}

function validateUserInput(input) {
  if (!input || input.trim === "") {
    throw new ValidationError("input cannot be empty");
  } else {
    console.log("input is valid", input);
  }
}

function executeAndValidate(input) {
  try {
    console.log("Validating input....");
    validateUserInput(input);
    console.log("Validation successfull");
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log("Validation Error:", error.message);
    } else {
      console.log("unknown error:", error.message);
    }
  }
}

executeAndValidate("");
executeAndValidate("Hi");


// Activity 4
// Task 6

function randomPromise(delay) {
  return new Promise((resolve, reject) => {
    let randomValue = Math.random();
    console.log(randomValue);
    setTimeout(() => {
      if (randomValue < 0.5) {
        resolve("Promise has been resolved Successfully");
      } else {
        reject("promise has been rejected");
      }
    }, delay);
  });
}

randomPromise(1000)
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// Task 7

function randomPromise(delay) {
  return new Promise((resolve, reject) => {
    let randomValue = Math.random();
    console.log(randomValue);
    setTimeout(() => {
      if (randomValue < 0.5) {
        resolve("Promise has been resolved Successfully");
      } else {
        reject("promise has been rejected");
      }
    }, delay);
  });
}

async function handleRandomPromise() {
  try {
    const random = await randomPromise(1000);
    console.log("Success", random);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Promise handling completed");
  }
}
handleRandomPromise();


// Activity 5
// Task 8

function fetchData() {
  const invalidURL = "https://invalidurl.example/api/data";

  fetch(invalidURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok" + response.statusText);
      }
      response.json();
    })
    .then((data) => {
      console.log("Data received", data);
    })
    .catch((error) => {
      console.log("fetch error", error.message);
    });
}
fetchData();
*/
}

async function fetchData() {
  const invalidURL = "https://invalidurl.example/api/data";

  try {
    const response = await fetch(invalidURL);
    if (!response.ok) {
      throw new Error("Network response was not ok" + response.statusText);
    }
    const result = await response.json();
    console.log("Data received", result);
  } catch (error) {
    console.log("Fetch Error", error.message);
  }
}
fetchData();
