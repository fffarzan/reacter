import type { PropsWithChildren } from 'react';

export type PanelProps = PropsWithChildren;

export default function Panel({ children }: PanelProps) {
    return <section className="panel">{children}</section>;
}
