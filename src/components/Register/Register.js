import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/AuthProvider';
import GoogleSignIn from '../../firebase/GoogleSignIn';

const Register = () => {

    const { emailRegistration, errorMessage, setErrorMessage } = useContext(UserContext);

    const handleUserRegistration = (event) => {
        event.preventDefault();
        const userName = event.target.name.value;
        const userEmail = event.target.email.value;
        const userPassword = event.target.password.value;

        if (!/(?=.*[A-Z])/.test(userPassword)) {
            setErrorMessage('Password must contain a UpperCase Letter');
            return;
        }
        if (!/(?=.*[a-z])/.test(userPassword)) {
            setErrorMessage('Password must contain a LowerCase Letter');
            return;
        }
        if (!/(?=.*[0-9])/.test(userPassword)) {
            setErrorMessage('Password must contain a Digit');
            return;
        }

        emailRegistration(userEmail, userPassword)
            .then(userCredential => {

            }).catch(error => {
                setErrorMessage(error.message)
            })
    }

    return (
        <div className='bg-base-100 container mx-auto max-w-screen-xl mt-20'>
            <form onSubmit={handleUserRegistration} className='backdrop-blur-sm bg-white/10 max-w-md mx-auto p-8 rounded-lg text-xl'>
                <h1 className='text-3xl text-primary font-medium mb-6 text-center'>Register Here</h1>
                {errorMessage &&
                    <p className='text-center mb-2 text-base text-red-500'>{errorMessage}</p>
                }
                <div className="form-control w-full mb-2">
                    <label className="label">
                        <span>Your Name</span>
                    </label>
                    <input name='name' type="text" placeholder="Type here..." className="input input-bordered input-primary" />
                </div>
                <div className="form-control w-full mb-2">
                    <label className="label">
                        <span>Your Email</span>
                    </label>
                    <input name='email' type="email" placeholder="Type here..." className="input input-bordered input-primary" />
                </div>
                <div className="form-control w-full mb-2">
                    <label className="label">
                        <span>Your Password</span>
                    </label>
                    <input name='password' type="password" placeholder="Type here..." className="input input-bordered input-primary" />
                </div>
                <button type='submit' className='btn btn-primary w-full mt-6'>Register</button>
                <p className='text-base mt-4'>Already have an account? <Link to='/login' className='text-primary font-medium'>Login.</Link></p>
                <GoogleSignIn></GoogleSignIn>
            </form>
        </div>
    );
};

export default Register;