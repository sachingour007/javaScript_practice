let reduce = function (arr, fn, init) {
  return fn(arr, init);
};

let arr = [1, 2, 3, 4];
let init = 0;
function fn(arr, init) {
  if (arr.length === 0) {
    return init;
  }
  for (let i = 0; i < arr.length; i++) {
    init += arr[i];
  }
  return init;
}

console.log(reduce(arr, fn, init));
