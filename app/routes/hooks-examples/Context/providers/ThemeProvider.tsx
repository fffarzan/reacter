import { useMemo, useState, type PropsWithChildren } from 'react';
import type { Theme } from '../types';
import { ThemeContext } from '../contexts';

export function ThemeProvider({ children }: PropsWithChildren) {
    const [theme, setTheme] = useState<Theme>('dark');

    const contextValue = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme, setTheme],
    );

    return <ThemeContext value={contextValue}>{children}</ThemeContext>;
}
