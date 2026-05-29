import useBoolean from '../lib/useBoolean';

export default function Page() {
    const { value, setTrue, setFalse } = useBoolean(true);

    return (
        <>
            <p>{value ? 'enabled' : 'disabled'}</p>
            <button onClick={setTrue}>Enable</button>
            <button onClick={setFalse}>Disable</button>
        </>
    );
}
