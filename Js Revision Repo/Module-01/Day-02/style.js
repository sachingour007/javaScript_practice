//Function Basic

function test(a, b) {
  console.log(arguments);
}

// test(1, 2, 3);

const test2 = (...args) => {
  console.log(args); // real array
};
// test2(1, 2, 3);


// Q1
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sum(1, 2, 3)); // 6

// Q2
function sumWithRest(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumWithRest(1, 2, 3)); // 6

// Q3
const arrowSum = (a, b) => {
  console.log(arguments);
};
arrowSum(1, 2); // undefine


// Q4
const arrowWithRest = (...args) => {
  console.log(args);
};
arrowWithRest(1, 2); //  [1,2]