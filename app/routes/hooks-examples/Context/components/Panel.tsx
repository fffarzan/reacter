import { type PropsWithChildren } from 'react';
import { useTheme } from '../hooks';

export type PanelPropsType = PropsWithChildren<{
    title: string;
}>;

export function Panel({ title, children }: PanelPropsType) {
    const { theme } = useTheme();

    return (
        <section className={`panel-${theme}`}>
            <h1>{title}</h1>
            {children}
        </section>
    );
}
