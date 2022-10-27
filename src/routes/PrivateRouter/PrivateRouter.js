import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/AuthProvider';
import { FaSpinner } from "react-icons/fa";

const PrivateRouter = ({ children }) => {

    const { userInfo, loading } = useContext(UserContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className='text-center font-medium flex justify-center items-center text-xl min-h-[calc(100vh_-_380px)]'>
                <FaSpinner className="animate-spin mr-3 text-primary text-3xl"></FaSpinner>
                Logging in...
            </div>
        )
    }

    if (userInfo && userInfo.uid) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRouter;