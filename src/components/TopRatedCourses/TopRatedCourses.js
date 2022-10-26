import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopRatedCourses = ({ course }) => {
    const { id, name, img, rating } = course;
    return (
        <div className="card glass w-full bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white">{name}</h2>
                <p className='flex items-center text-xl gap-2 font-medium py-2 text-white'>Rating: {rating} <FaStar className='text-amber-300'></FaStar></p>
                <Link to={`/course/${id}`}><button className="btn btn-primary w-full">Buy Now</button></Link>
            </div>
        </div>
    );
};

export default TopRatedCourses;