import { createContext } from 'react';
import type { User } from '../types';

export type CurrentUserContextType = {
    currentUser: User | null;
    setCurrentUser?: (user: User) => void;
};

export const CurrentUserContext = createContext<CurrentUserContextType | null>(null);
