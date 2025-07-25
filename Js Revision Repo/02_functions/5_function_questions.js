function sum(...args) {
  console.log(...args);

  if (args.length === 0) {
    return 0;
  }
  let numSum = 0;

  args.forEach((el) => (numSum = numSum + el));
  console.log(numSum);

  return numSum;
}

sum(5, -5, 10, 20);
