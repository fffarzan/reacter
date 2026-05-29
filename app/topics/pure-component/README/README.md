- What are Pure Components?
  Pure Components in React are components that only re-render when their props or state change. They use shallow comparison to check if the props or state have changed, preventing unnecessary re-renders and improving performance.

Class components can extend React.PureComponent to become pure
Functional components can use React.memo for the same effect

```js
const PureFunctionalExample = React.memo(function ({ value }) {
    return <div>{value}</div>;
});
```

With the React Compiler, manual memoization with React.memo, useMemo, and useCallback is rarely needed; the compiler inserts equivalent memoization automatically.
