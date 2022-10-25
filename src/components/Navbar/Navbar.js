import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 container mx-auto max-w-screen-xl">
            <div className="flex-1">
                <Link to='/'><img src="logo.png" alt="" className='max-w-[260px] rounded' /></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 gap-2">
                    <li><NavLink to='/courses'>Courses</NavLink></li>
                    <li><NavLink to='/faq'>FAQ</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                    <li><NavLink to='/register'>Register</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;