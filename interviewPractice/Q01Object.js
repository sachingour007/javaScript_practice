// 01. What are the possible ways to create objects in JavaScript.

// 01. Object Literal

let obj = {
  name: "sachin",
  age: 26,
};

console.log(obj.name);

// 02. Object Constructor

const obj2 = new Object({
  name: "sachin",
  age: 26,
});

console.log(obj2);

// 03. Object.create

const personDetails = {
  isHuman: false,
};

const person = Object.create(personDetails);
person.name = "sachin";
person.isHuman = true;

console.log(person);
/**
 * Object.create method ceate a new object and pass object in prototype and we can set the new value and update but not modified the orignal object.
 */


// 04. Class Constructor

