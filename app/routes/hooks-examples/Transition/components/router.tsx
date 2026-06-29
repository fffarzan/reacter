import { useState, useTransition } from 'react';
import IndexPage from './index-page';
import ArtistPage from './artist-page';
import Layout from './layout';

export default function Router() {
    const [page, setPage] = useState('/');
    const [isPending, startTransition] = useTransition();

    function navigate(url: string) {
        startTransition(() => {
            setPage(url);
        });
    }

    let content;
    if (page === '/') {
        content = <IndexPage navigate={navigate} />;
    } else if (page === '/the-beatles') {
        content = (
            <ArtistPage
                artist={{
                    id: 'the-beatles',
                    name: 'The Beatles',
                }}
            />
        );
    }
    return <Layout isPending={isPending}>{content}</Layout>;
}
