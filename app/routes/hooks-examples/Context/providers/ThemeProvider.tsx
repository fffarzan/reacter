import { useState, type PropsWithChildren } from 'react';
import type { Theme } from '../types';
import { ThemeContext } from '../contexts';

export function ThemeProvider({ children }: PropsWithChildren) {
    const [theme, setTheme] = useState<Theme>('dark');

    return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
}
