# Why

Creating state for the result of an **Action**.

- permalink?: A string containing the unique page URL that this form modifies.
  For use on pages with RSCs with progressive enhancement.
  If `reducerAction` is a Server Function and the form is submitted before the JS bundle loads, the browser will navigate to the specified permalink URL rather than the current page’s URL.

- `dispatchAction` must be called from an Action. You can wrap it in `startTransition`, or pass it to an `Action prop`.

# Refs

- [useActionState](https://react.dev/reference/react/useActionState)

### continue

- https://react.dev/reference/react/useTransition#functions-called-in-starttransition-are-called-actions
