import { useState, type PropsWithChildren } from 'react';
import { CurrentUserContext } from '../contexts';
import type { User } from '../types';

export function CurrentUserProvider({ children }: PropsWithChildren) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    return (
        <CurrentUserContext
            value={{
                currentUser,
                setCurrentUser,
            }}
        >
            {children}
        </CurrentUserContext>
    );
}
