const user = {
  name: "abc",
  age: 24,
  "helo hi": true,
};

// console.log(user.helo hi); //worng way
// console.log(user["helo hi"]); //braket notationn

// let key = prompt("what do you want to know about the user?", "name");
// console.log(key);

// alert(user[key]); //dynamic take key value

const obj = {}; // =>  Object Litreal
const obj1 = new Object(); // =>  Object constructor

obj.name = "john";
obj.surname = "smith";
// console.log(obj);

obj.name = "Pete";
// console.log(obj);

delete obj.name; //delete property
// console.log(obj);

let schedule = {};

function isEmpty(obj) {
  for (let key in obj) {
    return true;
  }
  return false;
}

// console.log(isEmpty(schedule));

// => sum of all object values

const salaries = {
  jhon: 100,
  ann: 160,
  pete: 130,
};

function sumAllSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    sum = sum + salaries[key];
  }
  return sum;
}

// console.log(sumAllSalary(salaries));

// => Multiple numeric peoperty values by 2

const menu = {
  width: 200,
  height: 300,
  title: "My Menu",
};

function multipleNumeric(menu) {
  for (let key in menu) {
    if (typeof menu[key] === "number") {
      menu[key] = menu[key] * 2;
      console.log(menu[key]);
    }
  }
  return menu;
}

// console.log(multipleNumeric(menu));

// Cloning and merging, Object.assign

let userDetails = {
  name: "abhi",
  age: 30,
};

let clone = {};

for (let key in userDetails) {
  clone[key] = userDetails[key];
}

clone.name = "pete";
console.log(clone, userDetails);

// Object Method for cloing

const newClone = Object.assign({}, userDetails);

console.log(newClone);
