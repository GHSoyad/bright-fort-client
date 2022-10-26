import React from 'react';
import { FaComment, FaEye, FaUser } from 'react-icons/fa';

const Blogs = () => {
    return (
        <div className='container px-2 md:px-4 xl:px-0 mx-auto max-w-screen-xl'>
            <h1 className='text-center text-primary text-3xl font-medium'>Blogs</h1>
            <div className='grid md:grid-cols-2 my-10 gap-5 lg:gap-8'>
                <div className='flex flex-col gap-6 bg-primary/30 p-5 rounded-xl justify-between text-lg'>
                    <div className='flex flex-col gap-5'>
                        <h3 className='text-2xl font-medium'>What is cors?</h3>
                        <div className='flex gap-3 items-center'>
                            <FaUser className='text-xl'></FaUser>
                            <p className='font-medium'>Golam Hasnain Soyad</p>
                        </div>
                        <p>
                            Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. We use it to make the api data public so that it can accessed freely from anywhere.
                        </p>
                    </div>
                    <div className='flex items-center gap-10 font-medium'>
                        <div className='flex gap-3 items-center'>
                            <FaEye className='text-xl'></FaEye>
                            <p>45</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <FaComment className='text-xl'></FaComment>
                            <p>23</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-6 bg-primary/30 p-5 rounded-xl justify-between text-lg'>
                    <div className='flex flex-col gap-5'>
                        <h3 className='text-2xl font-medium'>Why are you using firebase? What other options do you have to implement authentication?</h3>
                        <div className='flex gap-3 items-center'>
                            <FaUser className='text-xl'></FaUser>
                            <p className='font-medium'>Golam Hasnain Soyad</p>
                        </div>
                        <p>
                            Firebase is a set of hosting services for any type of application. It offers NoSQL and real-time hosting of databases, content, social authentication, and notifications, or services, such as a real-time communication server. I am using firebase primarily for user authentication and hosting, It provides a easy and secure way to authenticate users for my web app.
                            Some of the other options that can be used to implement authentication are Auth0, MongoDB, Okta etc.
                        </p>
                    </div>
                    <div className='flex items-center gap-10 font-medium'>
                        <div className='flex gap-3 items-center'>
                            <FaEye className='text-xl'></FaEye>
                            <p>53</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <FaComment className='text-xl'></FaComment>
                            <p>45</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-6 bg-primary/30 p-5 rounded-xl justify-between text-lg'>
                    <div className='flex flex-col gap-5'>
                        <h3 className='text-2xl font-medium'>How does the private route work?</h3>
                        <div className='flex gap-3 items-center'>
                            <FaUser className='text-xl'></FaUser>
                            <p className='font-medium'>Golam Hasnain Soyad</p>
                        </div>
                        <p>
                            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated they will be redirected to the login page and the user can only access the authenticated routes If they are authenticated (Logged in).
                        </p>
                    </div>
                    <div className='flex items-center gap-10 font-medium'>
                        <div className='flex gap-3 items-center'>
                            <FaEye className='text-xl'></FaEye>
                            <p>43</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <FaComment className='text-xl'></FaComment>
                            <p>33</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-6 bg-primary/30 p-5 rounded-xl justify-between text-lg'>
                    <div className='flex flex-col gap-5'>
                        <h3 className='text-2xl font-medium'>What is Node? How does Node work?</h3>
                        <div className='flex gap-3 items-center'>
                            <FaUser className='text-xl'></FaUser>
                            <p className='font-medium'>Golam Hasnain Soyad</p>
                        </div>
                        <p>
                            Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. It is used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                        </p>
                    </div>
                    <div className='flex items-center gap-10 font-medium'>
                        <div className='flex gap-3 items-center'>
                            <FaEye className='text-xl'></FaEye>
                            <p>34</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <FaComment className='text-xl'></FaComment>
                            <p>28</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;