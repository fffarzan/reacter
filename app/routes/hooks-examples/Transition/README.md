# useTransition

When we want to have a lower priority to change a specific state in compare to other states.

# Caveats

- This hook makes more rendering of the component because it separates some more rendering for the specific states.

# Why

Renders a part of the UI in the background.

You can wrap an update into a Transition only if you have access to the set function of that state. If you want to start a Transition in response to some prop or a custom Hook value, try `useDeferredValue` instead.

- Transition updates can’t be used to control text inputs.
- If there are multiple ongoing Transitions, React currently batches them together.

A state update marked as a Transition will be interrupted by other state updates. For example, if you update a chart component inside a Transition, but then start typing into an input while the chart is in the middle of a re-render, React will restart the rendering work on the chart component after handling the input update.

A Transition can include multiple Actions.

the `isPending` state switches to true at the first call to startTransition, and stays true until all Actions complete and the final state is shown to the user.

you can provide immediate feedback while the Transition is in progress with `useOptimistic`.

# `startTransition`

Lets you mark updates as a Transition. It does not return anything. lets you render a part of the UI in the background

Action: The function called in it (the name is action or with 'action' suffix). Updates some state by calling one or more `setState`s.

State updates marked as Transitions will be **non-blocking**. The function you pass to startTransition is called immediately, marking all state updates that happen while it executes as Transitions.

startTransition does not provide a way to track whether a Transition is pending. To show a pending indicator while the Transition is ongoing, you need useTransition instead.

The function you pass to startTransition is called immediately, marking all state updates that happen while it executes as Transitions. If you try to perform state updates in a setTimeout, for example, they won’t be marked as Transitions.

A state update marked as a Transition will be interrupted by other state updates. For example, if you update a chart component inside a Transition, but then start typing into an input while the chart is in the middle of a re-render, React will restart the rendering work on the chart component after handling the input state update.

Transition updates can’t be used to control text inputs.

If there are multiple ongoing Transitions, React currently batches them together. This is a limitation that may be removed in a future release.

For example, startTransition works outside components, such as from a data library.

# usage

- non-blocking updates
- exposed props non-blocking update
- Building a Suspense-enabled router

### continue

- https://react.dev/reference/react/useTransition#perform-non-blocking-updates-with-actions

When exposing an action prop from a component, you should await it inside the transition (to be either synchronous or asynchronous).

If you’re building a React framework or a router, we recommend marking page navigations as Transitions. Suspense-enabled routers are expected to wrap the navigation updates into Transitions by default.

- Transitions are interruptible,
- Transitions prevent unwanted loading indicators,
- Transitions wait for all pending actions

The function you pass to startTransition must be synchronous. You can’t mark an update as a Transition like this

```jsx
startTransition(() => {
    // ❌ Setting state *after* startTransition call
    setTimeout(() => {
        setPage('/about');
    }, 1000);
});

setTimeout(() => {
    startTransition(() => {
        // ✅ Setting state *during* startTransition call
        setPage('/about');
    });
}, 1000);
```

the state updates that happen after the await are not marked as Transitions. You must wrap state updates after each await in a startTransition call. This is a JavaScript limitation due to React losing the scope of the async context. In the future, when AsyncContext is available, this limitation will be removed. https://github.com/tc39/proposal-async-context

```jsx
startTransition(async () => {
    await someAsyncFunction();
    // ❌ Not using startTransition after await
    setPage('/about');
});

startTransition(async () => {
    await someAsyncFunction();
    // ✅ Using startTransition *after* await
    startTransition(() => {
        setPage('/about');
    });
});
```

It is expected to print 1, 2, 3. The function you pass to startTransition does not get delayed. Unlike with the browser setTimeout, it does not run the callback later. React executes your function immediately, but any state updates scheduled while it is running are marked as Transitions.

```jsx
console.log(1);
startTransition(() => {
    console.log(2);
    setPage('/about');
});
console.log(3);

// prints 1, 2, 3

// A simplified version of how React works
let isInsideTransition = false;

function startTransition(scope) {
    isInsideTransition = true;
    scope();
    isInsideTransition = false;
}

function setState() {
    if (isInsideTransition) {
        // ... schedule a Transition state update ...
    } else {
        // ... schedule an urgent state update ...
    }
}
```

- https://react.dev/reference/react/useTransition#my-state-updates-in-transitions-are-out-of-order

# Refs

- [useTransition](https://react.dev/reference/react/useTransition)
- [startTransition](https://react.dev/reference/react/startTransition)

---
