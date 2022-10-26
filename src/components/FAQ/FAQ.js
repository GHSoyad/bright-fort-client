import React from 'react';

const FAQ = () => {
    return (
        <div className='container px-2 md:px-4 xl:px-0 mx-auto max-w-screen-xl'>
            <div className='flex flex-col gap-2'>
                <div className="collapse collapse-arrow border border-base-300 bg-secondary/30 rounded-box">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-xl font-medium peer-checked:bg-secondary/50">
                        Are the courses Online?
                    </div>
                    <div className="collapse-content peer-checked:bg-secondary/50">
                        <p className='text-lg'>Yes All the courses are online.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-base-300 bg-secondary/30 rounded-box">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-xl font-medium peer-checked:bg-secondary/50">
                        Are there any live courses/classes?
                    </div>
                    <div className="collapse-content peer-checked:bg-secondary/50">
                        <p className='text-lg'>No, All the courses are prerecorded.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-base-300 bg-secondary/30 rounded-box">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-xl font-medium peer-checked:bg-secondary/50">
                        How do i know the course curriculum?
                    </div>
                    <div className="collapse-content peer-checked:bg-secondary/50">
                        <p className='text-lg'>You can check the course details page to know more about what the course offers</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-base-300 bg-secondary/30 rounded-box">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-xl font-medium peer-checked:bg-secondary/50">
                        Will i receive any certificates after finishing a course?
                    </div>
                    <div className="collapse-content peer-checked:bg-secondary/50">
                        <p className='text-lg'>No, Currently we are not offering any certificates.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-base-300 bg-secondary/30 rounded-box">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-xl font-medium peer-checked:bg-secondary/50">
                        How do i access my course?
                    </div>
                    <div className="collapse-content peer-checked:bg-secondary/50">
                        <p className='text-lg'>You can access courses from your profile.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;