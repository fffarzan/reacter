import { startTransition, type ChangeEvent } from 'react';

export type ItemProps = {
    action: (val: any) => void;
};

export default function Item({ action }: ItemProps) {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        startTransition(async () => {
            await action(event.target.value); // To expose an action prop, await the callback in startTransition.
        });
    };

    return (
        <>
            <span>Eras Tour Tickets</span>
            <label htmlFor="name">Quantity: </label>
            <input type="number" onChange={handleChange} defaultValue={1} min={1} />
        </>
    );
}
