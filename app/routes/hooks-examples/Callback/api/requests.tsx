import type { PostData } from './types';

export function post(url: string, data: PostData) {
    // Imagine this sends a request...
    console.log('POST /' + url);
    console.log(data);
}
