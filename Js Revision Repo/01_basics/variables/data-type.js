//String

let name = "Sachin";

// number

let age = 20;

// Boolean
let flag = true;

//null

let val = null;

//Undefine

let a;

//Symbol

// Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object.

let sym = Symbol("sach");

// Non-Primitive Data Type

// Object

const data = {
  name: "saching",
  age: 25,
  greet: function () {
    console.log(`Hello ${this.name}`);
    console.log(this);
  },
};

data.greet();

const arr = [1, 2, true, "ssa"];
