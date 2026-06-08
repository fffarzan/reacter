import { use } from 'react';
import { fetchData } from '../api';

export type BiographyProps = {
    artistId: string;
};

export default function Biography({ artistId }: BiographyProps) {
    const bio = use<string>(fetchData(`/${artistId}/bio`));
    return (
        <section>
            <p className="bio">{bio}</p>
        </section>
    );
}
