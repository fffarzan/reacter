import { useState } from 'react';
import Product from './components/Product';

export default function Page() {
    const [isDark, setIsDark] = useState(false);

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={isDark}
                    onChange={(e) => setIsDark(e.target.checked)}
                />
                Dark mode
            </label>
            <hr />
            <Product referrerId="wizard_of_oz" productId="123" theme={isDark ? 'dark' : 'light'} />
        </>
    );
}
