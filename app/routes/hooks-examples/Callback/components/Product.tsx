import { useCallback } from 'react';
import ShippingForm from './ShippingForm';
import { post } from '../api/requests';

export type ProductProps = {
    productId: string;
    referrerId: string;
    theme: string;
};

export default function Product({ productId, referrerId, theme }: ProductProps) {
    const handleSubmit = useCallback(
        (orderDetails: string) => {
            post('/product/' + productId + '/buy', {
                referrerId,
                orderDetails,
            });
        },
        [productId, referrerId],
    );

    return (
        <div className={theme}>
            <ShippingForm onSubmit={handleSubmit} />
        </div>
    );
}
