import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../components/Blogs/Blogs";
import Checkout from "../../components/Checkout/Checkout";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Courses from "../../components/Courses/Courses";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Main from "../../layouts/Main/Main";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://bright-fort-server.vercel.app/courses'),
                element: <Home></Home>,
            },
            {
                path: '/courses',
                loader: () => fetch('https://bright-fort-server.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                loader: ({ params }) => {
                    return fetch(`https://bright-fort-server.vercel.app/course/${params.id}`)
                },
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/checkout/:id',
                loader: ({ params }) => {
                    return fetch(`https://bright-fort-server.vercel.app/course/${params.id}`)
                },
                element: <PrivateRouter><Checkout></Checkout></PrivateRouter>
            },
            {
                path: '/faq'
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;