const arr = [4, 2, 1, 5, 3];

function abc(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1 && arr[i] > arr[i + 1]) {
      arr[i] = arr[i + 1];
    } else {
      arr[i] = -1;
    }
  }
  return arr;
}
console.log(abc(arr));
