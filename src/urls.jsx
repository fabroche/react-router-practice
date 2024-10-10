import {HomePage} from "./Pages/HomePage/HomePage.jsx";
import {BlogPage} from "./Pages/BlogPage/BlogPage.jsx";
import {BlogPost} from "./Components/BlogPost.jsx";
import {LoginPage} from "./Pages/LoginPage/LoginPage.jsx";
import {LogoutPage} from "./Pages/LogoutPage/LogoutPage.jsx";
import {ProfilePage} from "./Pages/ProfilePage/ProfilePage.jsx";

export const routes = [
    {to: '/', text: 'Home', element: <HomePage/>, hasNestedRoutes: false, nestedRoutes: [], isPublic: true},
    {to: '/blog', text: 'Blog', element: <BlogPage/>, hasNestedRoutes: true, nestedRoutes: [
        {to: ':slug', element: <BlogPost/>}
        ], isPublic: true},
    {to: '/login', text: 'Login', element: <LoginPage/>, hasNestedRoutes: false, nestedRoutes: [], isPublic: true},
    {to: '/logout', text: 'Logout', element: <LogoutPage/>, hasNestedRoutes: false, nestedRoutes: [], isPublic: false},
    {to: '/profile', text: 'Profile', element: <ProfilePage/>, hasNestedRoutes: false, nestedRoutes: [], isPublic: false},
    {to: '*', text: 'Not Found', element: <p>404 Not Found</p>, hasNestedRoutes: false, nestedRoutes: [], isPublic: true},
]

export const routeTypes = {
    home: '/',
    blog: '/blog',
    login: '/login',
    logout: '/logout',
    profile: '/profile'
}