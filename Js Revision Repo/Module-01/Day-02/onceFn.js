function onceFn(fn) {
  let flag = false;
  let result;
  return function (...args) {
    if (!flag) {
      result = fn.apply(this, args);
      flag = true;
    }
  };
  return result;
}

function doNothing() {
  return undefined;
}

let count = 0;
function someTimesThrows(){
    if(count === 0){
        count++
        throw new Error("oops!")
    }
    return "success"
}

const returnFn = onceFn(doNothing);
console.log(returnFn());

