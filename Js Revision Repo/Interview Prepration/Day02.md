## Q.1 In JavaScript, what is the difference between deep copy and shallow copy? Can you explain how they behave differently when objects contain nested data, and name at least two ways to create each type?
Ans: 

1. Shallow Copy: A shallow copy creates a new object, but copies references of nested objects — meaning if the original object has another object inside, both copies still point to the same inner object.
2. DeepCopy : A deep copy, on the other hand, copies everything recursively — so the original and the copy are completely independent.

Ways to create:
    Shallow copy: Object.assign(), spread operator {...obj}
    Deep copy: structuredClone(), JSON.parse(JSON.stringify(obj)), or recursion manually.



## Q.2 Explain the difference between == and === in JavaScript.
    Explain :
        What type coercion means
        Examples where they behave differently
        Which one should be preferred in real-world code
Ans: In JavaScript, the difference between == and === is that:
    == (loose equality) checks for equality after performing type coercion. That means if the values are of different types, JavaScript automatically converts one type to another before comparing.
    👉 Example: 1 == '1' → true, because the string '1' is converted to a number.

    === (strict equality) checks for equality without performing any type conversion. It compares both the value and the type.
    👉 Example: 1 === '1' → false, because one is a number and the other is a string.

    There are two kinds of coercion in JavaScript:

    Implicit coercion – done automatically by JavaScript (like 1 == '1')

    Explicit coercion – done manually by the developer (like Number('1'))

    ✅ In real-world code, we prefer using === because it avoids unexpected results caused by type coercion and makes comparisons more predictable.

## Q.3 What is Hoisting in JavaScript? Explain how hoisting works for var, let, const, and functions — with an example. 
Ans : Hoisting is a concept in JavaScript where variable and function declarations are moved to the top of their scope during the creation phase of the execution context.

In simple terms, it means we can access variables and functions before their actual line of declaration (though the behavior differs for each type).

var variables are hoisted and initialized with undefined, so we can access them before declaration but they give undefined.

let and const are also hoisted but are placed in the temporal dead zone (TDZ), which means they can’t be accessed until they are actually declared.

Function declarations are fully hoisted along with their definitions, so they can be called before their declaration in the code.

## Q.4 What is a closure memory leak in JavaScript?
    How can closures unintentionally cause memory leaks?
    How would you prevent them?
Ans: Read about it.

## Q.5 Explain currying in JavaScript:
        What it is
        How it works internally
        Why it’s useful
        Give a short code example
Ans: Currying is the process of transforming a function with multiple arguments into a sequence of functions, each taking a single argument.

Internally, currying uses closures to remember the arguments passed in earlier calls, allowing partial application of a function.

It’s useful because it lets you reuse functions, create specialized versions, and improve readability in functional programming.