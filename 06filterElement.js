let filter = function (arr, fn) {
  return fn(arr);
};

const arr = [0, 10, 20, 30];

function fn(arr) {
  let newAns = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newAns.push(arr[i]);
    }
  }
  return newAns;
}

console.log(filter(arr, fn));

// LeetCode

/*
var filter = function(arr, fn) {
    let filteredArr = [];
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i], i)){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
    
};
*/
