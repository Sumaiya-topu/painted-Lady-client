import AddService from "../../Component/AddService/AddService";
import Blog from "../../Component/Blog/Blog";
import EditedReview from "../../Component/EditedReview/EditedReview";
import Login from "../../Component/Login/Login";
import MyReviews from "../../Component/MyReviews/MyReviews";
import PrivateRoute from "../../Component/PrivateRoute/PrivateRoute";
import ReviewForm from "../../Component/ReviewForm/ReviewForm";
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
            },
            {
                path: '/services/:id/review',
                element: <PrivateRoute><ReviewForm></ReviewForm></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/services/${params.id}`);
                }
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/myreviews/editReview/:id',
                element: <PrivateRoute><EditedReview></EditedReview></PrivateRoute>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/review/${params.id}`)
                }

            },
            {
                path: '/addservice',
                element: <AddService></AddService>,
            }
        ]

    }
])

export default router;