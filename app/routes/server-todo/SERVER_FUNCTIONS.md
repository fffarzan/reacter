# Definitions

For use in React Server Components. Also allow Client Components to call async functions executed on the server.

- Note: If a Server Function is passed to an action prop or called from inside an action then it is a Server Action. Not all Server Functions are Server Actions.

# How it works

When a Server Function is defined, it'll be created a reference to the Server Function, and pass that reference to the Client Component. When is called, React will send a request to the server to execute the function (the request includes a serialized copy of any arguments passed), and return the result (the result will be serialized).

```bash
┌──────────────┐
│  User Input  │
│ (Form / UI)  │
└──────┬───────┘
       │ submit
       ▼
┌──────────────┐
│   FormData   │
│ (Serialized) │
└──────┬───────┘
       │
       │ automatic request
       ▼
┌────────────────────┐
│   Server Action    │
│   'use server'     │
│ (Runs on Server)   │
└──────┬─────────────┘
       │
       ▼
┌──────────────┐
│   Database   │
│ / Backend    │
└──────┬───────┘
       │ result / error
       ▼
┌──────────────┐
│   Response   │
│ (Serialized) │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  UI Update   │
│ (Re-render)  │
└──────────────┘
```

### Not Supported types for serialize

React elements, JSX, Functions, Classes, instance objects, objects with nul prototype, non-global registered symbols, events

## 'use server'

Marks the function as callable by the client.

- Are designed for mutations that **update server-side state**, not data fetching (mutating data with forms).
- Can only be used in **server-side files**.
- Can only be used on **async functions**.
- Should be called in a `Transition`.
- If it is passed to `<form action>` or `formAction` will automatically be called in a **transition**.

# Usage

- Creating inside a server component
- Importing to client component
- with form actions
- with `useActionState`

When using useActionState with Server Functions, React will also automatically replay form submissions entered before hydration finishes. This means users can interact with your app even before the app has hydrated.(??)

```jsx
// server component
import Button from './Button';

function EmptyNote() {
    async function createNoteAction() {
        // Server Function or it can be a file
        'use server';

        await db.notes.create();
    }

    return <Button onClick={createNoteAction} />;
}

// client component
('use client');

export default function Button({ onClick }) {
    // {$$typeof: Symbol.for("react.server.reference"), $$id: 'createNoteAction'}
    return <button onClick={() => onClick()}>Create Empty Note</button>;
}
```

# Security

- **Arguments** of the functions. Assume always untrusted

# Refs

- [server functions](https://react.dev/reference/rsc/server-functions)
- [use server](https://react.dev/reference/rsc/use-server)
- [server actions build forms](https://medium.com/@bharathofficial05/server-actions-in-react-19-build-forms-without-the-boilerplate-and-keep-your-sanity-ca60aef6d1c3)
- https://react.dev/reference/rsc/use-server#calling-a-server-function-outside-of-form

### Continue

- https://react.dev/reference/react/useActionState
- https://react.dev/reference/react-dom/components/form#props
- https://react.dev/reference/react-dom/components/input#props
- https://react.dev/reference/react/experimental_taintObjectReference
- https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement (forms can be submitted before the JavaScript bundle is loaded)

- should add it this section to the home page
