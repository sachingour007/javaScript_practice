let arr = [15, 2, 3, 45, 7];

function valueEqualToIndex(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (i + 1 === arr[i]) {
      ans.push(arr[i]);
    }
  }
  console.log(ans);
}

valueEqualToIndex(arr);
