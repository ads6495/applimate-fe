import {createBrowserRouter} from "react-router-dom";
import Login from "./Views/Login";
import Register from "./Views/Register";
import NotFound from "./Views/NotFound";
import Home from "./Views/Home";
import GuestLayout from "./Views/GuestLayout";
import Main from "./Views/Main";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: "home",
                element: <Home/>
            }
        ],
    },
    {
        path: '/guest',
        element: <GuestLayout/>,
        children: [
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export default router;