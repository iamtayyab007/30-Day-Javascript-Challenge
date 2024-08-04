import { addTwoNumbers } from "./Math.js";
import { person } from "./Math.js";
import { add, sub, multiply, divide } from "./Math.js";
import randomNumbers from "./Math.js";
import _ from "lodash";
import axios from "axios";

const num1 = 2;
const num2 = 5;

console.log(addTwoNumbers(num1, num2));

console.log(person.haveBirthday());

console.log(add(2, 3));
console.log(sub(3, 1));
console.log(multiply(2, 3));

try {
  console.log(divide(6, 0));
} catch (error) {
  console.log(error.message);
}

console.log(randomNumbers(5));

const numArr = [1, 45, 54, 23, 2, 23, 45, 123, 435];
const chunkedArray = _.chunk(numArr, 3);
console.log(chunkedArray);

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log("data:", response.data);
  } catch (error) {
    console.log(error.message);
  }
};

fetchData();
