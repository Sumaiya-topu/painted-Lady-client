import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const EditedReview = () => {
  useTitle("Update-Review");
  const review = useLoaderData();
  const navigate = useNavigate();
  console.log(review);
  const handleEditreview = (event) => {
    event.preventDefault();
    const form = event.target;
    const editedReview = form.editedReview.value;

    fetch(`https://painted-lady-server.vercel.app/review/${review._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ editedReview }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          alert("Review Successfully Updated");
          navigate("/myreviews");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <form onSubmit={handleEditreview} className=" h-98 mt-32 ">
      <div className="flex flex-col w-1/2 pt-40 mx-auto">
        <textarea
          type="text"
          name="editedReview"
          className="textarea textarea-accent text-center"
          placeholder="Your review"
        ></textarea>
        <button type="submit" className="btn btn-outline rounded-sm mt-5">
          Update Review
        </button>
      </div>
    </form>
  );
};

export default EditedReview;
