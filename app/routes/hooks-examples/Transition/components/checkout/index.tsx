import { useState, useTransition } from 'react';
import { putQuantityApi } from '../../api';
import Item from './item';
import Total from './total';

export default function Checkout() {
    const [quantity, setQuantity] = useState(1);
    const [isPending, startTransition] = useTransition();

    // A common solution to this problem is to prevent the user from making changes while the quantity is updating. but it's not UX friendly, makes the app feel slow.
    const updateQuantityAction = async (newQuantity: number) => {
        startTransition(async () => {
            const savedQuantity = await putQuantityApi(newQuantity);

            // To access the pending state of a transition, call startTransition again.
            startTransition(() => {
                setQuantity(savedQuantity);
            });
        });
    };

    return (
        <>
            <h1>Checkout</h1>
            <Item action={updateQuantityAction} />
            <hr />
            <Total quantity={quantity} isPending={isPending} />
        </>
    );
}
