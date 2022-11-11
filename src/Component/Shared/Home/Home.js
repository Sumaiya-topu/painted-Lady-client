import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import banner from "../../../assets/images/banner_ing.jpg";
import useTitle from "../../../hooks/useTitle";
import AboutUs from "../../AboutUs/AboutUs";
import Pricing from "../../Pricing/Pricing";
import Service from "../../Services/Service";
import "./Home.css";
const Home = () => {
  useTitle("Home");
  const services = useLoaderData();
  console.log(services);
  return (
    <div className="">
      <div className=" home hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-3xl font-bold text-slate-200">
              PAINTED-<span className="text-rose-600">LADY</span> nail Salon{" "}
              <br />
              <span className=" text-rose-600 text-6xl ">Creating Beauty</span>
            </h1>
            <p className="py-6 text-slate-200">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-rose-800 duration-300 btn bg-rose-700 text-slate-200 text-lg font-bold shadow-lg">
              Get Appointment
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full  grid grid-cols-1 lg:grid-cols-3 justify-center">
        {services.map((service) => (
          <Service service={service}></Service>
        ))}
      </div>
      <div className="text-center mb-10">
        <Link to="/services">
          <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500  duration-300 btn btn-outline btn-primary rounded-sm">
            See More Services
          </button>
        </Link>
      </div>
      <AboutUs></AboutUs>
      <Pricing></Pricing>
    </div>
  );
};

export default Home;
