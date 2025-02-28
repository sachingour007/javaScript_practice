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

let num = 8261;
let ans = 0;
while (num > 0) {
 let rem = Math.floor(num % 10);
   num =Math.floor( num / 10);
  ans = ans * 10 + rem;
}
console.log(ans);
