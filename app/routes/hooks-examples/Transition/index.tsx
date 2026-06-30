// import { useState, useTransition, type ChangeEvent } from 'react';
// import { users } from './users';

import { Suspense } from 'react';
import './styles.css';
import Router from './components/router';
import { SpinnerFallback } from './common/dls';

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

    return (
        <Suspense fallback={<SpinnerFallback />}>
            <Router />
        </Suspense>
    );
}
