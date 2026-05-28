# Examples

- Directly mutating state instead of using the setter.

```js
// Anti-pattern
const [user, setUser] = useState({ name: 'FFF', age: 30 });
user.age = 37; // mutation — React doesn't see this
setUser(user); // same reference, no re-render guaranteed

// Correct
setUser((prev) => ({ ...prev, age: 37 }));
```

- Using useState to mirror props or other state instead of computing the value during render.

```js
// Anti-pattern — `fullName` mirrors props in state
function Greeting({ firstName, lastName }) {
    const [fullName, setFullName] = useState(`${firstName} ${lastName}`);
    // fullName won't update when firstName/lastName change!
    return <h1>{fullName}</h1>;
}

// Correct — compute it during render
function Greeting({ firstName, lastName }) {
    const fullName = `${firstName} ${lastName}`;
    return <h1>{fullName}</h1>;
}
```

- Deeply nested state. Prefer **flat shapes** with useReducer or a **state library**.

```js
// Anti-pattern — deeply nested
const [state, setState] = useState({
    user: {
        profile: {
            name: 'John',
            age: 30,
        },
    },
});

// Correct — flatten while preserving structure
const [user, setUser] = useState({ name: 'John', age: 30 });

// Or, for collections, normalize by id
const [users, setUsers] = useState({
    byId: {
        u1: { id: 'u1', name: 'John', age: 30 },
    },
    allIds: ['u1'],
});
```

- Using useState for values that don't drive rendering (use useRef instead).
- Putting data into state that you can compute from other state or props.

# Sources

[what are some react anti patterns](https://www.greatfrontend.com/questions/quiz/what-are-some-react-anti-patterns)
