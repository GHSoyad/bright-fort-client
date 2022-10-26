import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/AuthProvider';
import GithubSignIn from '../../firebase/GithubSignIn';
import GoogleSignIn from '../../firebase/GoogleSignIn';

const Login = () => {

    const { userInfo, emailSignIn, errorMessage, setErrorMessage, setLoading } = useContext(UserContext);
    const navigate = useNavigate()
    if (userInfo && userInfo.uid) {
        navigate('/')
    }
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleUserSignIn = (event) => {
        event.preventDefault();
        const userEmail = event.target.email.value;
        const userPassword = event.target.password.value;

        emailSignIn(userEmail, userPassword)
            .then(result => {
                const user = result.user;
                setErrorMessage('')
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                } else {
                    toast.error('Please verify email!')
                }
            })
            .catch(error => {
                setErrorMessage(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className='bg-base-100 container mx-auto max-w-screen-xl mt-20'>
            <div className='backdrop-blur-sm bg-white/10 max-w-md mx-auto p-8 rounded-lg text-xl'>
                <form onSubmit={handleUserSignIn}>
                    <h1 className='text-3xl text-primary font-medium mb-6 text-center'>Login Here</h1>
                    {
                        errorMessage &&
                        <p className='text-center mb-2 text-base text-red-500'>{errorMessage}</p>
                    }
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span>Your Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Type here..." className="input input-bordered input-primary" required />
                    </div>
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span>Your Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Type here..." className="input input-bordered input-primary" required />
                    </div>
                    <button type='submit' className='btn btn-primary w-full mt-6'>Login</button>
                    <p className='text-base mt-4 text-center'>Don't have an account? <Link to='/register' className='text-primary font-medium'>Register.</Link></p>
                </form>
                <GoogleSignIn from={from}></GoogleSignIn>
                <GithubSignIn from={from}></GithubSignIn>
            </div>
        </div>
    );
};

export default Login;