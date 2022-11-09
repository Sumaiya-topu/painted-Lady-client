import React from 'react';
import { Link } from 'react-router-dom';
import review from '../../assets/images/review.webp'

const ReviewForm = () => {
    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviewText = form.reviewText.value;
        console.log(reviewText);
        form.reset();
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={review} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Add Your reviews</h1>
                        <p className="py-6">It will help us to improve if you share your experience with us.</p>
                        <form onSubmit={handleReview} className='text-center'>
                            <input className=' block p-32 py-5 ' type="text" placeholder='Your thoughts here' name='reviewText' />
                            <div className="form-control mt-6">
                                <input className="btn btn-primary rounded-sm" type="submit" value="Post" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewForm;