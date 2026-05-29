- What is the difference Between React Node, React Element, and React Component?
  A React Node refers to any unit that can be rendered in React, such as an element, string, number, or null. A React Element is an immutable object that defines what should be rendered, typically created using JSX or React.createElement. A React Component is either a function or class that returns React Elements, enabling the creation of reusable UI components.

- How would you lift the state up in a React application, and why is it necessary?
  Lifting state up in React involves moving the state from child components to their nearest common ancestor. This pattern is used to share state between components that don't have a direct parent-child relationship. By lifting state up, you can avoid prop drilling and simplify the management of shared data.

- What is the difference between createElement and cloneElement?
  The difference between createElement and cloneElement in React is as follows:

- createElement:
  Used to create a new React element.
  It takes the type of the element (e.g., 'div', a React component), props, and children, and returns a new React element.
  Commonly used internally by JSX or when dynamically creating elements. Example:

```js
React.createElement('div', { className: 'container' }, 'Hello World');
```

- cloneElement:
  Used to clone an existing React element and optionally modify its props.
  It allows you to clone a React element and pass new props or override the existing ones, keeping the original element's children and state.
  Useful when you want to manipulate an element without recreating it. Example:

```js
const element = <button className="btn">Click Me</button>;
const clonedElement = React.cloneElement(element, { className: 'btn-primary' });
```

- Explain what React hydration is?
  Hydration involves attaching event listeners and making server-rendered HTML interactive on the client side. After server-side rendering, React initializes dynamic behavior by attaching event handlers.

https://www.greatfrontend.com/questions/quiz/explain-what-react-hydration-is

- What is React strict mode and what are its benefits?
  React Strict Mode is a development feature in React that activates extra checks and warnings to help identify potential issues in your app.

Detects unsafe lifecycles: Warns about deprecated lifecycle methods
Identifies side effects: Highlights components with side effects in render methods
Warns about unexpected state changes: Catches unexpected state mutations
Enforces best practices: Flags potential problems, encouraging modern practices

```js
<React.StrictMode>
    <App />
</React.StrictMode>
```

Wrapping components in <React.StrictMode> activates these development checks without affecting production builds

- How would one optimize the performance of React contexts to reduce rerenders?
  Optimizing context performance involves memoizing context values with useMemo, splitting contexts for isolated state changes, and employing selectors to rerender only necessary components.

```js
const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
```

https://www.greatfrontend.com/questions/quiz/how-would-one-optimize-the-performance-of-react-contexts-to-reduce-rerenders

- forwardRef
  https://www.greatfrontend.com/questions/quiz/what-is-forwardref-in-react-used-for

- https://www.greatfrontend.com/questions/quiz/what-is-the-difference-between-state-and-props-in-react

- https://www.greatfrontend.com/questions/quiz/why-does-react-recommend-against-mutating-state

- https://www.greatfrontend.com/questions/quiz/what-is-the-difference-between-react-node-react-element-and-a-react-component
