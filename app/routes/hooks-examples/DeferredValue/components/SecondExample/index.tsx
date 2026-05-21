import { useDeferredValue, useState, type ChangeEvent } from 'react';
import { List } from './List';

export default function SecondExample() {
    const [input, setInput] = useState('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    return (
        <>
            <input type="text" value={input} onChange={onChange} />
            <List input={input} />
        </>
    );
}
