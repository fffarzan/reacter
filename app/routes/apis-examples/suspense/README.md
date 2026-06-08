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

- https://github.com/reactwg/react-18/discussions/37
- https://www.youtube.com/watch?v=pj5N-Khihgc
