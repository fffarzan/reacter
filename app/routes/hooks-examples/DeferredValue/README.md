# useDeferredValue

It defers updating a part of the UI.

Initial Value (second option of the hook): A value to use during the initial render of a component.

Return: During the initial render, the returned deferred value will be the `initialValue`. During updates, React will first attempt a re-render with the old value, and then try another re-render in the background with the new value (so it will return the updated value).

Usage: During the initial render, the deferred value will be the same as the value that provided.

It's for the time that you haven't control over the `setState`. For example your state comes from "above". You can't put your `setState` inside of `startTransition`.

- You have to use memoization for child comps to get any benefits.
- `useTransition` in better in performance in compare to `useDeferredValue`



### Notes

- When an update is inside a `Transition`, `useDeferredValue` always returns the new `value` and does not spawn a deferred render, since the update is already deferred.
- The values you pass to `useDeferredValue` should either be primitive values (like strings and numbers) or objects created outside of rendering. If you create a new object during rendering and immediately pass it to `useDeferredValue`, it will be different on every render, causing unnecessary background re-renders.

