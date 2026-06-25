# Definitoin

Renders ahead of time, before bundling.

They can run once at build time on server, or for each request using a web server.

# In build time

Reading from the `filesystem` or fetch static content, so a web server is not required

```jsx
// Not included in bundle
import marked from 'marked';
import sanitizeHtml from 'sanitize-html';

export default async function Page({ page }) {
    // Loads during render, when the app is built
    const content = await file.readFile(`${page}.md`);

    return <div>{sanitizeHtml(marked(content))}</div>;
}
```

# With server

This combines the simple “request/response” mental model of server-centric MPA with the seamless interactivity of client-centric SPA.

They can also run on a web server during a request for a page, during a request for a page, letting access data-layer without having to build an API.

They are rendered before the app is bundled, and can pass data and JSX as props to Client Components.

The bundler combines the data, rendered Server Components and dynamic Client Components into a bundle. That bundle can be SSR to create the initial HTML for the page. When the page loads, the browser does not see the original Note and Author components; only the rendered output is sent to the client.

To add interactivity to Server Components, they can be composed them with Client Component using the "use client" directive.

```jsx
import db from './database';

export default async function Note({ id }) {
    // Loads during render
    // Will suspend the Server Component
    const note = await db.notes.get(id);

    // Not awaited, will start here and await on the client. Suspense is the key
    const commentsPromise = db.comments.get(note.id);

    return (
        <div>
            <Author id={note.authorId} />
            <p>{note}</p>
            <Suspense fallback={<p>Loading Comments...</p>}>
                <Comments commentsPromise={commentsPromise} />
            </Suspense>
        </div>
    );
}

export default async function Author({ id }) {
    // Loads after Note, but is fast if data is co-located
    const author = await db.authors.get(id);

    return <span>By: {author.name}</span>;
}

"use client";
import {use} from 'react';

export default function Comments({commentsPromise}) {
  // This will resume the promise from the server. It will suspend until the data is available
  const comments = use(commentsPromise);

  return comments.map(comment => <p>{comment}</p>);
}
```

Notes:

- There is no directive for Server Components. The "use server" directive is used for Server Functions.
- In an async component, React suspends and wait for the promise to resolve before resuming rendering (server/client boundaries with streaming support for Suspense).

# Glossary

- Directive: provide instructions to bundlers compatible with React Server Components.

# Refs

- [server components](https://react.dev/reference/rsc/server-components)
- [directives](https://react.dev/reference/rsc/directives)

### Continue

- https://react.dev/learn/creating-a-react-app#full-stack-frameworks
