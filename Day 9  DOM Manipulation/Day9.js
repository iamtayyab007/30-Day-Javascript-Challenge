// Activity

// Task 1

const div = document.getElementById("main");

div.innerHTML = `<h1>This is the edited content</h1>`;
// Task 2
const divSecondary = document.getElementsByClassName("secondary")[0];

divSecondary.style.backgroundColor = "red";

// Activity 2

// Task 3

const newDiv = document.createElement("div");
newDiv.textContent = "THis is the new DIv";
document.body.appendChild(newDiv);

// Task 4

const listItem = document.createElement("li");
listItem.textContent = "this is the second list item";

const listItems = document.querySelector(".unorderlist");

listItems.appendChild(listItem);

// Activity 3

// Task 5
newDiv.remove();

// Task 6

listItems.removeChild(listItems.lastElementChild);

// Activity 4

// Task 7

const divImages = document.querySelector("img");
divImages.setAttribute("src", "profile pic.png");

// Task 8

const myDiv = document.querySelector(".images");
myDiv.classList.add("background-color");

// Task 9

myDiv.classList.remove("background-color");

// Activity 5

// Task 9
const element = document.querySelector(".para");

element.addEventListener("click", () => {
  element.textContent = "THis is the updated content";
});

// Task 10

const divElement = document.querySelector(".border");

divElement.addEventListener("mouseover", () => {
  divElement.style.borderColor = "red";
});
