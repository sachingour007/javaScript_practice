// Counter Function

function counterFunc() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

// const ab = counterFunc();
// console.log(ab());
// console.log(ab());
// console.log(ab());
// console.log(ab());

function sum(a, b, c) {
  return a + b + c;
}
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

const curriedSum = curry(sum);
const abc = curriedSum(1,2,3);
console.log(abc);

