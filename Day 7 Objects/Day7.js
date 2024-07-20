// Activity 1

// Task 1

const book = {
  title: "kariju",
  author: "heko",
  year: 1997,
  bookMisc: function () {
    return `Title: ${this.title}, Author: ${this.author}`;
  },
  updatedYear: function (year = 1994) {
    this.year = year;
    return year;
  },
};
console.log(book);

// Task 2
console.log(book["title"], book.author);

// Activity 2
// Task 3
console.log(book.bookMisc());

// Task 4
console.log(book.year);
console.log(book.updatedYear());
console.log(book.year);

// Activity 3
// Task 5
const library = {
  name: "hinoy",
  books: [
    {
      title: "kariju",
      author: "heko",
      year: 1997,
    },
    {
      title: "bangu",
      author: "chalio",
      year: 1991,
    },
    {
      title: "buttany",
      author: "salio",
      year: 1980,
    },
  ],
  bookDetails: function () {
    // return `books Title: ${this.books.map(
    //   (items) => items.title
    // )} and books year: ${this.books.map((items) => items.year)} `;

    const details = this.books
      .map((item) => `Title: ${item.title}, Year: ${item.year}`)
      .join(" | "); // Join the details with ' | ' separator

    return `Books Details: ${details}`;
  },
};

console.log(library);

// Task 6

console.log(
  library.name,
  library.books.map((book) => book.title)
);

// Activity 4:
console.log(library.bookDetails());

// Activity 5
// Task 8

for (const items in book) {
  console.log(`${items}: ${book[items]}`);
}

// Task 9
console.log("Keys and values");
const key = Object.keys(book);
const values = Object.values(book);
console.log("The keys are " + key + " and the values are " + values);
