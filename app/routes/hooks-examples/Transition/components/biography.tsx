import { use } from 'react';
import { fetchData } from '../api/data';

export type BiographyProps = {
    artistId: string;
};

export default function Biography({ artistId }: BiographyProps) {
    const bio: any = use(fetchData(`/${artistId}/bio`));

    return (
        <section>
            <p className="bio">{bio}</p>
        </section>
    );
}
