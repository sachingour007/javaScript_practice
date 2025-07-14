// Input: [2, 3, 4, 5, 6]
// Output: 48 (2*4*6)

const arr = [2, 3, 4, 5, 6];

function evenProduct(arr) {
  const newArr = arr.filter((el) => el % 2 === 0);
  const ans = newArr.reduce((acc, curr) => {
    return curr * acc;
  }, 1);
  return ans;
}

// console.log(evenProduct(arr));

// shuffle the array

function shuffle(arr) {
  let len = arr.length;
  const result = arr.slice();
  for (let i = 0; i < len; i++) {
    let index = Math.floor(Math.random() * i + 1);
    let temp = result[i];
    result[i] = result[index];
    result[index] = temp;
  }
  return result;
}
// console.log(shuffle(arr));

const arr1 = [1, 2, 3, 1, 1, 3];

function objectBuildForCount(arr) {
  const newObj = {};
  let counter = 0;
  for (let key of arr) {
    newObj[key] = (newObj[key] || 0) + 1;
  }

  for (keyVal in newObj) {
    let frq = newObj[keyVal];
    if (frq > 1) {
      counter += (frq * (frq - 1)) / 2;
    }
  }
  console.log(counter);
}

objectBuildForCount(arr1);
