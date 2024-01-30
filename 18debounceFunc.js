/**
 * Debouncing => 
 */


function debounce(fun, timeout = 300) {
  let timer;
  return (...args) => {
    console.log(...args);
    console.log("1");
    
    clearTimeout(timer);

    console.log("1.5");

    timer = setTimeout(() => {
      console.log(timer);
      console.log("2");
      console.log(this, args);
      fun.apply(this, args);
    }, timeout);
  };
}

function saveInput() {
  console.log("Saving data");
}

const processChange = debounce(saveInput);
console.log(processChange);
