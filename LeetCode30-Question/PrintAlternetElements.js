const arr = [1, 2, 3, 4, 5];

function print(arr) {
  let ans = arr[0];
  for (let i = 2; i < arr.length; i = i + 2) {
    ans = ans + " " + arr[i];
  }
  console.log(ans);
}

print(arr);
