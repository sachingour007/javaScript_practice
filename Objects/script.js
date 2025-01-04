/*
const obj1 = {
  name: "sach",
  lastName: "gour",
  city: "mumbai",
};
for (let key in obj1) {
  console.log(key);
}

const obj2 = {
  name: "sach",
  lastName: "gour",
  city: "mumbai",
};

console.log(obj1);
console.log(obj2);

console.log(obj1 === obj2);

delete obj2.city;

console.log(obj2);

console.log("city" in obj1);

const salaries = {
  // jhon: 100,
  // ann: 160,
  // pete: 130,
};

function sum(obj) {
  let ansSum = 0;

  if (Object.keys(obj).length === "0") {
    return ansSum;
  }

  for (const key in obj) {
    ansSum += obj[key];
  }
  console.log(ansSum);

  
  for (const key in obj) {
    console.log(obj[key]);
  }
  console.log(Object.values(obj)); //access the Value of Obj and return an Array.
  console.log(Object.keys(obj)); //access the Keys of Obj and return an Array.
}
*/

/*
sum(salaries);

const person = {
  name: "hero",
};

const permission1 = { canview: true };
const permission2 = { canEdit: true };

const newObject = Object.assign(person, permission1, permission2);

console.log(newObject);

const arr = [1, 11, 12, 11, 11, 12];

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let uniqueCount = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      uniqueCount.push(arr[i]);
    }
  }
  return uniqueCount;
}
const ans = countUniqueValues(arr);
console.log(ans);

const user = {
  name: "happy",
  city: "mumbai",
  mbo: 123456,
};

console.log(user);

const furit = ["hello", "hi", "hello"];
const reult = furit.pop();
console.log(reult);

const ind = furit.indexOf(2);
console.log(ind);

const aa = ["a", "b"];
const bb = ["c", "d"];
const newArr = aa.concat(bb);
*/

// const num = [2, 8, 69, 7, 5];
// const newNum = num.sort((a, b) => b - a);

// console.log(newNum);


