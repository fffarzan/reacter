<Suspense> lets you display a fallback until its children have finished loading.

a fallback is a lightweight placeholder view, such as a loading spinner or skeleton.

React will display your loading fallback until all the code and data needed by the children has been loaded.

- React does not preserve any state for renders that got suspended before they were able to mount for the first time. When the component has loaded, React will retry rendering the suspended tree from scratch.
- If Suspense was displaying content for the tree, but then it suspended again, the fallback will be shown again unless the update causing it was caused by startTransition or useDeferredValue.
- If React needs to hide the already visible content because it suspended again, it will clean up layout Effects in the content tree. When the content is ready to be shown again, React will fire the layout Effects again. This ensures that Effects measuring the DOM layout don’t try to do this while the content is hidden.
- Streaming Server Rendering and Selective Hydration that are integrated with Suspense. Read an architectural overview and watch a technical talk to learn more.

Only Suspense-enabled data sources will activate the Suspense component. They include:

- Data fetching with Suspense-enabled frameworks like `Next.js`.
- Lazy-loading components with `lazy`.
- Reading the value of a cached Promise with `use`

Suspense does not detect when data is fetched inside an Effect or event handler.

By default, the whole tree inside Suspense is treated as a single unit. For example, even if only one of these components suspends waiting for some data, all of them together will be replaced by the loading indicator.

Suspense boundaries let you coordinate which parts of your UI should always “pop in” together at the same time, and which parts should progressively reveal more content in a sequence of loading states.

Transitions mark the whole update as non-urgent so they are typically used by frameworks and router libraries for navigation. Deferred values, on the other hand, are mostly useful in application code where you want to mark a part of UI as non-urgent and let it “lag behind” the rest of the UI.

### Suspense in routing

- Preventing already revealed content from hiding (that was hard to implement)
- Resetting Suspense boundaries on navigation

Suspense-enabled routers are expected to wrap the navigation updates into Transitions by default.

### fallback server error

If a component throws an error on the server, React will not abort the server render. Instead, it will find the closest `<Suspense>` component above it and include its fallback. On the client, React will attempt to render the same component again. If it errors on the client too, React will throw the error and display the closest Error Boundary.

To make the server throw the error we can manage error in server rendering. The server HTML will include the Loading:

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

How do I prevent the UI from being replaced by a fallback during an update? This can happen when an update causes a component to suspend, and the nearest Suspense boundary is already showing content to the user. Solution: `startTransition` especially with routers. The router should be integrated with Suspense and `startTransition`.

### continue

- https://github.com/reactwg/react-18/discussions/37
- https://www.youtube.com/watch?v=pj5N-Khihgc
