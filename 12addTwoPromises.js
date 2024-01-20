// Concept Of Promise !!

let addTwoPromises = async function (promise1, promise2) {
  const value1 = await promise1;
  const value2 = await promise2;
  return value1 + value2;
};

let promiseOne = (num1) => {
  return new Promise((resolve, reject) => {
    if (resolve) {
      setTimeout(() => {
        resolve(num1);
      }, 20);
    } else {
      reject("PromiseOne Failed");
    }
  });
};

let promiseTwo = (num2) => {
  return new Promise((resolve, reject) => {
    if (resolve) {
      setTimeout(() => {
        resolve(num2);
      }, 60);
    } else {
      reject("PromiseTwo Failed");
    }
  });
};

const val = addTwoPromises(promiseOne(2), promiseTwo(5));
val.then((a) => console.log(a)).catch((e) => console.log(e));
