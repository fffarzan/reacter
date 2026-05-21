import { useDeferredValue, useEffect, useMemo } from 'react';

const LIST_SIZE = 100_000;

export type ListPropsType = {
    input: string;
};

export function List({ input }: ListPropsType) {
    const deferredInput = useDeferredValue(input);

    const list = useMemo(() => {
        const l = [];

        for (let i = 0; i < LIST_SIZE; i++) {
            l.push(<div key={i}>{deferredInput}</div>);
        }

        return l;
    }, [deferredInput]);

    useEffect(() => {
        console.log('input:', input);
        console.log('deferredInput:', deferredInput);
    }, [input, deferredInput]);

    return list;
}
