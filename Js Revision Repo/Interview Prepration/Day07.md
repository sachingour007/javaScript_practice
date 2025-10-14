## Q.1 What are React Hooks? Can you name a few commonly used hooks and explain what each one does briefly?

Ans: In React, Hooks are special functions that let us use state and other React features inside functional components.
For example:

useState: allows us to add and manage state in a functional component. It returns an array with two elements — the current state value and a function to update it. When we call the update function, React re-renders the component with the new value.

useEffect: allows us to perform side effects in a component — like fetching data, setting up subscriptions, or manually changing the DOM.

    If we pass an empty dependency array [], it runs only once when the component mounts.
    If we don’t pass any dependencies, it runs after every render.
    If we pass specific dependencies, it runs only when those values change.

Other common hooks include useContext, useRef, and useMemo, each serving different purposes.

## Q.2 What is the difference between useEffect and useLayoutEffect in React?

Ans: useEffect — Normal Effect Hook

    Runs after the component has rendered and the browser has painted the UI on screen.
    It’s asynchronous and doesn’t block the browser from updating the screen.
    Example use cases:
        Fetching data
        Subscribing to events
        Logging, timers, etc.

useLayoutEffect — Synchronous Effect Hook

    Runs before the browser paints the screen — synchronously after DOM mutations but before paint.
    It can block the browser from showing updates until the effect finishes.
    Used when you need to measure the DOM or synchronously update layout before the user sees it.

## Q.3 What are props in React? How are they different from state? And can props be modified inside a child component?

Ans: In React, props are used to pass data from a parent component to a child component.
Props can be of any type — string, number, object, array, or even a function.
They are read-only, which means a child component cannot modify props; it can only use them.

On the other hand, state represents data that is managed within a component itself.
When the state changes, React automatically re-renders the component to reflect the updated data.

So, in short —

    Props: Used for communication between components (parent → child).
    State: Used to manage internal data within a component.


