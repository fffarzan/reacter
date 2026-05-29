Note: useLayoutEffect can hurt performance. Prefer useEffect when possible.

`useLayoutEffect` is a version of `useEffect` that fires before the browser repaints the screen.

Call useLayoutEffect to perform the layout measurements before the browser repaints the screen:

Most components don’t need to know their position and size on the screen to decide what to render. They only return some JSX. Then the browser calculates their _layout_ (position and size) and repaints the screen.

- The code inside `useLayoutEffect` and all state updates scheduled from it **block the browser from repainting the screen.** When used excessively, this makes your app slow. When possible, prefer `useEffect`[.](https://react.dev/reference/react/useEffect)
- If you trigger a state update inside `useLayoutEffect`, React will execute all remaining Effects immediately including `useEffect`.

useLayoutEffect returns undefined.

React will compare each dependency with its previous value using the Object.is comparison.

If you omit this argument, your Effect will re-run after every commit of the component.

Your setup function may also optionally return a cleanup function. Before your component commits, React will run your setup function. After every commit with changed dependencies, React will first run the cleanup function (if you provided it) with the old values, and then run your setup function with the new values. Before your component is removed from the DOM, React will run your cleanup function.

The purpose of useLayoutEffect is to let your component use layout information for rendering:

Render the initial content.
Measure the layout before the browser repaints the screen.
Render the final content using the layout information you’ve read.

Usually, components that rely on layout information don’t need to render on the server anyway.

Replace useLayoutEffect with useEffect. This tells React that it’s okay to display the initial render result without blocking the paint (because the original HTML will become visible before your Effect runs).
Alternatively, you can render a component with useLayoutEffect only after hydration.

https://www.greatfrontend.com/questions/quiz/what-is-the-difference-between-useeffect-and-uselayouteffect-in-react
