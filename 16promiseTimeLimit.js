var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((delayresolve, reject) => {
      const timeOutId = setTimeout(() => {
        clearTimeout(timeOutId);
        reject("Time Limit Exceeded");
      }, t);

      fn(...args)
        .then((result) => {
          clearTimeout(timeOutId);
          delayresolve(result);
        })
        .catch((error) => {
          clearTimeout(timeOutId);
          reject(error);
        });
    });
  };
};

const limited = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};
let t = 50;

const ans = timeLimit(limited, t);
console.log(ans(5));
