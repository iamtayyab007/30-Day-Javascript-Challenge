// Activity 1
// Task 1
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
