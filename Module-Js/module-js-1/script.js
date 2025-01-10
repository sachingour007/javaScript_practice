/* Variable */

//primitive data type
var num = 123; //number
let jhon = "i am jhon";
let hello = "hi"; //string
let isStudent = true; //Boolean
let ab; //undefined
console.log(num, jhon, hello, isStudent, ab);
console.log(typeof ab);

//Non primitive Data type
const user = [1, 2, 3, 4, 5];
console.log(user[0], user);
const id = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(id);

//String Methods

let alfa = "Yes I am Alfa";
// let newAlfa = alfa.slice(0, -6); It take the negative values.
// let newAlfa = alfa.substring(0, 5); //similer to slice but not take the nagetive values;
let newAlfa = alfa.indexOf("a"); //give index of first find element.

console.log(newAlfa);
