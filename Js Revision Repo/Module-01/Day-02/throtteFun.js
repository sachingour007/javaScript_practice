function throttleFun(fun, delay) {
  return function throttal(...args) {
    setTimeout(() => {
      fun.apply(this, args);
    }, delay);
  };
}

function counter(num) {
  console.log(num);
  num++;
}

const throttal = throttleFun(counter, 2000);

const btn = document.getElementById("btn");
btn.addEventListener("click", () => throttal(5));
