import {useContext} from 'react';
import {RoutesContext} from "./routesContext.jsx";

function useRoutes() {
    return useContext(RoutesContext);
}

export {useRoutes}