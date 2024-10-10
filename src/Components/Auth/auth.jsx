import React, {useContext, useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {routeTypes} from "../../urls.jsx";

const AuthContext = React.createContext()

function AuthProvider({children}) {
    const navigate = useNavigate()
    const [user, setUser] = useState(null);

    function login({username}) {
        setUser({username})
        navigate(routeTypes.profile)
    }

    function logout() {
        setUser(null)
        navigate(routeTypes.home)
    }

    const auth = {user, login, logout};

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

function AuthRoute(props) {
    const auth = useAuth()

    if (!auth.user) {
        return <Navigate to={routeTypes.login}/>
    }

    return props.children
}

function useAuth() {
    return useContext(AuthContext);
}

export {
    AuthProvider,
    // eslint-disable-next-line react-refresh/only-export-components
    useAuth,
    AuthRoute
}