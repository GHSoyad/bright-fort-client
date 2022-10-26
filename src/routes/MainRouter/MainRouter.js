import { createBrowserRouter } from "react-router-dom";
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
                element: <Home></Home>,
            },
            {
                path: '/courses',
                loader: () => fetch('http://localhost:5000/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/course/${params.id}`)
                },
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/checkout/:id',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/course/${params.id}`)
                },
                element: <PrivateRouter><Checkout></Checkout></PrivateRouter>
            },
            {
                path: '/faq'
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
    }
])

export default router;