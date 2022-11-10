import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import MyReview from '../MyReview/MyReview';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);
    console.log(user);
    useEffect(() => {
        fetch(`http://localhost:5000/review?userEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user.email])
    return (
        <div>
            {
                reviews.map(review => <MyReview review={review}></MyReview>)
            }
        </div>
    );
};

export default MyReviews;