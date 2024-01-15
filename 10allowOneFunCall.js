let once = function (fn) {
  let usedOnce = false;
  if (!usedOnce) {
    usedOnce = true;
    return fn(1, 2, 3);
  } else {
    return undefined;
  }
};

function fn(...args) {
  let ans = 0;
  for (let i = 0; i < arguments.length; i++) {
    ans += arguments[i];
  }
  return ans;
}


const abc = once(fn);
const abc2 = once(fn);
console.log(abc);
console.log(abc2);
