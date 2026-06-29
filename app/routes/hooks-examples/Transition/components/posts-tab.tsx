import { memo } from 'react';

const PostsTab = memo(() => {
    console.log('[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />'); // logs once

    let items = [];
    for (let i = 0; i < 500; i++) {
        items.push(<SlowPost key={i} index={i} />);
    }

    return <ul className="items">{items}</ul>;
});

function SlowPost({ index }: { index: number }) {
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {
        // does nothing for 1 ms per item
    }

    return <li className="item">Post #{index + 1}</li>;
}

export default PostsTab;
