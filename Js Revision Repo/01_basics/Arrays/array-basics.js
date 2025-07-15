const arr = [1, 2, 3, 4, 5];
console.log(arr);

//Push method add the element in last
arr.push(6);

//Pop method remove the element from last
arr.pop();

//add the element from start

arr.unshift(5);

//remove the element from start
arr.shift();

// console.log(arr);

const newArr = [1, 2, 3, 4, 5];

// Splice Method => Splice method give the new array but modify the orignal array also. work till the second arguments.

const modifyArr = newArr.splice(1, 3);
console.log(modifyArr, newArr);

// Slice Method => Slice method not modify the orignal array and work only less then second arguments.
const sliceArr = newArr.slice(1, 2);
console.log(sliceArr, newArr);

const joinArr = [2, 3, 4];

// Join Method => Joins all elements of an array into a string.
const joinA = joinArr.join("/");
console.log(joinA);

const reverseArry = joinArr.reverse();
console.log(reverseArry);

//Some Function => if at least one element find in the array it will retrur true, its return true and false only
const someFun = joinArr.some((n) => n === 2);
console.log(someFun);

const list = [2, 4, 6, 8, 10];

//Every Function => if all parameter pass in array then it will return ture otherwise return flase
const everyFunc = list.every((n) => n === 2);
console.log(everyFunc); // Return false becase all case not pass.

const result = list.every((n) => n % 2 === 0);
console.log(result); // true becase all case pass ho gye

let listTwo = "sachin";
//Array.from => Creates a new array from an array-like or iterable object.
const listArr = Array.from(listTwo);
console.log(listArr);

let nestedArry = [1, 2, [3, 4, [5, 6]]];
// flat method => it helps to flat the array with nested level we can pass nestest level as arguments
const newFlatArray = nestedArry.flat(Infinity);
console.log(newFlatArray);
