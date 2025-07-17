const arr = [1, 2, 3, 4];

function RepeatNumber(arr) {
  const resultObj = {};

  for (let key in arr) {
    const aNum = arr[key];
    if (resultObj[aNum]) {
      return true;
    } else {
      resultObj[aNum] = true;
    }
  }
  console.log(resultObj);

  return false;
}

console.log(RepeatNumber(arr));
