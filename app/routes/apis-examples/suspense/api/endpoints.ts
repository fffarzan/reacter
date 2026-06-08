import Albums from '../components/Albums';
import { beatlesAlbums, beatlesBio } from './data';

const fakePromise = (delay: number) =>
    new Promise((resolve) => {
        setTimeout(resolve, delay);
    });

export async function getAlbums() {
    await fakePromise(3000);

    return beatlesAlbums;
}

export async function getBio() {
    await fakePromise(1500);

    return beatlesBio;
}

export async function getSearchResults(query: string) {
    await fakePromise(500);

    const lowerQuery = query.trim().toLowerCase();
    const filteredAlbums = beatlesAlbums.filter((album) => {
        const lowerTitle = album.title.toLowerCase();

        return lowerTitle.startsWith(lowerQuery) || lowerTitle.indexOf(' ' + lowerQuery) !== -1;
    });

    return filteredAlbums;
}
