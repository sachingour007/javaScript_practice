const arr = [200, 100, 300];

function fn (arr){
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        newArr.push(arr[i]+1)
    }
    return newArr
}

let map = function (arr, fn) {
  return fn(arr);
};

console.log(map(arr,fn));
console.log(map(arr,fn));

