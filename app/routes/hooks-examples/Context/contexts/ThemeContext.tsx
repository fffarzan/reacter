import { createContext } from 'react';
import type { Theme } from '../types';

export type ThemeContextType = {
    theme: Theme | null;
    setTheme?: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
