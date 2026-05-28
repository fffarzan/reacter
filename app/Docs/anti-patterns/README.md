# Definition

Inefficient or hard-to-maintain code.

# Examples

### Key

- Not using keys in lists, or using the array index as a `key` for reorderable lists.

### Ref

- Reading or writing refs during render (do it in effects or event handlers).
- Mutating refs during render.

```js
// Anti-pattern
function Component() {
    const ref = useRef(0);
    ref.current += 1; // side effect during render
    return <div>{ref.current}</div>;
}

// Correct
function Component() {
    const ref = useRef(0);
    useEffect(() => {
        ref.current += 1;
    });
    return <div>{ref.current}</div>;
}
```

### Memo

- Reaching for `useMemo`/`useCallback` everywhere instead of where they actually help.

### JSX

- Inline functions and objects in JSX: Defining a function or object inline (`onClick={() => doThing(id)}`, `style={{ color: 'red' }}`) creates a fresh reference each render. It only matters when the receiving child is wrapped in `React.memo`.

### Prop

- Prop drilling and the over-correction into context.

### Class component

- The older class-component anti-patterns (using componentWillMount for data fetching or relying on componentWillReceiveProps) refer to APIs that were renamed to UNSAFE and no longer apply to function-component code.

# Sources

[100 react interview questions straight from ex interviewers](https://www.greatfrontend.com/blog/100-react-interview-questions-straight-from-ex-interviewers)
[what are some react anti patterns](https://www.greatfrontend.com/questions/quiz/what-are-some-react-anti-patterns)
