import { useRef, useState } from "react";

export default function UseOptimisticExample() {
  const [todos, setTodos] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
}
