// Activity 1
// Task 1 & 2
{
  /*
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Welcome! My Name is: ${this.fullName} and Age is: ${this.age} `;
  }
  updateAge() {
    this.age += 1;
  }
  static genericGreeting() {
    return `Hi, this is a generic greeting from the person class.`;
  }
}

const person1 = new Person("Tayyab", "Khan", 23);
console.log(person1.fullName);
person1.fullName = "Muhammad Ali";
console.log(person1.fullName);
console.log(person1.updateAge());
console.log(person1.greeting());

// Activity 2
// Task 3 & 4

class Student extends Person {
  static studentCount = 0;
  constructor(firstName, lastName, age, StudentId) {
    super(firstName, lastName, age);
    this.StudentId = StudentId;
    Student.studentCount++;
    console.log(`total number of students: ${Student.studentCount}`);
  }

  getStudentId() {
    return `The student id is ${(this.StudentId = this.StudentId)}`;
  }
  greeting() {
    return `${super.greeting()} and studentId is ${this.StudentId} `;
  }
}

const student1 = new Student("Tayyab", "Khan", 24, "1234-tg");
const student2 = new Student("Tayyab", "Khan2", 25, "1234-tm");

console.log(student1);
console.log(student2);

// console.log(student1);
// console.log(student1.getStudentId());
// console.log(student2.getStudentId());
// console.log(student1.updateAge());
// console.log(student1.greeting());

// Activity 3

// Task 5 & 6
// You can find the Task 5 & 6 completed in the above code
console.log(Person.genericGreeting());

// Activity 4
// You can find the Task 7 & 8 completed in the above code
*/
}

// Activity 5
// Task 9 && 10

class Account {
  #balance;

  constructor(intialBalance) {
    this.#balance = intialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`${amount} deposited. New balance is ${this.#balance} `);
    } else {
      console.log("deposited amount must be positive");
    }
  }
  withdraw(amount) {
    if (amount > 0 && amount < this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
    } else if (amount > this.#balance) {
      console.log("insufficient balance");
    } else {
      console.log("withdrawal amount must be positive");
    }
  }
  getBalance() {
    return this.#balance;
  }
}

const myAccount = new Account(100);
console.log(myAccount);
console.log(myAccount.deposit(100));
console.log(myAccount.withdraw(100));
console.log(myAccount.deposit(-20));
console.log(myAccount.getBalance());
