import { useState } from 'react';
import { useCurrentUser } from '../hooks';
import { Button } from './Button';

export function LoginForm() {
    const { setCurrentUser } = useCurrentUser();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const canLogin = firstName.trim() !== '' && lastName.trim() !== '';

    return (
        <>
            <label>
                First name{': '}
                <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </label>
            <label>
                Last name{': '}
                <input required value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </label>
            <Button
                disabled={!canLogin}
                onClick={() =>
                    setCurrentUser({
                        firstName,
                        lastName,
                    })
                }
            >
                Log in
            </Button>
            {!canLogin && <i>Fill in both fields.</i>}
        </>
    );
}
