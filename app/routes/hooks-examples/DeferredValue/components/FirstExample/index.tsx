import { useDeferredValue, useState, type ChangeEvent } from 'react';
import { SlowList } from './SlowList';

export default function FirstExample() {
    const [text, setText] = useState('');
    const deferredText = useDeferredValue(text, 'loading...');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <>
            <input value={text} onChange={onChange} />
            <SlowList text={deferredText} />
        </>
    );
}
