import React from 'react';
import {useAuth} from "../../Components/Auth/auth.jsx";

function ProfilePage(props) {
    const auth = useAuth()

    return (
        <>
        <h1>Profile</h1>
        <p>Welcome, {auth.user.username}</p>
        </>
    );
}

export {ProfilePage};