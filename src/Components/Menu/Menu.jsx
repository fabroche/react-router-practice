import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {routes, routeTypes} from "../../urls.jsx";
import {useAuth} from "../Auth/auth.jsx";

function Menu(props) {

    const auth = useAuth()

    const isAuthenticated = auth.user !== null

    return (
        <nav>
            <ul style={
                {
                    listStyle: "none",
                    display: "flex",
                    gap: '10px',
                    justifyContent: "center",
                    alignItems: "center"
                }
            }>
                {routes.map(route => {

                    if (!route.isPublic && !auth.user) return null;
                    if (route.isPublic && auth.user && route.to === routeTypes.login) return null;

                    if (route.text !== 'Not Found') {

                        return <li key={route.to}>
                            <NavLink
                                to={route.to}
                                style={({isActive}) => ({
                                    color: isActive ? 'red' : 'blue',
                                })}
                            >{route.text}</NavLink>
                        </li>
                    }
                })}


            </ul>
        </nav>
    );
}

export {Menu};