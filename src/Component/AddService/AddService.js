import React from "react";

const AddService = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(event.target);
    const serviceName = form.serviceName.value;
    const serviceDetails = form.serviceDetails.value;
    const servicePhotoUrl = form.servicePhotoUrl.value;
    const price = form.price.value;
    const rating = form.rating.value;
    console.log(serviceName, servicePhotoUrl, serviceDetails, price, rating);
    const newService = {
      name: serviceName,
      picture: servicePhotoUrl,
      price: price,
      rating: rating,
      details: serviceDetails,
    };

    fetch("https://painted-lady-server.vercel.app/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Service added succesfully");
        }
      });
  };
  return (
    <div className="h-screen text-center mt-32  ">
      <h1 className="text-5xl text-orange-800 font-bold mb-20">
        Add your services you want to take from us.{" "}
      </h1>
      <div className="mt-10">
        <form onSubmit={handleAddService}>
          <label className="block text-2xl mb-2" htmlFor="">
            Service name
          </label>
          <div className="flex justify-center">
            <textarea
              className="block p-5 text-center"
              name="serviceName"
              id=""
              cols="70"
              rows="1"
              placeholder="Name your service"
            ></textarea>
          </div>

          <label className="block text-2xl my-2" htmlFor="">
            Add a photo
          </label>
          <div className="flex justify-center">
            {" "}
            <textarea
              className="block p-5 text-center"
              name="servicePhotoUrl"
              id=""
              cols="70"
              rows="1"
              placeholder="Photo URL"
            ></textarea>
          </div>
          <label className="block text-2xl my-2" htmlFor="">
            Your service description
          </label>
          <div className="flex justify-center">
            <textarea
              className="block p-5 text-center"
              name="serviceDetails"
              id=""
              cols="70"
              rows="5"
              placeholder="Description"
            ></textarea>
          </div>
          <div className="flex justify-center mt-5">
            <div className="pr-5">
              <label className="block text-lg mb-2" htmlFor="">
                Price
              </label>
              <textarea
                className=" px-20 py-5 text-center"
                name="price"
                id=""
                cols="10"
                rows="1"
                placeholder="Price in $"
              ></textarea>
            </div>
            <div className="">
              <label className="block text-lg mb-2" htmlFor="">
                Rating
              </label>
              <textarea
                className=" px-20 py-5 text-center"
                name="rating"
                id=""
                cols="10"
                rows="1"
                placeholder="Rating"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary rounded-sm px-10 mt-5 text-orange-800 font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
