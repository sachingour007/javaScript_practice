// const date = Date.now();
// console.log(date);
// const today = new Date(date);
// console.log(today);

async function sleep(millis) {
  await new Promise((reject, resolve) => {
    setTimeout(() => {
      if (millis) {
        resolve(millis);
      } else {
        reject("Promise Failed");
      }
    }, millis);
  });
}

sleep(200)
  .then((r) => console.log(r))
  .catch((e) => console.log(e));
