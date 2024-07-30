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
*/
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
