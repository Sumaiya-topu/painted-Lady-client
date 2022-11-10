import React from 'react';

const UserReview = (params) => {
    const { userName, userPhoto, reviewText } = params.review;
    return (
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
        </div>
    );
};

export default UserReview;