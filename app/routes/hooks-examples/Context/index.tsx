import { ThemeSwitcher, WelcomePanel } from './components';
import { CurrentUserProvider, ThemeProvider } from './providers';
import './assets/style.css';

export default function Page() {
    return (
        <ThemeProvider>
            <CurrentUserProvider>
                <WelcomePanel />
                <ThemeSwitcher />
            </CurrentUserProvider>
        </ThemeProvider>
    );
}
