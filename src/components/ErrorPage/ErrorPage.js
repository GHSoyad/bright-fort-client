import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='container mx-auto max-w-screen-lg relative h-screen'>
            <div className='h-3/4 bg-primary/20 absolute top-1/2 -translate-y-1/2 rounded-xl mx-4 md:mx-8 xl:mx-0 '>
                <div className='flex flex-col gap-5 p-10 text-center justify-between h-full'>
                    <h1 className='text-[120px] md:text-[160px] lg:text-[220px] font-extrabold leading-tight'>404</h1>
                    <h3 className='text-3xl md:text-4xl lg:text-5xl font-medium'>OOPS! NOTHING WAS FOUND</h3>
                    <p className='text-2xl md:text-2xl'>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                    <Link to='/'><button className='btn btn-primary'>Return to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;