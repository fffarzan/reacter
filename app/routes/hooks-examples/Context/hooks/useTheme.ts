import { useContext } from 'react';
import { ThemeContext } from '../contexts';

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(`context must be used within a Provider`);
    }

    return context;
}
