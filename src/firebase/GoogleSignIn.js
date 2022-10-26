import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/AuthProvider';

const GoogleSignIn = () => {
    const { googleSignIn } = useContext(UserContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            }).catch(error => {
                console.log(error.message)
            })
    }

    return (
        <button className='btn border-0 hover:bg-primary w-full mt-8' onClick={handleGoogleSignIn}><FaGoogle className='font-medium text-lg mr-4'></FaGoogle> Continue with Google</button>
    );
};

export default GoogleSignIn;