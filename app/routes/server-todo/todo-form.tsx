'use client';

import { useActionState } from 'react';
import { addTodo } from './actions';

export default function TodoForm() {
    const [state, formAction, isPending] = useActionState(addTodo, null);

    return (
        <form action={formAction}>
            <input name="todo" placeholder="What needs to be done?" disabled={isPending} />
            <button disabled={isPending}>{isPending ? 'Adding...' : 'Add Todo'}</button>

            {state?.error && <span style={{ color: 'red' }}>{state.error}</span>}
            {state?.success && <span style={{ color: 'green' }}>{state.message}</span>}
        </form>
    );
}
