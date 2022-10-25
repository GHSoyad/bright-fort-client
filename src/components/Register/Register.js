import React from 'react';
import { Link } from 'react-router-dom';
import GoogleSignIn from '../../firebase/GoogleSignIn';

const Register = () => {
    return (
        <div className='bg-base-100 container mx-auto max-w-screen-xl mt-20'>
            <div className='backdrop-blur-sm bg-white/10 max-w-md mx-auto p-8 rounded-lg text-xl'>
                <h1 className='text-3xl text-primary font-medium mb-12 text-center'>Register Here</h1>
                <div className="form-control w-full mb-2">
                    <label className="label">
                        <span>Your Name</span>
                    </label>
                    <input type="text" placeholder="Type here..." className="input input-bordered input-primary" />
                </div>
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
                <button className='btn btn-primary w-full mt-6'>Register</button>
                <p className='text-base mt-4'>Already have an account? <Link to='/login' className='text-primary font-medium'>Login.</Link></p>
                <GoogleSignIn></GoogleSignIn>
            </div>
        </div>
    );
};

export default Register;