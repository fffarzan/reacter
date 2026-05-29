import { useCallback, useState } from 'react';

export default function useBoolean(initValue?: boolean) {
    const [value, setValue] = useState(initValue);

    const setTrue = useCallback(() => setValue(true), [setValue]);
    const setFalse = useCallback(() => setValue(false), [setValue]);

    return {
        value,
        setTrue,
        setFalse,
    };
}
