# useDeferredValue

It's for the time that you haven't control over the `setState`. For example your state comes from "above". You can't put your `setState` inside of `startTransition`.

- You have to use memoization for child comps to get any benefits.
- `useTransition` in better in performance in compare to `useDeferredValue`
