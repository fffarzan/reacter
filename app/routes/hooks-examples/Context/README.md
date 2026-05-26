The returned value is always up-to-date.
React automatically re-renders components that read some context if it changes.
The previous and the next values are compared with the Object.is comparison.
Skipping re-renders with memo does not prevent the children receiving fresh context values.

It doesn’t matter how many layers of components there are between the provider and the Button.

- Passing data deeply into the tree
- Updating data passed via context

If React can’t find any providers of that particular context in the parent tree, the context value returned by useContext() will be equal to the default value that you specified when you created that context
