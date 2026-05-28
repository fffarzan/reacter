# Examples

- Using useEffect to derive state from props (compute it during render instead).

```js
// Anti-pattern
function Cart({ items }) {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(items.reduce((sum, i) => sum + i.price, 0));
    }, [items]);

    return <div>{total}</div>;
}

// Correct
function Cart({ items }) {
    const total = items.reduce((sum, i) => sum + i.price, 0);

    return <div>{total}</div>;
}
```

- Stale closures inside effects (missing or wrong dependencies).

```js
// Anti-pattern — effect closes over `count` but doesn't depend on it
useEffect(() => {
    const id = setInterval(() => {
        console.log(count); // always logs the initial value
    }, 1000);

    return () => clearInterval(id);
}, []);

// Correct — depend on `count`, or use a functional updater
useEffect(() => {
    const id = setInterval(() => {
        console.log(count);
    }, 1000);

    return () => clearInterval(id);
}, [count]);
```

- Effects with missing or stale dependencies.
- Forgetting to clean up effects (subscriptions, timers, listeners).

# Sources

[what are some react anti patterns](https://www.greatfrontend.com/questions/quiz/what-are-some-react-anti-patterns)