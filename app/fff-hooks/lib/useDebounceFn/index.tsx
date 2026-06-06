import { useCallback, useEffect, useRef } from 'react';

export default function useDebounceFn<T extends (...args: any[]) => any>(
	cb: T, 
	delay: number
): (...args: Parameters<T>) => any {
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  	const debouncedCb = useCallback((...args: Parameters<T>) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		
		timeoutRef.current = setTimeout(() => {
			cb(...args);
		}, delay);
	}, [cb, delay]);

	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

  return debouncedCb;
}