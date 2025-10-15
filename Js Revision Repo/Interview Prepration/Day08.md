## Q.1 In React, what is the difference between useMemo and useCallback hooks? When would you use each in a real project?

Ans: In React, both useMemo and useCallback are used for performance optimization.

    useMemo memoizes the result of a function. It helps when we have expensive calculations — React will re-run that function only when its dependencies change.
    const value = useMemo(() => heavyCalculation(a, b), [a, b]);

    useCallback memoizes the function itself.It’s useful when we pass functions as props to child components — so that the child doesn’t re-render unnecessarily.
    const handleClick = useCallback(() => setCount(c => c + 1), []);

## Q.2 What are controlled and uncontrolled components in React, and when would you use each?

Ans: In React, controlled components are the ones where form data is handled by the React state. For example, the value of an input is controlled by the component’s state, and changes happen through event handlers like onChange.

Uncontrolled components, on the other hand, rely on the DOM itself to manage their state. We usually use refs (via useRef) to directly access and manipulate the input value.

Controlled components are preferred when we need to validate or track input changes in real-time, while uncontrolled components are useful for simpler forms or when we don’t need to re-render on every change.

## Q.3What is React.memo and how does it help with performance optimization? Can you also explain how it differs from useMemo and useCallback?

Ans: In React, React.memo is a higher-order component that helps in performance optimization by preventing unnecessary re-renders of a functional component. When we wrap a component with React.memo, React will compare its previous props with the new props — and if they are the same, it skips re-rendering that component.

It’s mainly useful when a component receives props from its parent but doesn’t need to re-render every time the parent updates.

Difference from useMemo and useCallback:

    React.memo is used to memoize an entire component.
    useMemo memoizes a computed value or result inside a component.
    useCallback memoizes a function reference to prevent unnecessary re-creations.
