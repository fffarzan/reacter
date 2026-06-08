import { getAlbums, getBio, getSearchResults } from './endpoints';
import type { Album } from './types';

let cache = new Map<string, Promise<string | Album[]>>();

export function fetchData(url: string) {
    if (!cache.has(url)) {
        cache.set(url, getData(url));
    }

    return cache.get(url);
}

async function getData(url: string) {
    if (url === '/the-beatles/albums') {
        return await getAlbums();
    }

    if (url === '/the-beatles/bio') {
        return await getBio();
    }

    if (url.startsWith('/search?q=')) {
        return await getSearchResults(url.slice('/search?q='.length));
    }

    throw Error('Not implemented');
}
