function debounce(fun, delay) {
  let timeId;
  return function (...args) {
    clearTimeout(timeId);
    timeId = setTimeout(() => {
      fun.apply(this, args);
    }, delay);
  };
}
function printLog(e) {
  console.log(e.target.value, "Hello");
}

const debounced = debounce(printLog, 500);

const inputVal = document.getElementById("inputVal");
inputVal.addEventListener("input", debounced);
