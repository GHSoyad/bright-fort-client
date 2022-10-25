import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div>
            Home{courses.length}
        </div>
    );
};

export default Home;