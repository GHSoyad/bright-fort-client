import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster></Toaster>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Main;