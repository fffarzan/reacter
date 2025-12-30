import {
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
} from "react";

const LIST_SIZE = 100_000;

export default function UseDeferredValue() {
  const [input, setInput] = useState("");

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  return (
    <>
      <input type="text" value={input} onChange={onChange} />
      <List input={input} />
    </>
  );
}

export function List({ input }: { input: string }) {
  const deferredInput = useDeferredValue(input);

  const list = useMemo(() => {
    const l = [];

    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }

    return l;
  }, [deferredInput]);

  useEffect(() => {
    console.log("input:", input);
    console.log("deferredInput:", deferredInput);
  }, [input, deferredInput]);

  return list;
}
