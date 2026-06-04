# Definition

Components that only re-render when their `props` or `state` change.

They use **shallow comparison** to check if the props or state have changed, preventing unnecessary re-renders.

Pure components don’t mutate variables outside of the function’s scope or objects that were created before the call. However, it’s completely fine to change variables and objects that they’ve just created while rendering.

## Info

React is designed around pure function concept. React assumes that every component is written is a pure function. This means that React components must always return the same JSX given the same inputs.

In React there are three kinds of inputs that you can read while rendering: `props`, `state`, and `context`. We should always treat these inputs as read-only.

## Side Effect

While functional programming relies heavily on purity, at some point, somewhere, something has to change. These changes are called side effects. They’re things that happen “on the side”, not during rendering.

Side effects usually belong inside event handlers. Event handlers are functions that React runs when you perform some actions. Even though event handlers are defined inside your component, they don’t run during rendering! So event handlers don’t need to be pure.

If you’ve exhausted all other options and can’t find the right event handler for your side effect, you can still attach it to your returned JSX with a useEffect call in your component. This tells React to execute it later, after rendering, when side effects are allowed. However, this approach should be your last resort.

## Usage

Class components can extend `React.PureComponent` to become pure functional components can use `React.memo` for the same effect.

```js
const PureFunctionalExample = React.memo(function ({ value }) {
    return <div>{value}</div>;
});
```

With the **React Compiler**, manual memoization with `React.memo`, `useMemo`, and `useCallback` is rarely needed.

## shouldComponentUpdate

# Source

- [100 react interview questions straight from ex interviewers](https://www.greatfrontend.com/blog/100-react-interview-questions-straight-from-ex-interviewers)
- [keeping components pure](https://react.dev/learn/keeping-components-pure)
- [pure components vs functional and hooks](https://www.developerway.com/posts/pure-components-vs-functional-and-hooks)

### Links

- pure functions: https://wikipedia.org/wiki/Pure_function
- strict mode: <React.StrictMode>
- local mutation

### x

Why does React care about purity?

Writing pure functions takes some habit and discipline. But it also unlocks marvelous opportunities:

Your components could run in a different environment—for example, on the server! Since they return the same result for the same inputs, one component can serve many user requests.
You can improve performance by skipping rendering components whose inputs have not changed. This is safe because pure functions always return the same results, so they are safe to cache.
If some data changes in the middle of rendering a deep component tree, React can restart rendering without wasting time to finish the outdated render. Purity makes it safe to stop calculating at any time.
Every new React feature we’re building takes advantage of purity. From data fetching to animations to performance, keeping components pure unlocks the power of the React paradigm.

---

React allows us to override `shouldComponentUpdate` method for the class components. This method is triggered before the component is supposed to re-render. `shouldComponentUpdate` gives us access to `nextProps` as an argument and you have access to the previous `props` via `this.props`. For example:

```js
class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = { somestate: 'nothing' };
    }

    shouldComponentUpdate(nextProps, nextState) {
        // re-render if props change
        if (!isEqual(nextProps, this.prop)) {
            return true;
        }

        // re-render if states change
        if (!isEqual(nextState, this.state)) {
            return true;
        }

        return false;
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({ somestate: 'updated' })}>Click me</button>
                {this.state.somestate}
                {this.props.someprop}
            </div>
        );
    }
}
```

Better way is using `PureComponents`:

```js
class PureChild extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { somestate: 'nothing' };
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({ somestate: 'updated' })}>Click me</button>
                {this.state.somestate}
                {this.props.someprop}
            </div>
        );
    }
}
```

`React.Memo` behaves almost exactly the same as PureComponent when it comes to props.

If we pass a function as props to pure component, PureChild on PureComponent can’t do anything about the situation: it would be either up to the parent to pass the function properly, or we would have to ditch PureComponent and re-implement props and state comparison manually with shouldComponentUpdate, with onClick being excluded from the comparison. With `React.memo` it’s easier: we can just pass to it the comparison function as a second argument.

Another convenience: we don’t need to worry about state anymore, as we’d do with shouldComponentUpdate. React.memo and its comparison function only deals with props, Child’s state will be unaffected.

This callback in class component will be created only once, will stay the same during all re-renders of Parent regardless of any state changes, and won’t destroy PureComponent’s shallow props comparison. In functional components we don’t have class instance anymore, everything is just a function now, so we can’t attach anything to it. Instead, we have… nothing… a few ways to preserve the reference to the callback:

- useCallback
- mirror state to ref
- setState (updater function): `onChildClick` doesn’t depend on the `counter` state itself and state dependency in the `useCallback` hook won’t be needed.

```js
const onChildClick = () => {
    setCounter((counter) => {
        if (counter > 100) {
            return counter;
        }

        return counter + 1;
    });
};
```

Props that accept arrays or objects are equally tricky for PureComponent and React.memo components. Passing them directly will ruin performance gains since they will be re-created on every re-render.
And the way to deal with them is exactly the same in both worlds: you either pass state directly to them, so that reference to the array is preserved between re-renders. Or use any memoization techniques to prevent their re-creation. In the old days, those would be dealt with via external libraries like memoize. Today we can still use them, or we can use useMemo hook that React gives us:

### bailing

Bonus: bailing out from state updates quirk
Fun fact: if you don’t believe me and react docs in the example above, decide to verify how it works by yourself and place console.log in the render function, the result will break your brain:

```js
const Parent = () => {
    const [state, setState] = useState(0);

    console.log('Log parent re-renders');

    return (
        <>
            <button onClick={() => setState(1)}>Click me</button>
        </>
    );
};
```

You’ll see that the first click on the button console.log is triggered: which is expected, we change state from 0 to 1. But the second click, where we change state from 1 to 1, which is supposed to bail, will also trigger console.log! But third and all the following clicks will do nothing… 🤯 WTF?

Turns out this is a feature, not a bug: React is being smartass here and tries to make sure that it’s actually safe to bail out on the first “safe” state update. The “bailing out” in this context means that children won’t re-render, and useEffect hooks won’t be triggered. But React will still trigger Parent’s render function the first time, just in case.

- https://legacy.reactjs.org/docs/hooks-reference.html#bailing-out-of-a-state-update
