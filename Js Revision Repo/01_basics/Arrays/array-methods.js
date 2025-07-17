// Methods With HOF

const arr = [2, 4, 6, 8, 10];

//Map Function => Its itreate the array of each element and return the new array not modifiy the old.
const newArr = arr.map((n) => (n === 2 ? n * 2 : n));
console.log(newArr);

//Filter Function => Its itrate the array of each element, filter and return  specific element from whole array.

const filterArr = arr.filter((n) => n === 2);
console.log(filterArr);

//Reduce method => // Reduce method => its same itrate the array of each element, but returns the single digit or sum of element its take 2 arguments 1. element 2. accumalator
const reduceArr = arr.reduce((acc, n) => {
  return acc + n;
}, 0);
console.log(reduceArr);

// forEach Method => not return the new value it help use to itrate the array.
arr.forEach((element) => {
  console.log(element * 2);
});

for (let val of arr) {
  console.log(val - 2);
}

