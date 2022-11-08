import React from 'react';
import './Pricing.css'

const Pricing = () => {
    return (
        <div className=' w-11/12 mx-auto my-10'>
            <p className=' text-center text-5xl font-bold mt-20 mb-10'> Our Pricing</p>
            <div>
                <div className=' flex lg:flex-row flex-col justify-between '>
                    <div>

                        <div className='p-10 border-2 border-slate-700 shadow-xl text-center mr-5 '>
                            <h2 className='text-5xl'><span className=' text-rose-700 '>$</span>20 <small className='text-xl text-rose-600'>/one day</small></h2>
                            <h2 className='text-3xl font-bold my-5'>REGULAR</h2>
                            <p>Book your service at the cheapest rate. Here, you'll get the best services. In this regular package you'll be able to get your Manicures and Pedicures done with the best product out there. </p>
                            <button className="btn btn-active btn-primary mt-5 text-white">Book Now</button>
                        </div>

                    </div>
                    <div>

                        <div className='p-10 border-2 mr-5 border-slate-700 shadow-xl text-center'>
                            <h2 className='text-5xl'><span className=' text-rose-700 '>$</span>30 <small className='text-xl text-rose-600'>/one day</small></h2>
                            <h2 className='text-3xl font-bold my-5'>STANDARD</h2>
                            <p>Book your service at the cheapest rate. Here, you'll get the best services. In this regular package you'll be able to get your Manicures and Pedicures done with the best product out there.</p>
                            <button className="btn btn-active btn-primary mt-5 text-white">Book Now</button>

                        </div>

                    </div>
                    <div>

                        <div className='p-10 border-2 mr-5 border-slate-700 shadow-xl text-center'>
                            <h2 className='text-5xl'><span className=' text-rose-700 '>$</span>40 <small className='text-xl text-rose-600'>/one day</small></h2>
                            <h2 className='text-3xl font-bold my-5'>PREMIUM</h2>
                            <p>Book your service at the cheapest rate. Here, you'll get the best services. In this regular package you'll be able to get your Manicures and Pedicures done with the best product out there.</p>
                            <button className="btn btn-active btn-primary mt-5 text-white">Book Now</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;