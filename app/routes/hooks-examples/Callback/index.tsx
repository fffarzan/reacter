import { useCallback } from 'react';

export default function Page() {
    const cb = useCallback(() => console.log('call callback'), []);

    const loop = () => {
        cb();
    };

    return <button onClick={loop}>trigger loop</button>;
}
