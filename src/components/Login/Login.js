import React from 'react';
import { Link } from 'react-router-dom';
import GoogleSignIn from '../../firebase/GoogleSignIn';

const Login = () => {

    return (
        <div className='bg-base-100 container mx-auto max-w-screen-xl mt-20'>
            <div className='backdrop-blur-sm bg-white/10 max-w-md mx-auto p-8 rounded-lg text-xl'>
                <h1 className='text-3xl text-primary font-medium mb-12 text-center'>Login Here</h1>
                <div className="form-control w-full mb-2">
                    <label className="label">
                        <span>Your Email</span>
                    </label>
                    <input type="email" placeholder="Type here..." className="input input-bordered input-primary" />
                </div>
                <div className="form-control w-full mb-2">
                    <label className="label">
                        <span>Your Password</span>
                    </label>
                    <input type="password" placeholder="Type here..." className="input input-bordered input-primary" />
                </div>
                <button className='btn btn-primary w-full mt-6'>Login</button>
                <p className='text-base mt-4'>Don't have an account? <Link to='/register' className='text-primary font-medium'>Register.</Link></p>
                <GoogleSignIn></GoogleSignIn>
            </div>
        </div>
    );
};

export default Login;