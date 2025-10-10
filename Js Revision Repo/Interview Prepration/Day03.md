## Q.1 In JavaScript, what is the scope chain, and how does it help when accessing variables inside nested functions? Explain with an example (you can also relate it to closure).

Ans: In JavaScript, the scope chain is the process the engine uses to look up variables. When we try to access a variable, JavaScript first looks inside the current function’s local scope. If it’s not found, it checks the outer (parent) scope, and continues until it reaches the global scope. This chain of scopes formed by nested lexical environments is called the scope chain.

## Q.2 What is prototypal inheritance in JavaScript?

    =>How does it work internally?
    =>What is the role of __proto__ and prototype?
    =>Can you explain it with a small example?

Ans: In JavaScript, prototypal inheritance means objects can inherit properties and methods from other objects. Each object has an internal [[Prototype]] reference (accessible via **proto**) which points to another object, usually the constructor’s prototype.
When we use new, the newly created object’s **proto** is linked to the constructor’s .prototype, forming a prototype chain.
JavaScript’s class syntax works on top of this same prototype system.

## Q.3 Event Delegation in JavaScript ?

    =>What is event delegation?
    =>How does it work behind the scenes (in terms of event bubbling and capturing)?
    =>Why is it useful in real-world applications?
    =>Can you explain with a quick example?

Ans: Event delegation is a technique where we attach a single event listener to a parent element instead of adding separate listeners to multiple child elements.
It works because of event bubbling, where events triggered on child elements bubble up to their ancestors in the DOM tree.
Using this approach improves performance and maintainability, especially when elements are dynamically added or removed.
