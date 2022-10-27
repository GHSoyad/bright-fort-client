import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full bg-primary/30 mt-12 md:mt-16'>
            <div className='container px-2 md:px-4 xl:px-0 mx-auto max-w-screen-xl'>
                <div className='py-5 md:py-7'>
                    <div className='flex flex-col justify-center items-center gap-5 text-center'>
                        <h3 className='text-2xl font-bold'>Follow Us</h3>
                        <div className='flex items-center text-5xl text-primary gap-6'>
                            <a href="https://www.facebook.com/golam.sowad/" target="_blank" rel="noreferrer noopener"><FaFacebookF className='bg-neutral rounded-full p-2 hover:bg-primary/90 hover:text-white cursor-pointer drop-shadow-md'></FaFacebookF></a>
                            <a href="https://www.linkedin.com/in/ghsoyad/" target="_blank" rel="noreferrer noopener"><FaLinkedinIn className='bg-neutral rounded-full p-2 hover:bg-primary/90 hover:text-white cursor-pointer drop-shadow-md'></FaLinkedinIn></a>
                            <a href="https://github.com/GHSoyad" target="_blank" rel="noreferrer noopener"><FaGithub className='bg-neutral rounded-full p-2 hover:bg-primary/90 hover:text-white cursor-pointer drop-shadow-md'></FaGithub></a>
                        </div>
                    </div>
                </div>
                <p className='text-center pb-4'>Golam Hasnain Soyad | All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;