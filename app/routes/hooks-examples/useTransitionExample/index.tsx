import { useState, useTransition, type ChangeEvent } from "react";

const LIST_SIZE = 30000;

export default function UseTransitionExample() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);

    startTransition(() => {
      const l = [];

      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }

      setList(l);
    });
  }

  return (
    <>
      <input type="text" name="input" value={input} onChange={onChange} />
      {isPending
        ? "Loading..."
        : list.map((item, index) => <div key={index}>{item}</div>)}
    </>
  );
}
