let num = 5;

function createScoreTracker(n) {
  let newVal = n;
  return function tracker() {
    return newVal++;
  };
}

const track = createScoreTracker(num);
console.log(track());
console.log(track());
console.log(track());
