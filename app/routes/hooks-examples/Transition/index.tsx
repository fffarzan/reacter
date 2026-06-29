// import { useState, useTransition, type ChangeEvent } from 'react';
// import { users } from './users';

import { Suspense, useState, useTransition } from 'react';
import Item from './components/item';
import Total from './components/total';
import { putQuantityApi } from './api';
import TabButton from './components/tab-button';
import ContactTab from './components/contact-tab';
import PostsTab from './components/posts-tab';
import AboutTab from './components/about-tab';
import './styles.css';
import BigSpinner from './components/big-spinner';
import Router from './components/router';
import AddCommentButton from './components/add-comment-botton';
import { ErrorBoundary } from 'react-error-boundary';

export default function Page() {
    // const [isPending, startTransition] = useTransition();
    // const [username, setUserName] = useState('');
    // const [userList, setUserList] = useState<string[]>([]);
    // function onChange(e: ChangeEvent<HTMLInputElement>) {
    //     setUserName(e.target.value);
    //     if (!e.target.value) {
    //         setUserList([]);
    //         return;
    //     }
    //     startTransition(() => {
    //         setUserList(users.filter((user) => user.includes(e.target.value)));
    //     });
    // }
    // return (
    //     <>
    //         <label>
    //             User Name:
    //             <input
    //                 placeholder="search a name ..."
    //                 type="text"
    //                 name="username"
    //                 id="username"
    //                 value={username}
    //                 onChange={onChange}
    //                 autoFocus
    //             />
    //         </label>
    //         <ul>
    //             {isPending
    //                 ? 'Loading...'
    //                 : userList.map((user, index) => <li key={index}>{user}</li>)}
    //         </ul>
    //     </>
    // );
    const [quantity, setQuantity] = useState(1);
    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState('about');

    // A common solution to this problem is to prevent the user from making changes while the quantity is updating. but it's not UX friendly, makes the app feel slow.

    const updateQuantityAction = async (newQuantity: number) => {
        startTransition(async () => {
            const savedQuantity = await putQuantityApi(newQuantity);

            // To access the pending state of a transition, call startTransition again.
            startTransition(() => {
                setQuantity(savedQuantity);
            });
        });
    };

    return (
        <>
            <h1>Checkout</h1>
            <Item action={updateQuantityAction} />
            <hr />
            <Total quantity={quantity} isPending={isPending} />

            <hr />
            <hr />
            <hr />

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
            {tab === 'about' && <AboutTab />}
            {tab === 'posts' && <PostsTab />}
            {tab === 'contact' && <ContactTab />}

            <br />
            <br />
            <br />

            <Suspense fallback={<BigSpinner />}>
                <Router />
            </Suspense>

            <br />
            <br />
            <br />

            <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
                <AddCommentButton />
            </ErrorBoundary>
        </>
    );
}
