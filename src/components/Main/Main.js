import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;