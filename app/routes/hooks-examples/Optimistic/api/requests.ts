import { mockWait } from './endpoints';

export function createTodo(title: string) {
    return mockWait(
        {
            id: crypto.randomUUID(),
            title,
        },
        3000,
    );
}
