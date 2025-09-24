// Input:
const arr = [1, [2, [3, [4]], 5]];

// Output:
// [1, 2, 3, 4, 5]

function flattenArr(arr) {
  let newArr = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      newArr = newArr.concat(flattenArr(item));
    } else {
      newArr.push(item);
    }
  }
  return newArr
}

console.log(flattenArr(arr));



//Logic

/**
 *  => First Check the Element is premitive or array
 *  => then check if premitive then push
 *  => if array then again recursive call and add in result.
 */