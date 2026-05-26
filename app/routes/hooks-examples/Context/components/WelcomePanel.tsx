import { useCurrentUser } from '../hooks';
import { Greeting } from './Greeting';
import { LoginForm } from './LoginForm';
import { Panel } from './Panel';

export function WelcomePanel() {
    const { currentUser } = useCurrentUser();

    return <Panel title="Welcome">{currentUser !== null ? <Greeting /> : <LoginForm />}</Panel>;
}
