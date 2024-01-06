function createCounter(n) {
  let nValue = n;
  return function () {
    return nValue++;
  };
}
const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());


// Here we use the concept of Clouser.