import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div className='mt-10 w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center'>
            {
                services.map(service => <Service service={service}></Service>)
            }
        </div>
    );
};

export default Services;