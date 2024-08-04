class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`Welcome Name: ${this.name} and Age: ${this.age} `);
  }
}

const person1 = new Person("Khan", 23);
console.log(person1.greeting());
