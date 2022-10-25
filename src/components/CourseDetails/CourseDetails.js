import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaUnlock, FaStar } from 'react-icons/fa';

const CourseDetails = () => {

    const course = useLoaderData();
    const { name, img, description, overview, rating } = course;
    console.log(course)

    return (
        <div className='container mx-auto max-w-screen-xl mb-8'>
            <div className="card bg-base-100 shadow-xl image-full rounded-b-none h-screen">
                <figure className='rounded-b-none'><img src={img} alt="" className='w-full rounded-2xl' /></figure>
                <div className="card-body justify-end gap-8">
                    <div className='flex flex-col gap-4'>
                        <h1 className="card-title items-end text-3xl drop-shadow-md">{name}</h1>
                        <p className='text-xl font-medium flex items-center'>Rating: {rating} <FaStar className='ml-2 text-amber-300'></FaStar></p>
                    </div>
                    <div className='p-6 md:p-8 backdrop-blur-sm bg-emerald-900/40 flex flex-col gap-5'>
                        <div>
                            <p className='text-xl font-medium mb-2'>Description:</p>
                            <p className='text-xl'>{description}</p>
                        </div>
                        <div>
                            <p className='text-xl font-medium mb-2'>Course Overview:</p>
                            <ul className='list-disc ml-8 text-lg'>
                                {
                                    overview.map((item, index) => <li key={index}>{item}</li>)
                                }
                            </ul>
                        </div>
                        <Link>
                            <button className='btn btn-primary mt-4'>Get Premium Access <FaUnlock className='ml-3'></FaUnlock></button>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default CourseDetails;