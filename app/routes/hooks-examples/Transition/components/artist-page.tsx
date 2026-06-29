import { Suspense } from 'react';
import Biography from './biography';
import Panel from './panel';
import Albums from '~/routes/apis-examples/suspense/components/Albums';

export type ArtistPageProps = {
    artist: {
        id: string;
        name: string;
    };
};

export default function ArtistPage({ artist }: ArtistPageProps) {
    return (
        <>
            <h1>{artist.name}</h1>
            <Biography artistId={artist.id} />
            <Suspense fallback={<AlbumsGlimmer />}>
                <Panel>
                    <Albums artistId={artist.id} />
                </Panel>
            </Suspense>
        </>
    );
}

function AlbumsGlimmer() {
    return (
        <div className="glimmer-panel">
            <div className="glimmer-line" />
            <div className="glimmer-line" />
            <div className="glimmer-line" />
        </div>
    );
}
