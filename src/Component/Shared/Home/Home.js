import React from 'react';
import banner from "../../../assets/images/banner_ing.jpg";
import './Home.css';
const Home = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={banner} className=" shadow-2xl" alt='' />
                <div>
                    <h1 className="text-3xl font-bold">Painted-Lady nail Salon <br /><span className=' text-rose-800 text-6xl '>Creating Beauty</span></h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Home;