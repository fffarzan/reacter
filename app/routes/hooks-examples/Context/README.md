# Why

It would be great if there were a way to “teleport” data to the components in the tree that need it without passing props.

`Context` lets a parent provide data to the entire tree inside of it. It doesn’t matter how many layers of components there are between the provider and the child.

## How it works

Like CSS property inheritance. In CSS, we set `color: blue` for a `<div>`, and any DOM node inside of it, unless some other DOM node in the middle overrides it with `color: green`. Similarly, in React, the only way to override some context coming from above is to wrap children into a context provider with a different value. So nested components can override context (with heading levels).

- Different React contexts don’t override each other.
- The returned value is always up-to-date. React automatically re-renders components that read some context if it changes. This is why context is often used in combination with state.
- The previous and the next values are compared with the `Object.is` comparison.
- Skipping re-renders with `memo` does not prevent the children receiving fresh context values.

## Where to use it

- Theme.
- User account data.
- Route: Most routing solutions use context internally to hold the current route. This is how every link “knows” whether it’s active or not.
- Managing state (with reducer).

## Performance issues

Context in React can cause unnecessary re-renders of components that consume the context. Overusing context for state management can also make the code harder to maintain and understand. It's best to use context sparingly and consider other state management solutions like Redux or Zustand for more complex scenarios.

- Start by passing props. If your components are not trivial, it’s not unusual to pass a dozen props down through a dozen components. Just because we need to pass some props several levels deep doesn’t mean you should put that information into context.
- Extract components and pass JSX as children to them. If you pass some data through many layers of intermediate components that don’t use that data (and only pass it further down), this often means that you forgot to extract some components.

# `useContext`

It lets us read and subscribe to context from components. It tells React that the Heading component wants to read the `LevelContext`.

- We can pass any values via context, including objects and functions.
- "context value" is a JS object with two properties, one of which is a function. Whenever MyApp re-renders, this will be a different object pointing at a different function, so React will also have to re-render all components deep in the tree that call `useContext(SomeContext)`. To help React take advantage of that fact, you can wrap the functions with `useCallback` and wrap the object creation into `useMemo`.

# createContext

For creating a context.

- `defaultValue`: it's meant as a “last resort” fallback.
- The context object itself does not hold any information.
- `SomeContext.Provider`: A legacy way to provide the context value before React 19. Starting in React 19, you can render `<SomeContext>` as a provider.
- `SomeContext.Consumer`: An alternative and rarely used way to read the context value.
- If the context is not provided, React will use the default value that is returned by `useContext()`.
- Call `createContext` outside any components to create one or more contexts.

before `useContext`:

```js
// not recommended
function Button() {
    return <ThemeContext.Consumer>{(theme) => <button className={theme} />}</ThemeContext.Consumer>;
}
```

# Refs

- [passing data deeply with context](https://react.dev/learn/passing-data-deeply-with-context#context-passes-through-intermediate-components)
- [what are some pitfalls about using context in react](https://www.greatfrontend.com/questions/quiz/what-are-some-pitfalls-about-using-context-in-react)
- [createContext](https://react.dev/reference/react/createContext)
