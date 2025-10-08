## Q.1 What is the difference between execution context and lexical environment in JavaScript. Explain it clearly, maybe with a small example if you can.

Ans:- 

A. Execution Context

1. It’s the environment where JavaScript code is executed.

2. Every time a function runs, a new execution context is created.

    It has two phases:

    * Memory Creation Phase → JS allocates memory for variables and functions.
      (Variables = undefined, Functions = full definition)

    * Execution Phase → Code runs line by line, and variables get actual values.

B. Lexical Environment

    1. It defines where a variable or function is physically present in the code.

    2. It’s created along with the execution context.

    It has:

    * Environment Record → stores variable/function references.

    * Outer Environment Reference → points to parent scope (for scope chain).

## Q.2 What is closure in JavaScript? Can you explain how it works internally and give a real-world example where closures are useful?

Ans: A closure in JavaScript is created when an inner function remembers and can access variables from its outer function’s scope, even after that outer function has finished executing.

Internally, when a function is defined, JavaScript stores a reference to its lexical environment — that’s what forms the closure.

Closures are often used for data privacy, like implementing private variables, or for function factories where you maintain state across function calls.”

## Q.3 Can you explain how the this keyword works in JavaScript in different contexts (for example: global scope, inside a regular function, inside an arrow function, and inside an object method)?

Ans. In JavaScript, this refers to the object that is currently executing the function — but its value depends on how and where the function is called.

1️⃣ In the global scope, this refers to the window object in browsers (or global in Node).

2️⃣ Inside a regular function, this also refers to the window (in non–strict mode) or undefined (in strict mode).

3️⃣ Inside an object method, this refers to the object that owns the method.

4️⃣ In an arrow function, this doesn’t create its own context — it simply lexically inherits this from the parent scope.

## Q.4 What is the difference between call, apply, and bind methods in JavaScript? Explain their purpose, how they handle this, and give a small example of each.

Ans- call – comma (arguments individually)
apply – array (arguments in array form)
bind – back later (returns a function to call later)


## Q.5 Can you explain how JavaScript handles asynchronous code under the hood? Walk me through the event loop, call stack, Web APIs, and callback queue — and tell me why promises and async/await are considered improvements over callbacks.

Ans: JavaScript is single-threaded and synchronous by default, meaning it can execute one task at a time on the call stack.

When asynchronous code (like setTimeout, fetch, or event listeners) runs, these tasks are handed off to the Web APIs provided by the browser.

Once those async tasks finish, their callbacks are placed into the callback queue (for setTimeout, events, etc.) or microtask queue (for Promises and async/await).

The event loop constantly checks if the call stack is empty. If it’s empty, it pushes queued callbacks or microtasks into the stack for execution.

Promises and async/await improve async handling because they make code more readable, chainable, and error-handled — avoiding the messy “callback hell.”



## Tips for Interview

Pro Tips to Improve for Next Mock:

Structure answers in 3 parts:

Concept → How it works → Example

Use tiny code snippets in your explanation — this impresses interviewers.

Practice short, crisp definitions first, then expand verbally with examples.

Focus on microtasks vs macrotasks and lexical environment vs execution context distinctions — these are commonly asked tricky questions.