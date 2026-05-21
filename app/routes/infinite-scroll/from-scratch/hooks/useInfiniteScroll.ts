import { useEffect, useState } from 'react';
import debounce from '../utils/debounce';

export default function useInfiniteScroll(fetchData: (page: number) => Promise<void>) {
    const [page, setPage] = useState(1);

    const handleScroll = debounce(() => {
        const bottom =
            Math.ceil(window.innerHeight + window.scrollY) >=
            document.documentElement.scrollHeight - 200;

        if (bottom) {
            setPage((prevPage) => {
                const nextPage = prevPage + 1;
                fetchData(nextPage);
                return nextPage;
            });
        }
    }, 200);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return {
        handleScroll,
    };
}
