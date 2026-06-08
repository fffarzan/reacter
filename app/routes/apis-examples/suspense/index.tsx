import { Suspense, useDeferredValue, useState } from 'react';
import Albums from './components/Albums';
import { artist } from './constants';
import Biography from './components/Biography';
import BigSpinner from './components/BigSpinner';
import AlbumsGlimmer from './components/AlbumsGlimmers';
import './styles.css';
import SearchResults from './components/SearchResults';

export default function App() {
    const [show, setShow] = useState(false);
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);
    const isStale = query !== deferredQuery;

    return (
        <>
            <div>
                <label>
                    Search albums:{' '}
                    <input value={query} onChange={(e) => setQuery(e.target.value)} />
                </label>
                <Suspense fallback={<BigSpinner />}>
                    <div style={{ opacity: isStale ? 0.5 : 1 }}>
                        {/* Both deferred values and `Transitions` let you avoid showing Suspense fallback in favor of inline indicators. */}
                        <SearchResults query={deferredQuery} />
                    </div>
                </Suspense>
            </div>
            <br />
            {!show && <button onClick={() => setShow(true)}>Open artist page</button>}
            {show && (
                <div>
                    <h1>{artist.name}</h1>
                    <Suspense fallback={<BigSpinner />}>
                        <Biography artistId={artist.id} />
                        {/* with this Suspense, displaying the Biography doesn’t need to “wait” for the Albums to load */}
                        <Suspense fallback={<AlbumsGlimmer />}>
                            <Albums artistId={artist.id} />
                        </Suspense>
                    </Suspense>
                </div>
            )}
        </>
    );
}
