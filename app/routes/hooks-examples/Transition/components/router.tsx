import { Suspense, useState, useTransition } from 'react';
import Biography from './biography';
import Albums from '~/routes/apis-examples/suspense/components/Albums';
import { GlimmerFallback, Layout } from '../common/dls';
import Tab from './tab';
import Checkout from './checkout';
import AddCommentButton from './add-comment-botton';
import { ErrorBoundary } from 'react-error-boundary';

const ARTIST = {
    id: 'the-beatles',
    name: 'The Beatles',
};

export default function Router() {
    const [page, setPage] = useState('/');
    const [isPending, startTransition] = useTransition();

    const navigate = (url: string) =>
        startTransition(() => {
            setPage(url);
        });

    return (
        <Layout isPending={isPending}>
            {page === '/' && (
                <button onClick={() => navigate('/the-beatles')}>
                    Open The Beatles artist page
                </button>
            )}
            {page === '/the-beatles' && (
                <>
                    <h1>{ARTIST.name}</h1>
                    <Biography artistId={ARTIST.id} />
                    <Suspense fallback={<GlimmerFallback />}>
                        <section className="panel">
                            <Albums artistId={ARTIST.id} />
                        </section>
                    </Suspense>
                </>
            )}
            <br />
            <Tab />
            <br />
            <Checkout />
            <br />
            <ErrorBoundary fallback={<p>Something went wrong</p>}>
                <AddCommentButton />
            </ErrorBoundary>
        </Layout>
    );
}
