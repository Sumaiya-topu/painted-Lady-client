import Blog from "../../Component/Blog/Blog";
import Login from "../../Component/Login/Login";
import Services from "../../Component/Services/Services";
import Home from "../../Component/Shared/Home/Home";
import SignUp from "../../Component/SignUp/SignUp";
import Main from "../../Layout/Main";

const { createBrowserRouter } = require("react-router-dom");

//create router
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]

    }
])

export default router;