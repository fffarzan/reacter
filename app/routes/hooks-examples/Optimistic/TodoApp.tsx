import {
  startTransition,
  useOptimistic,
  useRef,
  useState,
  type FormEvent,
} from "react";

import { createTodo } from "./api";
import type { Todo } from "./types";
import { todoReducer, type OptimisticTodo } from "./todoReducer";

export type TodoAppPropsType = {
  initialTodos: Todo[];
};

export default function TodoApp({ initialTodos }: TodoAppPropsType) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const inputRef = useRef<HTMLInputElement>(null);
  const [optimisticTodos, dispatch] = useOptimistic(todos, todoReducer);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    startTransition(async () => {
      if (inputRef.current === null) {
        return;
      }

      dispatch({ type: "ADD", payload: inputRef.current.value });
      const newTodo = await createTodo(inputRef.current.value);
      setTodos((prev) => [...prev, newTodo]);
    });
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>title:</label>
        <br />
        <input
          ref={inputRef}
          placeholder="write a todo..."
          required
          autoFocus
        />
        <br />
        <button type="submit">create</button>
      </form>
      <ul>
        {optimisticTodos.map((todo) => (
          <li
            key={todo.id}
            style={{ opacity: (todo as OptimisticTodo).pending ? 0.5 : 1 }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}
