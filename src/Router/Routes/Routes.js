import Blog from "../../Component/Blog/Blog";
import Login from "../../Component/Login/Login";
import ServiceDetails from "../../Component/ServiceDetails/ServiceDetails";
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
                element: <Home></Home>,
                loader: () => {
                    return fetch('http://localhost:5000/limitedservice');
                }
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => {
                    return fetch('http://localhost:5000/limitedservice');
                }
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services/',
                element: <Services></Services>,
                loader: () => {
                    return fetch('http://localhost:5000/services');
                }
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/services/${params.id}`);
                }
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