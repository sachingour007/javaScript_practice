//Hoisting is concept which enable us to extract the value of function or variable befor initilaization or assinging the value without getting error its happening due to first phase of excution context.

abc();

function abc() {
  console.log("hello");
}

console.log(ab);
var ab = 10;
console.log(ab);

//Scope

/**
 * Global Scope
 * block scope => let and const block scope variables
 * function scope => var is function scope variable
 */

let name = "raghav"; // Global scope
{
  let age = " 10"; //Block scope
}

function sum() {
  var a = 10;
}

// function scope means we use var inside anywhere in function

function sum() {
  console.log(arguments);
}

sum(1, 2, 3);
