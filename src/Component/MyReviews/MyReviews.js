import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import MyReview from "../MyReview/MyReview";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleDelete = (id) => {
    const agree = window.confirm(`are you sure you want to delete.`);

    if (agree) {
      //console.log('deleting user id :', user._id)
      fetch(`https://painted-lady-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          //  console.log(data)
          if (data.deletedCount > 0) {
            alert("Review deleted succesfully");
            const remainingReview = reviews.filter(
              (review) => review._id !== id
            );
            setReviews(remainingReview);
          }
        });
    }
  };
  useEffect(() => {
    fetch(
      `https://painted-lady-server.vercel.app/review?userEmail=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, [user.email]);
  return (
    <div>
      {reviews.length ? (
        <div className=" bg-cover ">
          {reviews.length === 0 ? (
            <p className="text-6xl text-center mt-40">
              You haven't added any review yet. <br />
              <span className=" text-rose-600 text-2xl">
                To add review go to Services page.
              </span>{" "}
            </p>
          ) : (
            reviews.map((review) => (
              <MyReview review={review} handleDelete={handleDelete}></MyReview>
            ))
          )}
        </div>
      ) : (
        <progress className="progress w-full"></progress>
      )}
    </div>
  );
};

export default MyReviews;
