import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyReviews = (params) => {
    console.log(params)
    const { handleDelete, review } = params;
    const { _id, post_id, reviewText, userName, userPhoto } = params.review;
    console.log(post_id);
    const [service, setServices] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/services/${post_id}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [post_id])
    return (
        <div>
            <div className='flex flex-col jusrify-center shadow-xl lg:grid grid-cols-2 mt-28'>
                <div className='p-4 lg:ml-28'>
                    <div className=''>
                        <div className=' bg-slate-300 mt-10 w-52 h-52 border rounded-full border-slate-900'>
                            <img src={service.picture} className=" w-full p-10 rounded-full" alt="" />
                        </div>
                    </div>
                    <div className=' lg:p-10 '>
                        <h1 className='text-2xl font-bold text-orange-400'>{service.name}</h1>
                        <div className='flex  my-4'>
                            <p className='text-rose-600 text-3xl'>{service.price}</p>
                            <p className='ml-10 text-rose-600 font-bold'><FaStar className=' '></FaStar><span className='text-slate-400'>{service.rating}</span></p>
                        </div>
                    </div>
                </div>

                <div className='bg-neutral w-full mt-2 p-5'>
                    <div className='flex'>
                        <img className='h-12 w-12 rounded-full' src={userPhoto} alt="" />
                        <div className=' ml-3 '>
                            <h1 className='text-xl font-bold text-rose-600'>{userName}</h1>
                            <div className='' >
                                <p >{reviewText}</p>
                            </div>
                        </div>
                    </div>
                    <div className=' text-end '>
                        <button className="btn btn-outline mr-2"><Link to={`/myreviews/editReview/${_id}`} value={review}>Edit</Link></button>
                        <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error">Delete</button>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default MyReviews;