const createCounter = function (init) {
  let ans = init || 0;
  return {
    increment: function () {
      ans++;
      return ans;
    },
    decrement: function () {
      ans--;
      return ans;
    },
    reset: function () {
      ans = init || 0;
      return ans;
    },
  };
};

const counter = createCounter(0);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.reset());
