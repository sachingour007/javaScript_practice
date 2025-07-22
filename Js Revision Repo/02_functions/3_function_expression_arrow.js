const sum = (a, b) => {
  return a + b;
};

console.log(sum(10, 5));

const thisVal = () => {
  console.log(this);
};

thisVal();

const argVariable = (...arg) => {
    console.log(arg);
    
}

argVariable(1,2,3)


/**
 * Arrow function not have own this context, it always takes from sorounding value of this.
 * arrow function cannot assess the argument object, we can use only by rest paramenters
 */
