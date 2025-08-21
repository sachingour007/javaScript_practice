//Translate border-left-width to borderLeftWidth
let str = "background-color";

function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}
// console.log(camelize(str));

//Filter range

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  const newArr = arr.filter((el) => el >= 1 && el <= b);

  return newArr;
}

let filtered = filterRange(arr, 1, 4);
console.log(filtered);
