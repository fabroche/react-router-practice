import './App.css'
import {HashRouter, Route, Routes} from "react-router-dom";
import {Menu} from "./Components/Menu/Menu.jsx";
import {routes, routeTypes} from "./urls.jsx";
import {AuthProvider, AuthRoute, useAuth} from "./Components/Auth/auth.jsx";

function App() {
    return (
        <>
            <HashRouter>
                <AuthProvider>
                    <Menu/>
                        <AppRoutes/>
                </AuthProvider>
            </HashRouter>
        </>
    )
}

function AppRoutes() {
    const auth = useAuth()
     return (
         <Routes>
         {
             routes.map(route => {

                 if (route.to === routeTypes.profile) {
                     return <Route
                         key={route.to}
                         path={route.to}
                         element={
                             <AuthRoute>{route.element}</AuthRoute>
                         }/>
                 }

                 if (route.to === routeTypes.logout) {
                     return <Route
                         key={route.to}
                         path={route.to}
                         element={
                             <AuthRoute>{route.element}</AuthRoute>
                         }/>
                 }

                 if (!route.isPublic && !auth.user) return null;

                 if (route.hasNestedRoutes) {
                     return <Route key={route.to} path={route.to} element={route.element}>
                         {route.nestedRoutes.map(nestedRoute =>
                             <Route key={nestedRoute.to} path={nestedRoute.to}
                                    element={nestedRoute.element}/>
                         )}
                     </Route>
                 } else {
                     return <Route key={route.to} path={route.to} element={route.element}/>
                 }
             })
         }
         </Routes>
     )
}

export default App
