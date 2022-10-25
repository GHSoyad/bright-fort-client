import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, name, img } = course;
    return (
        <div className="card card-compact glass">
            <figure><img src={img} alt="" className='h-44 w-full object-cover' /></figure>
            <div className="card-body justify-between">
                <h2 className="card-title">{name}</h2>
                <div className='pt-2'>
                    <Link to={`/course/${id}`}><button className='btn btn-primary w-full'>Get Course</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Course;