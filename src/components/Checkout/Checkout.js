import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const course = useLoaderData();
    const { name } = course;

    return (
        <div className='container mx-auto max-w-screen-xl text-center'>
            <div className='flex flex-col mt-16 gap-8 p-14 backdrop-blur-sm bg-emerald-900/40 rounded-xl'>
                <h1 className='text-3xl text-primary font-medium'>Congratulations!</h1>
                <h3 className='text-xl'>You have gained premium access to <span className='text-primary font-medium'>{name}.</span></h3>
            </div>
        </div>
    );
};

export default Checkout;