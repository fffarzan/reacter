import type { Todo } from "./types";

export type OptimisticTodo = Todo & {
  pending?: boolean;
};

export function todoReducer(
  state: OptimisticTodo[],
  action: { type: "ADD"; payload: string }
) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: crypto.randomUUID(),
          title: action.payload,
          pending: true,
        },
      ];
    default:
      throw new Error("Invalid");
  }
}
