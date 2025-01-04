/**
 * Polyfill:
 *
 * polyfill we write the code as per support to old browser that we called polyfill.
 *
 */

const num = [2, 4, 6, 8];
/***
 * first what will do out map function
 * map function take one arr and our callback function
 * decalare new variable and assigne it to empty array
 * initiate a for loop that will iterate through the array and invoke the callback function with the values of array[i] being passed to it within the for loop
 * push that evaluated result into the new array,
 * return the new array,
 */

function map(arr, twoSum) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(twoSum(arr[i]));
  }
  return newArr;
}
function twoSum(num) {
  return num + 2;
}

const ab = map(num, twoSum);
console.log(ab);
console.log(num);
