import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';


const ServiceDetails = () => {
    const service = useLoaderData();
    const { name, picture, rating, price, details } = service;
    console.log(service);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={picture} className="bg-white max-w-sm rounded-lg shadow-2xl w-1/2" alt='' />
                    <div className='w-1/2 pr-10'>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <div className='flex justify-between my-4'>
                            <p className='text-rose-600 text-3xl'>{price}</p>
                            <p className='text-rose-600 font-bold'><FaStar className=' ml-1 '></FaStar><span className='text-slate-400'>{rating}</span></p>
                        </div>
                        <p className="py-6 text-justify">{details}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            <div>

            </div>
        </div>
    );
};

export default ServiceDetails;