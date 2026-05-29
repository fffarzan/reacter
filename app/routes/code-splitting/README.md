- What is code splitting in a React application?
  Code splitting enhances performance by dividing code into smaller chunks loaded on demand, thereby reducing initial load times. This can be achieved through dynamic import() statements or using React's React.lazy and Suspense.

// Using React.lazy and Suspense
const LazyComponent = React.lazy(() => import('./LazyComponent'));

```js
function App() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
        </React.Suspense>
    );
}
```

https://www.greatfrontend.com/questions/quiz/what-is-code-splitting-in-a-react-application
