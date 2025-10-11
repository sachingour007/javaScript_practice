## Q.1 What is the difference between undefined and null in JavaScript?

Ans: In JavaScript, the main difference between undefined and null is that undefined means a variable has been declared but hasn’t been assigned any value yet — it’s the default state.
On the other hand, null is an intentional absence of value — it’s something we explicitly assign to indicate “no value.”

## Q.2 What is the difference between == and === in JavaScript?

Ans: So, the major difference between double equals (==) and triple equals (===) is that double equals performs loose equality.
Loose equality means the JavaScript engine automatically converts one operand’s type to match the other before comparison.
For example:
1 == "1" → true (because the string "1" is converted to number 1 before comparison).
On the other hand, triple equals performs strict equality, meaning it compares both value and type without any type conversion.
For example:
1 === "1" → false (because one is a number and the other is a string).

## Q.3 Question 3: What is the difference between var, let, and const in JavaScript, and how do they behave in terms of scope and hoisting?

Ans; In JavaScript, var, let, and const are used to declare variables, but they behave differently in terms of scope, re-declaration, and hoisting.

var is function-scoped. It can be re-declared and re-assigned. Variables declared with var are hoisted, and their value is set to undefined before initialization, so we can access them before declaration (though it’s not recommended).

let and const are block-scoped.

let can be re-assigned but cannot be re-declared in the same scope.

const cannot be re-assigned or re-declared; its value remains constant.

Although both let and const are also hoisted, they are placed in the Temporal Dead Zone (TDZ) until they are initialized. That’s why we cannot access them before their declaration.
