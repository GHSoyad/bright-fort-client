import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();

    return (
        <div className='container mx-auto max-w-screen-xl grid grid-cols-[300px_minmax(900px,_1fr)] gap-8 mb-12'>
            <div className='border-2 border-primary p-4 rounded-lg relative'>
                <div className='sticky top-4 flex flex-col gap-5'>
                    {
                        courses.map(course => <Link key={course.id}><button className='btn glass'>{course.name}</button></Link>)
                    }
                </div>
            </div>
            <div className='grid grid-cols-3 gap-6 px-4 rounded-lg'>
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;