import { memo } from 'react';
import SlowItem from './SlowItems';

export type SlowListPropsType = {
    text: string;
};

export const SlowList = memo(function SlowList({ text }: SlowListPropsType) {
    // Log once. The actual slowdown is inside SlowItem.
    console.log('[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />');

    let items = [];
    for (let i = 0; i < 250; i++) {
        items.push(<SlowItem key={i} text={text} />);
    }

    return <ul>{items}</ul>;
});
