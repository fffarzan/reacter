import { useEffect, useState, type DependencyList } from 'react';

export type QueryState<T> =
    | { status: 'loading' }
    | { status: 'success'; data: T }
    | { status: 'error'; error: Error };

export default function useQuery<T>(
    fn: () => Promise<T>,
    deps: DependencyList = [],
): QueryState<T> {
    const [state, setState] = useState<QueryState<T>>({
        status: 'loading',
    });

    useEffect(() => {
        let ignore = false; // ignoring late promises after deps change or the component unmounts (race condition: network responses may arrive in a different order than you sent them).
        setState({ status: 'loading' });

        fn()
            .then((data) => {
                if (ignore) {
                    return;
                }

                setState({ status: 'success', data });
            })
            .catch((error) => {
                if (ignore) {
                    return;
                }

                setState({ status: 'error', error });
            });

        return () => {
            ignore = true;
        };
    }, deps);

    return state;
}

// TODO: wrtie it with async/await
