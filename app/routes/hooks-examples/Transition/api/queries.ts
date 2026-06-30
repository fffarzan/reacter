import { BEATLES_ALBUMS, BEATLES_BIO } from '../data';

const cache = new Map();

export function fetchData(url: string) {
    if (!cache.has(url)) {
        cache.set(url, getData(url));
    }

    return cache.get(url);
}

export async function putQuantityApi(newQuantity: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(newQuantity);
        }, 2000);
    });
}

async function getData(url: string) {
    if (url === '/the-beatles/albums') {
        return await getAlbums();
    }

    if (url === '/the-beatles/bio') {
        return await getBio();
    }

    throw Error('Not implemented');
}

async function getBio() {
    await new Promise((resolve) => {
        setTimeout(resolve, 500); // fake delay
    });

    return BEATLES_BIO;
}

async function getAlbums() {
    await new Promise((resolve) => {
        setTimeout(resolve, 3000); // fake delay
    });

    return BEATLES_ALBUMS;
}
