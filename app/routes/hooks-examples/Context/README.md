- Wouldn’t it be great if there were a way to “teleport” data to the components in the tree that need it without passing props? With React’s context feature, there is!
- Context lets a parent—even a distant one!—provide some data to the entire tree inside of it.
- useContext tells React that the Heading component wants to read the LevelContext.
- If you don’t provide the context, React will use the default value you’ve specified in the previous step.
- Since context lets you read information from a component above, each Section could read the level from the Section above, and pass level + 1 down automatically. Here is how you could do it. This example uses heading levels because they show visually how nested components can override context.

- How context works might remind you of CSS property inheritance. In CSS, you can specify color: blue for a <div>, and any DOM node inside of it, no matter how deep, will inherit that color unless some other DOM node in the middle overrides it with color: green. Similarly, in React, the only way to override some context coming from above is to wrap children into a context provider with a different value.

- different React contexts don’t override each other
- Just because you need to pass some props several levels deep doesn’t mean you should put that information into context.

- The returned value is always up-to-date.
- React automatically re-renders components that read some context if it changes.
- The previous and the next values are compared with the Object.is comparison.
- Skipping re-renders with memo does not prevent the children receiving fresh context values.

- It doesn’t matter how many layers of components there are between the provider and the Button.

- Passing data deeply into the tree
- Updating data passed via context

- If React can’t find any providers of that particular context in the parent tree, the context value returned by useContext() will be equal to the default value that you specified when you created that context

- Start by passing props. If your components are not trivial, it’s not unusual to pass a dozen props down through a dozen components.
- Extract components and pass JSX as children to them. If you pass some data through many layers of intermediate components that don’t use that data (and only pass it further down), this often means that you forgot to extract some components along the way

Use cases:

- theme
- user account data
- route: Most routing solutions use context internally to hold the current route. This is how every link “knows” whether it’s active or not.
- Managing state (with reducer)

- Context is not limited to static values. If you pass a different value on the next render, React will update all the components reading it below! This is why context is often used in combination with state.

https://react.dev/learn/passing-data-deeply-with-context#context-passes-through-intermediate-components

### createContext

- defaultValue: The default value is meant as a “last resort” fallback.
- The context object itself does not hold any information.
- SomeContext.Provider is a legacy way to provide the context value before React 19. Starting in React 19, you can render <SomeContext> as a provider.
- SomeContext.Consumer is an alternative and rarely used way to read the context value.

### c

- Context in React can lead to performance issues if not handled carefully, causing unnecessary re-renders of components that consume the context, even if only part of the context changes. Overusing context for state management can also make the code harder to maintain and understand. It's best to use context sparingly and consider other state management solutions like Redux or Zustand for more complex scenarios.

https://www.greatfrontend.com/questions/quiz/what-are-some-pitfalls-about-using-context-in-react
