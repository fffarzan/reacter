import { useState, useRef, type PropsWithChildren } from 'react';
import Tooltip from './Tooltip';

export type ButtonWithTooltipPropsType = PropsWithChildren<{
    tooltipContent: any;
}>;

export default function ButtonWithTooltip({ tooltipContent, ...rest }: ButtonWithTooltipPropsType) {
    const [targetRect, setTargetRect] = useState(null);
    const buttonRef = useRef(null);

    const onPointerEnter = () => {
        const rect = buttonRef.current.getBoundingClientRect();
        setTargetRect({
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
        });
    };

    const onPointerLeave = () => {
        setTargetRect(null);
    };

    return (
        <>
            <button
                {...rest}
                ref={buttonRef}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
            />
            {targetRect !== null && <Tooltip targetRect={targetRect}>{tooltipContent}</Tooltip>}
        </>
    );
}
