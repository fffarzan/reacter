import { useCurrentUser } from '../hooks';

export function Greeting() {
    const { currentUser } = useCurrentUser();

    return <p>You logged in as {currentUser?.firstName}.</p>;
}
