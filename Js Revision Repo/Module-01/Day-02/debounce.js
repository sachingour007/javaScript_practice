function debounce(fun, delay) {
  let timeId;
  return function (...args) {
    console.log("clear befor");
    clearTimeout(timeId);
    console.log("clear after");
    timeId = setTimeout(() => {
      fun.apply(this, args);
      console.log("function run");
    }, delay);
  };
}
function printLog(e) {
  console.log(e.target.value, "Hello");
}

const debounced = debounce(printLog, 500);

const inputVal = document.getElementById("inputVal");
inputVal.addEventListener("input", debounced);
