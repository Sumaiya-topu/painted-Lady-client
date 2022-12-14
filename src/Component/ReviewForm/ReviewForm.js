import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import review from "../../assets/images/review.webp";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../hooks/useTitle";

const ReviewForm = () => {
  const navigate = useNavigate();
  useTitle("Add-review");
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { _id } = service;
  console.log(user);
  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(form);
    const userReview = {
      post_id: _id,
      userName: user.displayName,
      userPhoto: user.photoURL,
      userEmail: user.email,
      reviewText: form.reviewText.value,
    };
    console.log(userReview);
    fetch("https://painted-lady-server.vercel.app/services/addreview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Review added succesfully.");
          event.target.reset();
        }
        navigate(`/services/${_id}`);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={review} className="" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Add Your reviews</h1>
            <p className="py-6">
              It will help us to improve if you share your experience with us.
            </p>
            <form onSubmit={handleReview} className="text-center">
              <input
                className=" block  p-24 lg:p-32 py-5 "
                type="text"
                placeholder="Your thoughts here"
                name="reviewText"
              />
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary rounded-sm"
                  type="submit"
                  value="Post"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
