import { type PropsWithChildren } from 'react';
import { useTheme } from '../hooks';

export type ButtonPropsType = PropsWithChildren<{
    onClick?: () => void;
    disabled?: boolean;
}>;

export function Button({ children, onClick, disabled }: ButtonPropsType) {
    const { theme } = useTheme();

    return (
        <button className={`button-${theme}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}
