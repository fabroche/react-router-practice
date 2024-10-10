import React, {useState} from 'react';
import {useAuth} from "../../Components/Auth/auth.jsx";
import {Navigate} from "react-router-dom";
import {routeTypes} from "../../urls.jsx";

function LoginPage(props) {
    const auth = useAuth()

    const [username, setUsername] = useState('');

    function handleOnChange(e, setState) {
        setState(e.target.value)
    }

    function login(e) {
        e.preventDefault();
        auth.login({username})
    }

    if (auth.user) {
        return <Navigate to={routeTypes.profile}/>
    }

    return (
        <>
        <h1>LoginPage</h1>

            <form onSubmit={login}>
                <label htmlFor={'username'}>Username</label>
                <input
                    value={username}
                    type="text"
                    name={'username'}
                    onChange={(e) => handleOnChange(e, setUsername)}
                />

                <button>Login</button>
            </form>

        </>
    );
}

export {LoginPage};