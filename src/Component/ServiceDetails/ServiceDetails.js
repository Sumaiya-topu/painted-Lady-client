import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import UserReview from "../UserReview/UserReview";
import useTitle from "../../hooks/useTitle";
import { PhotoView } from "react-photo-view";

const ServiceDetails = () => {
  useTitle("Service-details");
  const [reviews, setReviews] = useState([]);
  const service = useLoaderData();
  useEffect(() => {
    fetch(`https://painted-lady-server.vercel.app/review?postId=${service._id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [service._id]);

  const { _id, name, picture, rating, price, details } = service;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <PhotoView src={picture}>
            <img
              src={picture}
              className="bg-white max-w-sm rounded-lg shadow-2xl w-1/2"
              alt=""
            />
          </PhotoView>
          <div className="p-5 lg:w-1/2 lg:pr-10">
            <h1 className="text-5xl font-bold">{name}</h1>
            <div className="flex justify-between my-4">
              <p className="text-rose-600 text-3xl">{price}</p>
              <p className="text-rose-600 font-bold">
                <FaStar className=" ml-1 "></FaStar>
                <span className="text-slate-400">{rating}</span>
              </p>
            </div>
            <p className="lg:py-6 text-justify">{details}</p>
            <button className="mt-5 lg:mt-0 btn btn-primary text-rose-900 font-bold">
              Get Appointment
            </button>
          </div>
        </div>
      </div>
      <div className="text-center p-10">
        <p>Did you get our services? Share your thoughts</p>
        <Link to={`/services/${_id}/review`}>
          <button className="btn btn-outline btn-success animate-bounce w-48 h-12 mt-10">
            Add Review
          </button>
        </Link>
      </div>
      <div>
        {reviews.map((review) => (
          <UserReview review={review}></UserReview>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
