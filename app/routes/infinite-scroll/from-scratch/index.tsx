import { useEffect, useState } from 'react';
import { ProductCard } from './components/ProductCard';
import useInfiniteScroll from './hooks/useInfiniteScroll';
import './style.css';
import type { ProductItem } from './types';

const BASE_URL = 'https://dummyjson.com/';
const GET_PRODUCTS_ENDPOINT = 'products';

export default function Page() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<ProductItem[]>([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [error, setError] = useState<null | Error>(null);
    const [page, setPage] = useState(1);

    const fetchData = async (page: number) => {
        try {
            setLoading(true);

            const result = await fetch(
                `${BASE_URL}${GET_PRODUCTS_ENDPOINT}?limit=10&skip=${(page - 1) * 10}`,
            );
            const data = await result.json();

            if (!result.ok) {
                return;
            }

            setProducts((prevItems) => [...prevItems, ...data.products]);
            page === 1 && setTotalProducts(() => data.total); // only set this once
        } catch (error) {
            if (error instanceof Error) {
                setError(error);
            }
        } finally {
            setLoading(false);
        }
    };

    useInfiniteScroll(fetchData);

    // useEffect(() => {
    //     let subscribed = true;
    //     (async () => {
    //         if (subscribed) {
    //             await fetchData(1);
    //         }
    //     })();

    //     return () => {
    //         subscribed = false;
    //     };
    // }, []);

    return (
        <div>
            <div className="products-list">
                {products.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))}
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
        </div>
    );
}
