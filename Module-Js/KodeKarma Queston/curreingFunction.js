const multiply = (a) => {
  return (b) => {
    if (b !== undefined) {
      return multiply(a * b);
    } else {
      return a;
    }
  };
};

console.log(multiply(2)(6));
