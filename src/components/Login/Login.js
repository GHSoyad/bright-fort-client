import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/AuthProvider';
import GoogleSignIn from '../../firebase/GoogleSignIn';

const Login = () => {

    const { userInfo, emailSignIn } = useContext(UserContext);
    const navigate = useNavigate()
    if (userInfo && userInfo.uid) {
        navigate('/')
    }

    const handleUserSignIn = (event) => {
        event.preventDefault();
        const userEmail = event.target.email.value;
        const userPassword = event.target.password.value;

        emailSignIn(userEmail, userPassword)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='bg-base-100 container mx-auto max-w-screen-xl mt-20'>
            <form onSubmit={handleUserSignIn} className='backdrop-blur-sm bg-white/10 max-w-md mx-auto p-8 rounded-lg text-xl'>
                <h1 className='text-3xl text-primary font-medium mb-12 text-center'>Login Here</h1>
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
                <p className='text-base mt-4'>Don't have an account? <Link to='/register' className='text-primary font-medium'>Register.</Link></p>
                <GoogleSignIn></GoogleSignIn>
            </form>
        </div>
    );
};

export default Login;