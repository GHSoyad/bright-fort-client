import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import TopRatedCourses from '../TopRatedCourses/TopRatedCourses';

const Home = () => {
    const courses = useLoaderData();

    // Filter top rated courses 
    const getTopRatedCourses = (courses) => {
        const filtered = courses.sort((a, b) => b.rating - a.rating);
        return filtered;
    }

    const topRatedCourses = getTopRatedCourses(courses);

    return (
        <div className='container px-2 md:px-4 xl:px-0 mx-auto max-w-screen-xl'>
            <div className="card w-full bg-base-100 shadow-xl image-full max-h-[50vh]">
                <figure className='min-h-fit'><img className='w-full max-h-fit' src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" /></figure>
                <div className="card-body px-4 sm:px-8 max-h-[50vh] text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">BRIGHT FORT</h2>
                    <p className='text-lg md:text-xl font-medium py-4 md:py-8 md:px-20 text-white'>Social Learning Community – Explore, Learn, and Improve your skills with Bright Fort. Through this online learning medium, now everyone has the chance to learn!</p>
                    <Link to='/courses'>
                        <button className='btn btn-primary'>Get Started</button>
                    </Link>
                </div>
            </div>
            <div className='mt-14'>
                <h2 className='text-3xl mb-8 text-center font-medium'>Top Rated Courses</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
                    {
                        topRatedCourses.map(course => <TopRatedCourses key={course.id} course={course}></TopRatedCourses>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;