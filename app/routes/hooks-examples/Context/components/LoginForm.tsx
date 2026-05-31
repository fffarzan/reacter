import { useState } from 'react';
import { useCurrentUser } from '../hooks';
import { Button } from './Button';
import { ThemeContext } from '../contexts';

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
            {/* overriding context */}
            <ThemeContext value={{ theme: 'light' }}>
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
            </ThemeContext>
            {!canLogin && <i>Fill in both fields.</i>}
        </>
    );
}
