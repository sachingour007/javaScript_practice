## Q.1 Can you explain what a closure is in JavaScript, how it works internally, and give a real-life use case where you might need it?

Ans:

## Q.2 Can you explain the difference between synchronous and asynchronous JavaScript, and how JavaScript handles asynchronous operations internally?

Ans: JavaScript is a single-threaded, synchronous language, meaning it executes code line by line.
Asynchronous tasks, like API calls, setTimeout, or Promises, are handled differently.
When JS encounters an async task, it sends it to the browser Web APIs, which process it in the background. Once completed, tasks are queued — Promises in microtask queue, others in callback queue.
The event loop continuously checks the call stack; when it’s empty, it pushes queued tasks into the stack for execution. This mechanism allows JavaScript to handle async operations without blocking the main thread.

## Q. 3 Can you explain the difference between callbacks, Promises, and async/await in JavaScript?

    => When would you use each?
    => What are the pros and cons of each approach?

Ans: A callback is a function passed as an argument to another function and executed later. Callbacks are simple but can lead to callback hell in complex async code.
A Promise represents a value that may be available now, later, or never. It has three states: pending, fulfilled, or rejected. Promises improve readability and avoid deeply nested callbacks.
Async/await is syntactic sugar over Promises. It allows writing asynchronous code in a synchronous style, making it easier to read and maintain.
Use cases:

    1. Callbacks: simple async tasks or event listeners.
    2. Promises: multiple async tasks with chaining.
    3. Async/await: complex async logic that requires sequential execution or error handling.

I
