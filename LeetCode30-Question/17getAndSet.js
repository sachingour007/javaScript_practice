/***
 * JavaScript Getter and Setter
 * In JS two type of object Properties:
 * 01. Data Properties
 * 02. Accessor Properties
 *
 *
 */

/**
 * Data Properties
 */

const student = {
  //data property
  firstName: "Namo",
};

/**
 * get - to define a getter method to get the property value
 * set - to define a setter method to set the property value
 *  Note: To create a getter method, the get keyword is used.
 */

/*
const studentOne = {
  firstName: "meena",
  get getName() {
    return this.firstName;
  },
};

//accessing data property
console.log(studentOne.firstName); //meena

//accessing getter methods
console.log(studentOne.getName); //meena

//trying to access as a method
console.log(studentOne.getName()); //error
*/
/**
 * Setter method
 * In JavaScript, setter methods are used to change the values of an object.
 *
 *
 */

const studentTwo = {
  firstName: "hello",
  set changeName(newname) {
    this.firstName = newname;
  },
};

console.log(studentTwo.firstName);

// change(set) object property using a setter
studentTwo.changeName = "world";

console.log(studentTwo.firstName);

const teacher = {
  fName: "Ramu",
};

//Getting property
Object.defineProperty(teacher, "getName", {
  get: function () {
    return this.fName;
  },
});

//Setting Property
Object.defineProperty(teacher, "changeName", {
  set: function (value) {
    this.fName = value;
  },
});

console.log(teacher.fName);

teacher.changeName = "NewNameSachin";

console.log(teacher.getName);
