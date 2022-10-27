import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const course = useLoaderData();
    const { name, enrolled } = course;

    return (
        <div className='container px-2 md:px-4 xl:px-0 mx-auto max-w-screen-xl min-h-[calc(100vh_-_380px)] text-center'>
            <div className='flex flex-col gap-8 p-14 backdrop-blur-sm bg-emerald-900/40 rounded-xl'>
                <h1 className='text-3xl text-primary font-medium'>Congratulations!</h1>
                <h3 className='text-xl'>You have gained premium access to <span className='text-primary font-medium'>{name}.</span></h3>
                <h3 className='text-xl'>You are the <span className='text-primary font-medium'>{enrolled + 1}</span> student of this course</h3>
                <Link to='/courses'><button className='btn btn-primary'>Return to Courses</button></Link>
            </div>
        </div>
    );
};

export default Checkout;