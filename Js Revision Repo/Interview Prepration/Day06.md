## Q.1 Can you explain the difference between deep copy and shallow copy in JavaScript — and also tell me some ways to create a deep copy of an object?

Ans:

## Q.2 Can you explain the difference between controlled and uncontrolled components in React? Also, when would you prefer one over the other in a real-world scenario?

Ans: Controlled components are those where the form data is handled by React state.

    =>Example: You use useState to store the input’s value and update it using onChange.
    =>The value of the input depends on React’s state, not the DOM.

    Uncontrolled components are those where the form data is handled by the DOM itself.

        =>You use ref to get the value instead of binding it to state.

    When to use:
        Controlled → When you need validation, dynamic updates, or two-way binding.
        Uncontrolled → When you just need simple, quick form access (like reading once on submit).

## Q.3 What is Virtual DOM in React and how does it improve performance compared to directly manipulating the real DOM?

Ans: The Virtual DOM is a lightweight copy of the real DOM that React keeps in memory.
Whenever a component’s state or props change, React updates the Virtual DOM first — not the real DOM directly. Then, React uses a process called reconciliation, where it compares the new Virtual DOM with the previous one using the diffing algorithm to detect what exactly has changed.

After identifying only the changed parts, React efficiently updates those parts in the real DOM instead of re-rendering the whole UI.

This approach improves performance because real DOM operations are costly, while updating the Virtual DOM in memory is much faster.
