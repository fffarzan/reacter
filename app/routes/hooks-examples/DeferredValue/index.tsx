import { useDeferredValue, useState, type ChangeEvent } from 'react';

import { List } from './components/List';
import { SlowList } from './components/SlowList';

export default function Page() {
    // const [input, setInput] = useState('');
    const [text, setText] = useState('');
    const deferredText = useDeferredValue(text);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <>
            {/* <input
                type="text"
                value={input}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            />
            <List input={input} /> */}
            <input value={text} onChange={onChange} />
            <SlowList text={deferredText} />
        </>
    );
}
