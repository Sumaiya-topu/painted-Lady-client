import React from 'react';
import { Link, } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';


const Service = (params) => {
    const { _id, name, picture, price, rating, details } = params.service;

    return (
        <div>
            <div className='p-4'>
                <div className='flex justify-center'>
                    <div className=' bg-slate-300 mt-10 w-52 h-52 border rounded-full border-slate-900'>
                        <img src={picture} className=" w-full p-10 rounded-full" alt="" />
                    </div>
                </div>
                <div className=' lg:p-10 '>
                    <h1 className='text-2xl font-bold text-orange-400 text-center'>{name}</h1>
                    <div className='flex justify-between w-1/3 mx-auto my-4'>
                        <p className='text-rose-600 text-3xl'>{price}</p>
                        <p className='text-rose-600 font-bold'><FaStar className=' ml-1 '></FaStar><span className='text-slate-400'>{rating}</span></p>
                    </div>
                    <p className='lg:px-10 text-center'>{details.substring(0, 100)}... <Link to={`/services/${_id}`} className='text-rose-600'>See more</Link></p>
                    <div className='text-center p-10'><Link to={`/services/${_id}`} ><button className="btn btn-active btn-primary text-center text-white rounded-sm ">Get Appointment</button></Link></div>

                </div>
            </div>

        </div>
    );
};

export default Service;