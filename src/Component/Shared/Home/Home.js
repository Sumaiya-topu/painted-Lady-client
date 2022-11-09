import React from 'react';
import banner from '../../../assets/images/banner_ing.jpg'
import AboutUs from '../../AboutUs/AboutUs';
import Pricing from '../../Pricing/Pricing';
import './Home.css';
const Home = () => {
    return (
        <div className=''>
            <div className=" home hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row">

                    <div>
                        <h1 className="text-3xl font-bold text-slate-200">PAINTED-<span className='text-rose-600'>LADY</span> nail Salon <br /><span className=' text-rose-600 text-6xl '>Creating Beauty</span></h1>
                        <p className="py-6 text-slate-200">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn bg-rose-700 text-slate-200 text-lg font-bold">Get Appointment</button>
                    </div>
                </div>
            </div>
            <AboutUs></AboutUs>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;