import Home from "../../Component/Shared/Home/Home";
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
            }
        ]

    }
])

export default router;