import { useEffect } from 'react';

export default function Child() {
    console.log('child 1');

    useEffect(() => {
        console.log('child 2');
    }, []);

    return <h2>child</h2>;
}
