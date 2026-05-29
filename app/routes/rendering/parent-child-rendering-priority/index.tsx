import { useEffect } from 'react';
import Child from './components/child';

export default function Page() {
    console.log('parent 1');

    useEffect(() => {
        console.log('parent 2');
    }, []);

    return (
        <>
            <h1>parent</h1>
            <Child />
        </>
    );
}
