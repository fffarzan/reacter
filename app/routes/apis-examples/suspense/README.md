# Definition

Displays a fallback until its children have finished loading. React will display fallback until all the code needed by the children has been loaded.

Notes:

- React does not preserve any state for renders that got suspended before they were able to mount for the first time. When the component has loaded, React will retry rendering the suspended tree from scratch.
- If Suspense was displaying content for the tree, but then it suspended again, the fallback will be shown again unless the update causing it was caused by `startTransition` or `useDeferredValue`.
- If React needs to hide the already visible content because it suspended again, it will clean up layout Effects in the content tree. When the content is ready to be shown again, React will fire the layout Effects again. This ensures that Effects measuring the DOM layout don’t try to do this while the content is hidden.
- Streaming and Selective Hydration are integrated with Suspense.

# How to Use Suspense

If the components include:

- Data fetching with Suspense-enabled frameworks like `Next.js`.
- Lazy-loading components with `lazy`.
- Reading the value of a cached Promise with `use`.

Notes:

- Suspense does not detect when data is fetched inside an Effect or event handler.
- The whole tree inside Suspense is treated as a single unit. It coordinates which parts of the UI should always “pop in” together at the same time and which parts should reveal more content in a sequence of loading states.

### Suspense in Routing

Suspense-enabled routers third-party usually wrap the navigation updates into Transitions by default.

- Preventing already revealed content from hiding (That was hard to implement!)
- Resetting Suspense boundaries on navigation

### Fallback ServerEerror

Problem:

If a component throws an error on the server, React will not abort the server render. Instead, it will find the closest `<Suspense>` component above it and include its fallback. On the client, React will attempt to render the same component again. If it errors on the client too, React will throw the error and display the closest Error Boundary.

Solution:

We can throw the error and manage it in server rendering.

The server HTML includes Loading:

```jsx
<Suspense fallback={<Loading />}>
    <Chat />
</Suspense>;

function Chat() {
    // The error that is handeled in the server and client shows the Loading.
    if (typeof window === 'undefined') {
        throw Error('Chat should only render on the client.');
    }
    // ...
}
```

### Prevent UI Replacing by Fallback During Update

Problem:

This can happen when an update causes a component to suspend, and the nearest Suspense boundary is already showing content to the user.

Solution:

The router should be integrated with `<Suspense>` and `startTransition`.

# Glossary

- Fallback: A lightweight placeholder view, like loading-spinner or skeleton.
- Transition: Marks the whole update as non-urgent (Used by frameworks and router libraries for navigation).
- Deferred value: Marks a part of UI as non-urgent and let it “lag behind” the rest of the UI.

### continue

- [https://github.com/reactwg/react-18/discussions/37](https://github.com/reactwg/react-18/discussions/37)
- [https://www.youtube.com/watch?v=pj5N-Khihgc](https://www.youtube.com/watch?v=pj5N-Khihgc)

