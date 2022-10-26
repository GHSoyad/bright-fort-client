import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/AuthProvider';

const GoogleSignIn = ({ from }) => {
    const { googleSignIn, setErrorMessage } = useContext(UserContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then((result) => {
                setErrorMessage('')
                navigate(from, { replace: true })
            }).catch(error => {
                setErrorMessage(error.message)
            })
    }

    return (
        <button className='btn border-0 hover:bg-primary/80 w-full mt-8' onClick={handleGoogleSignIn}><FaGoogle className='font-medium text-lg mr-4'></FaGoogle> Continue with Google</button>
    );
};

export default GoogleSignIn;