import { Link } from 'react-router';

export default function Home() {
    return (
        <>
            <h1>Hooks</h1>
            <ul>
                <li>
                    <Link to="hooks-examples/transition">useTransition example</Link>
                </li>
                <li>
                    <Link to="hooks-examples/optimistic">useOptimistic example</Link>
                </li>
                <li>
                    <Link to="hooks-examples/deferred-value">useDeferredValue example</Link>
                </li>
                <li>
                    <Link to="hooks-examples/callback">useCallback example</Link>
                </li>
                <li>
                    <Link to="hooks-examples/layout-effect">useLayoutEffect Example</Link>
                </li>
            </ul>
            <h1>APIs</h1>
            <ul>
                <li>
                    <Link to="apis-examples/prefetchDNSExample">prefetchDNS example</Link>
                </li>
            </ul>
            <h1>Infinite Scroll</h1>
            <ul>
                <li>
                    <Link to="infinite-scroll/from-scratch">From Scratch</Link>
                </li>
            </ul>
        </>
    );
}
