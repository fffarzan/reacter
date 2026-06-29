import { useTransition, type PropsWithChildren } from 'react';

export type TabButtonProps = PropsWithChildren<{
    isActive: boolean;
    action: () => void;
}>;

export default function TabButton({ action, children, isActive }: TabButtonProps) {
    const [isPending, startTransition] = useTransition();

    if (isActive) {
        return <b>{children}</b>;
    }

    if (isPending) {
        return <b className="pending">{children}</b>;
    }

    const hanleButtonClick = async () => {
        startTransition(async () => {
            // allows it to be either sync or async.
            await action();
        });

        // If we go in this way, we can see that the changing the current selected tab will be depended to load PostsTab.
        // action();
    };

    return <button onClick={hanleButtonClick}>{children}</button>;
}
