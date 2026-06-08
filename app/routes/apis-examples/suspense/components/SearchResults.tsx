import { use } from 'react';
import { fetchData, type Album } from '../api';

export type SearchResultsProps = {
    query: string;
};

export default function SearchResults({ query }: SearchResultsProps) {
    if (query === '') {
        return null;
    }

    const albums = use<Album[] | undefined>(fetchData(`/search?q=${query}`));

    if (albums?.length === 0) {
        return (
            <p>
                No matches for <i>"{query}"</i>
            </p>
        );
    }

    return (
        <ul>
            {albums?.map((album) => (
                <li key={album.id}>
                    {album.title} ({album.year})
                </li>
            ))}
        </ul>
    );
}
