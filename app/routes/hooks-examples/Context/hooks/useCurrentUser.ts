import { useContext } from 'react';
import { CurrentUserContext } from '../contexts';

export function useCurrentUser() {
    const context = useContext(CurrentUserContext);

    if (!context) {
        throw new Error(`context must be used within a Provider`);
    }

    return context;
}
