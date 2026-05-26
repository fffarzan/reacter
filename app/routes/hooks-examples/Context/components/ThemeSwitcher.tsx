import { useTheme } from '../hooks';

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <label>
            <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={(e) => {
                    setTheme(e.target.checked ? 'dark' : 'light');
                }}
            />
            Use dark mode
        </label>
    );
}
