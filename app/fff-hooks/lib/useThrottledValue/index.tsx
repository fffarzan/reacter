import { useEffect, useRef, useState } from 'react';

export default function useThrottledValue(text: string, delay: number) {
    const [throttledText, setThrottledText] = useState(text);
    const lastExeTime = useRef(Date.now());

    useEffect(() => {
        if (Date.now() - lastExeTime.current >= 500) {
            lastExeTime.current = Date.now();
            setThrottledText(text);

            return;
        }

        const timeout = setTimeout(() => {
            lastExeTime.current = Date.now();
            setThrottledText(text);
        }, delay);

        return () => clearTimeout(timeout);
    }, [text, delay]);

    return throttledText;
}
