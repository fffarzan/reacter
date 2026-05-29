- Explain what happens when setState is called in React?
  When setState is called in React:

State update: It updates the component's state, triggering a re-render of the component
Batching: React may batch multiple setState calls into a single update for performance optimization
Re-render: React re-renders the component (and its child components if needed) with the new state
Asynchronous: State updates may be asynchronous, meaning React doesn't immediately apply the state change; it schedules it for later to optimize performance
Example:

```js
function Counter() {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1); // Calls setState to update state
    };

    return <button onClick={increment}>Count: {count}</button>;
}
```

In this example, calling setState (via setCount) triggers a re-render with the updated count.
