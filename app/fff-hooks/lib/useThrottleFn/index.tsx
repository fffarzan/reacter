import { useCallback, useRef } from "react"

export default function useThrottleFn<T extends (...args: any[]) => any>(
    cb: T, 
    delay: number
): (...args: Parameters<T>) => any {
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const throttledCb = useCallback(() => {}, [])

    return throttledCb;
}

// function useThrottleFn(fn, wait) {
//   const timeout = useRef(null);
//   const lastRan = useRef(0);
//   const latestFn = useRef(fn);

//   // Update the latest function ref on every render to avoid stale closures
//   useEffect(() => {
//     latestFn.current = fn;
//   }, [fn]);

//   // Clean up timeouts when the component unmounts
//   useEffect(() => {
//     return () => {
//       if (timeout.current) clearTimeout(timeout.current);
//     };
//   }, []);

//   return useCallback((...args) => {
//     const now = Date.now();
//     const elapsed = now - lastRan.current;

//     if (elapsed >= wait) {
//       // Execute immediately if the wait time has passed
//       latestFn.current(...args);
//       lastRan.current = now;
//     } else {
//       // Otherwise, schedule the remaining time
//       if (timeout.current) clearTimeout(timeout.current);
//       timeout.current = setTimeout(() => {
//         latestFn.current(...args);
//         lastRan.current = Date.now();
//       }, wait - elapsed);
//     }
//   }, [wait]);
// }