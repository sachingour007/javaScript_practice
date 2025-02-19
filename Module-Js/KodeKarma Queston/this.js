let user = {
  name: "Alice",
  age: 30,
  details: function () {
    console.log(`${this.name} is ${this.age} years old.`);
  },
};

let admin = {
  name: "Bob",
  age: 40,
};

user.details.call(admin);
