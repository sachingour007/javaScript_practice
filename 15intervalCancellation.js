var cancellable = function (fn, args, t) {
  fn(...args);
  let timer = setInterval(() => fn(...args), t);

  let cancelFn = () => clearInterval(timer);

  return cancelFn;
};

function func(x) {
  return x * 2;
}
const args = [4];

let time = 35;

const ans = cancellable(func, args, time);
console.log(ans);
