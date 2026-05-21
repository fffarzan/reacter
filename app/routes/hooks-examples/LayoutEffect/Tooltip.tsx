import { useRef, useLayoutEffect, useState, type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import TooltipContainer from './TooltipContainer';

export type TooltipPropsType = PropsWithChildren<{
    targetRect: any;
}>;

export default function Tooltip({ targetRect, children }: TooltipPropsType) {
    const ref = useRef<HTMLElement | null>(null);
    const [tooltipHeight, setTooltipHeight] = useState(0);

    useLayoutEffect(() => {
        const { height } = ref.current?.getBoundingClientRect();
        setTooltipHeight(height);
    }, []);

    // Uncomment this to see the diffrence!
    // useEffect(() => {
    //     const { height } = ref.current.getBoundingClientRect();
    //     setTooltipHeight(height);
    // }, []);

    // Notice that even though the Tooltip component has to render in two passes (first, with tooltipHeight initialized to
    // 0 and then with the real measured height), you only see the final result. This is why you need useLayoutEffect
    // instead of useEffect for this example.
    let tooltipX = 0;
    let tooltipY = 0;
    if (targetRect !== null) {
        tooltipX = targetRect.left;
        tooltipY = targetRect.top - tooltipHeight;

        // It doesn't fit above, so place below.
        if (tooltipY < 0) {
            tooltipY = targetRect.bottom;
        }
    }

    const Container = (
        <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
            {children}
        </TooltipContainer>
    );

    return createPortal(Container, document.body);
}
