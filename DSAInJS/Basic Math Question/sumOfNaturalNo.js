let num = 8;

function sumOfNaturalNo(num) {
  let ans = 0;
  ans = (num * (num + 1)) / 2;
  return ans;
}
console.log(sumOfNaturalNo(num));

function squareOfNaturalNo(n) {
  n = BigInt(n);
  return (n * (n + 1n) * (2n * n + 1n)) / 6n;
}

console.log(squareOfNaturalNo(10000000000));

//https://www.geeksforgeeks.org/logic-building-problems/

