import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/AuthProvider';

const GoogleSignIn = ({ from }) => {
    const { googleSignIn, setLoading } = useContext(UserContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then((result) => {
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <button className='btn border-0 hover:bg-primary/80 w-full mt-8' onClick={handleGoogleSignIn}><FaGoogle className='font-medium text-lg mr-4'></FaGoogle> Continue with Google</button>
    );
};

export default GoogleSignIn;