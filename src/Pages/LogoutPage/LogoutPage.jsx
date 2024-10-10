import React from 'react';
import {useAuth} from "../../Components/Auth/auth.jsx";

function LogoutPage(props) {
    const auth = useAuth()

    function logout(e) {
        e.preventDefault();
        auth.logout();
    }
    
    return (
        <>
            <h1>LogoutPage</h1>

            <form onSubmit={logout}>
                <label>¿Segura de que quieres desloguearte?</label>

                <button>Logout</button>
            </form>

        </>
    );
}

export {LogoutPage};