const sortAscending = (arr) => {
  return arr.sort((a, b) => a - b);
};

const arr = [5, 3, 10, 8];
console.log(sortAscending(arr));
