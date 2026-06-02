import { useState } from 'react';
import useBoolean from '../lib/useBoolean';
import useDebounce from '../lib/useDebounce';
import useThrottle from '../lib/useThrottle';

const DEBOUNCE_DELAY = 500;
const THROTTLE_DELAY = 500;

export default function Page() {
    const { value, setTrue, setFalse } = useBoolean(true);
    const [inputText, setInputText] = useState('');

    const debouncedText = useDebounce(inputText, DEBOUNCE_DELAY);
    const throttledText = useThrottle(inputText, THROTTLE_DELAY);

    return (
        <>
            <>
                <p>{value ? 'enabled' : 'disabled'}</p>
                <button onClick={setTrue}>Enable</button>
                <button onClick={setFalse}>Disable</button>
            </>
            <>
                <input
                    type="text"
                    placeholder="Type something..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <p>Default: {inputText}</p>
                <p>Debounced: {debouncedText}</p>
                <p>Throttled: {throttledText}</p>
            </>
        </>
    );
}
