## Q.1 What is the difference between useEffect and useLayoutEffect?

Ans: useEffect : runs after the UI is painted, so it does not block the rendering.
We use it for normal side effects like API calls, logging, or setting up listeners.

useLayoutEffect: runs before the UI is painted. It blocks the screen until its
work is done. We use it when we need to read or modify DOM layout

## Q.2 What is the difference between useReducer and useState?

Ans: useState and useReducer are both used for state management in React, but they are used in different situations:

1. Feature => useState for Simple ui , useReducer for complex state UI
2. State update Sytle => Direct: setState(newValue) , Uses dispatch(action)
3. logic => useState Inside the component, useReducer Centralized in the reducer function
4. Recommended when => useState Few state updates and simple transitions , useReducer Multiple related state updates or complex conditions

useState is easy to use and ideal when you have simple and independent states.

useReducer is preferred when:

-State is complex (multiple properties),
-Updates depend on the previous state
-The logic is centralized, like in Redux.
