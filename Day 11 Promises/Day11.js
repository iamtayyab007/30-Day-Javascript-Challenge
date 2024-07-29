// Activity 1
// Task 1 & 2

{
  /* 
  let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("Promise has been resolved");
    reject("Promise has been rejected");
  }, 2000);
});

myPromise
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

// Activity 2
// Task 3

let apiURL = "https://jsonplaceholder.typicode.com/posts";

fetch(apiURL)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok" + res.statusText);
    }
    return res.json();
  })
  .then((data) => {
    console.log("Data has been fetched", data);
  })
  .catch((err) => {
    console.log("There was a problem with the fetched operation", err);
  });



// Activiy 3
// Task 4
function delayedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("The promise has been resolved");
    }, 3000);
  });
}

function delayPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("The promise has been rejected");
    }, 3000);
  });
}

async function myPromise() {
  try {
    let result = await delayPromise();
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

myPromise();

 

// Activity 4
// Task 6

let apiUrl = "https://jsonplaceholder.typicode.com/posts";

fetch(apiUrl)
  .then((data) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return data.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Task 7

let apiUrl1 = "https://jsonplaceholder.typicode.com/posts";

async function fetchData() {
  try {
    const response = await fetch(apiUrl1);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

console.log(fetchData());
 */
}

// Activity 5
// Task 8 & 9
function delay(time, message, bl = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (bl) {
        reject(message);
      } else {
        resolve(message);
      }
    }, time);
  });
}

let promise1 = delay(3000, "Promise1 has been resolved");
let promise2 = delay(2000, "Promise2 has been resolved");
let promise3 = delay(1000, "Promise3 has been rejected", true);

Promise.race([promise1, promise2, promise3])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
