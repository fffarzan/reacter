import { useEffect, useState } from 'react';

export default function useDebouncedValue(text: string, delay: number) {
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedText(text);
        }, delay);

        return () => clearTimeout(timeout);
    }, [text, delay]);

    return debouncedText;
}
