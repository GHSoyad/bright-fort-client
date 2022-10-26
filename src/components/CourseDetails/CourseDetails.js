import React, { createRef, useEffect, useRef, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaUnlock, FaStar, FaDownload } from 'react-icons/fa';
import Pdf from "react-to-pdf";

const CourseDetails = () => {

    const course = useLoaderData();
    const { name, img, description, overview, rating, id } = course;

    const pdfRef = createRef();

    // PDF size generator
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const elementRef = useRef(null);
    useEffect(() => {
        setWidth(elementRef.current.getBoundingClientRect().width);
        setHeight(elementRef.current.getBoundingClientRect().height);
    }, []);

    const options = {
        unit: 'px',
        hotfixes: ["px_scaling"],
        format: [width, height]
    };

    return (
        <div className='container mx-auto max-w-screen-xl mb-8'>
            <div ref={pdfRef} className="card bg-base-100 relative">
                <Pdf targetRef={pdfRef} filename={`${name}.pdf`} options={options}>
                    {({ toPdf }) => <button onClick={toPdf} className='text-primary text-2xl p-2 rounded-full absolute top-0 right-0 z-50 hover:bg-secondary/20'><FaDownload></FaDownload></button>}
                </Pdf>

                <div ref={elementRef}>
                    <div className="card-body justify-end gap-0 p-0">
                        <div className='flex flex-col gap-4'>
                            <h1 className="card-title items-end text-3xl drop-shadow-md pr-12">{name}</h1>
                            <p className='text-xl font-medium flex items-center'>Rating: {rating} <FaStar className='ml-2 text-amber-300'></FaStar></p>
                            <img src={img} alt="" className='w-full' />
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
                            <Link to={`/checkout/${id}`}>
                                <button className='btn btn-primary mt-4'>Get Premium Access <FaUnlock className='ml-3'></FaUnlock></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;