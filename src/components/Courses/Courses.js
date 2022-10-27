import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();

    return (
        <div className='container px-2 md:px-4 xl:px-0 mx-auto max-w-screen-xl md:grid grid-cols-[280px_minmax(0,_1fr)] gap-6 mb-12'>
            <div className='backdrop-blur-sm bg-primary/20 mb-6 md:mb-0 p-4 rounded-lg relative'>
                <div className='sticky top-4 flex flex-col gap-5'>
                    {
                        courses.map(course => <Link to={`/course/${course.id}`} key={course.id}><button className='btn glass h-16'>{course.name}</button></Link>)
                    }
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-lg'>
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;