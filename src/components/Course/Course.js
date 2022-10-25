import React from 'react';

const Course = ({ course }) => {
    console.log(course)
    const { name, img } = course;
    return (
        <div className="card glass">
            <figure><img src={img} alt="" className='h-44 w-full object-cover' /></figure>
            <div className="card-body justify-between">
                <h2 className="card-title">{name}</h2>
                <div className='pt-2'>
                    <button className='btn btn-primary w-full'>Get Course</button>
                </div>
            </div>
        </div>
    );
};

export default Course;