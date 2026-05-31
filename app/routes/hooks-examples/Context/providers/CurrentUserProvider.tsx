import { useMemo, useState, type PropsWithChildren } from 'react';
import { CurrentUserContext } from '../contexts';
import type { User } from '../types';

export function CurrentUserProvider({ children }: PropsWithChildren) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    const contextValue = useMemo(
        () => ({
            currentUser,
            setCurrentUser,
        }),
        [currentUser, setCurrentUser],
    );

    return <CurrentUserContext value={contextValue}>{children}</CurrentUserContext>;
}
