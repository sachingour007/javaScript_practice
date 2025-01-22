const multiply = (a) => {
  return (b) => {
    if (b !== undefined) {
      return multiply(a * b);
    } else {
      return a;
    }
  };
};

// console.log(multiply(2)(6));

const multiplyTwo = (a) => {
  return (...args) => {
    if (args.length > 0) {
      console.log(args);
      const para = args.reduce((acum, num) => acum * num, a);
      return multiplyTwo(para);
    } else {
      return a;
    }
  };
};

console.log(multiplyTwo(2)(3,4)());
