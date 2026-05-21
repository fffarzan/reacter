export type DebounceCb = (args: any) => void;

export default function debounce(cb: DebounceCb, delay: number) {
    let timeoutId: ReturnType<typeof setTimeout>;

    return (...args: any) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            cb(args);
        }, delay);
    };
}
