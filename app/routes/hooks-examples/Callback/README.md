# Definition

Caches a function definition between re-renders.

- Dependancy List: React will compare each dependency with its previous value using the `Object.is` comparison algorithm.
- React will not throw away the cached function unless there is a specific reason to do that.
- React throws away the cache if the component suspends during the initial mount.
- By default, when a component re-renders, React re-renders all of its children recursively.
- Unlike `useMemo`, it does not call the function you provide.
- a single value that’s “always new” is enough to break memoization for an entire component.
- If you forget the dependency array, useCallback will return a new function every time

Simplify implementation of `useCallback` (inside React):

```js
function useCallback(fn, dependencies) {
    return useMemo(() => fn, dependencies);
}
```

# Usage

- Skipping re-rendering of components (when you pass it as a prop to a component wrapped in `memo`).
- Optimizing a custom Hook: By wrapping any functions that it returns into `useCallback`.
- Updating state from a memoized callback.
- Preventing an Effect from firing too often. (The function is being passed is later used as a dependency of some Hook. For example, you depend on this function from `useEffect`). However, it’s even better to remove the need for a function dependency.
- If your app is like this site, and most interactions are coarse (like replacing a page or an entire section), memoization is usually unnecessary. On the other hand, if your app is more like a drawing editor, and most interactions are granular (like moving shapes), then you might find memoization very helpful.
-

# Refs

- [useCallback](https://react.dev/reference/react/useCallback)

# Also

- https://en.wikipedia.org/wiki/Memoization
