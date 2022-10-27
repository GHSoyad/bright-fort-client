import { GithubAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/AuthProvider';
import { FaGithub } from "react-icons/fa";

const GithubSignIn = ({ from }) => {

    const { githubSignIn, setLoading } = useContext(UserContext);
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();

    const handleGithubSignIn = () => {
        githubSignIn(githubProvider)
            .then(result => {
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <button className='btn border-0 hover:bg-primary/80 w-full mt-4' onClick={handleGithubSignIn}><FaGithub className='font-medium text-lg mr-4'></FaGithub> Continue with Github</button>
    );
};

export default GithubSignIn;