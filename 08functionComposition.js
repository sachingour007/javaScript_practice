// Function Composition

const add5 = (x) => x + 5;
const multipleBy3 = (x) => x * 3;
const subtract10 = (x) => x - 10;

const compose = (...functions) => {
  return (input) => {
    return functions.reduceRight((acc, fn) => {
        console.log(fn);
      return fn(acc);
    }, input);
  };
};
const compositionFunction = compose(subtract10, multipleBy3, add5);
const result = compositionFunction(7);
console.log(result);


/*
var compose = function(functions) {
    
    return function(x) {
        return functions.reduceRight((acc,fn) => {
            return fn(acc);
        },x)
    }
};
*/