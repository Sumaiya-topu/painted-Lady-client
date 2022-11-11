import React from "react";
import about from "../../assets/images/about.png";

const AboutUs = () => {
  return (
    <div className=" hero min-h-screen bg-base-200">
      <div className="hero-content    flex-col lg:flex-row-reverse">
        <img src={about} className="max-w-sm shadow-sm" alt="" />
        <div className="p-10 ">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="py-10">
            The main purpose of <span>PAINTED-LADY</span> is to primarily offer
            nail care services such as manicures, pedicures, and nail
            enhancements. also offer skin care services. Manicures are also
            offered by general beauty salons, spas, and hotels.
          </p>
          <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 btn btn-primary text-white rounded-sm">
            Read more{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
