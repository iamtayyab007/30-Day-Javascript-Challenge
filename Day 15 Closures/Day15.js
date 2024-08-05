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
*/
}

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
