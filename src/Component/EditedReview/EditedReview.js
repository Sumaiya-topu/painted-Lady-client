import React from 'react';
import { Link } from 'react-router-dom';

const EditedReview = () => {

    return (
        <div className=' h-screen '>
            <div className='flex flex-col w-1/2 pt-40 mx-auto'>
                <textarea className='block text-center text-slate-900' type="text" name="editedReview" placeholder='Your review' />
                <Link className='btn btn-outline rounded-sm'>Update Review</Link>
            </div>
        </div>
    );
};

export default EditedReview;