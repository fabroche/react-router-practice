import React, {useContext, useState} from "react";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {routeTypes} from "../../urls.jsx";

const adminList = ['Irisval', 'RetaxMaster', 'freddier']

const AuthContext = React.createContext()

function AuthProvider({children}) {
    const navigate = useNavigate()
    const [user, setUser] = useState(null);

    function login({username}) {
        const isAdmin = adminList.includes(username)
        setUser({username, isAdmin})
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
    const location = useLocation()
    console.log(location)
    if (!auth.user) {
        return <Navigate
            to={routeTypes.login}
        />
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