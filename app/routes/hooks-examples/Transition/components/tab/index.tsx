import { useState } from 'react';
import TabButton from './tab-button';
import About from './about';
import Posts from './posts';
import Contact from './contact';

export default function Tab() {
    const [tab, setTab] = useState('about');

    return (
        <>
            <TabButton isActive={tab === 'about'} action={() => setTab('about')}>
                About
            </TabButton>
            <TabButton isActive={tab === 'posts'} action={() => setTab('posts')}>
                Posts (slow)
            </TabButton>
            <TabButton isActive={tab === 'contact'} action={() => setTab('contact')}>
                Contact
            </TabButton>
            <hr />
            {tab === 'about' && <About />}
            {tab === 'posts' && <Posts />}
            {tab === 'contact' && <Contact />}
        </>
    );
}
