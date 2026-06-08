import { use } from 'react';
import { fetchData, type Album } from '../api';

export type AlbumsProps = {
    artistId: string;
};

export default function Albums({ artistId }: AlbumsProps) {
    const albums = use<Album[] | undefined>(fetchData(`/${artistId}/albums`));

    return (
        <div className="panel">
            <ul>
                {albums?.map((album) => (
                    <li key={album.id}>
                        {album.title} ({album.year})
                    </li>
                ))}
            </ul>
        </div>
    );
}
