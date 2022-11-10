import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import MyReview from '../MyReview/MyReview';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);
    console.log(user);

    const handleDelete = id => {
        const agree = window.confirm(`are you sure you want to delete.`);

        if (agree) {
            //console.log('deleting user id :', user._id) 
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    //  console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Review deleted succesfully')
                        const remainingReview = reviews.filter(review => review._id !== id);
                        setReviews(remainingReview);

                    }
                });
        }

    }
    useEffect(() => {
        fetch(`http://localhost:5000/review?userEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user.email])
    return (
        <div>
            {
                reviews.map(review => <MyReview review={review} handleDelete={handleDelete}></MyReview>)
            }
        </div>
    );
};

export default MyReviews;