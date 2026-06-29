import { intlUsd } from '../utils/price-format';

export type TotalProps = {
    quantity: number;
    isPending: boolean;
};

export default function Total({ quantity, isPending }: TotalProps) {
    return (
        <>
            <span>Total:</span>
            <span>{isPending ? ' Updating...' : ` ${intlUsd.format(quantity * 9999)}`}</span>
        </>
    );
}
