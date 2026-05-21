import { mockWait } from "./http";

export function createTodo(title: string) {
  return mockWait(
    {
      id: crypto.randomUUID(),
      title,
    },
    3000
  );
}
