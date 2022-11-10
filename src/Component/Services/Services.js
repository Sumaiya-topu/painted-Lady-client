import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Service from './Service';

const Services = () => {
    useTitle('Services')
    const services = useLoaderData();
    console.log(services);
    return (
        <div>
            <div className='mt-10 w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center'>
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
            <div className='text-center p-5'>
                <Link className='btn btn-outline' to='/addservice'>Add Service</Link>

            </div>
        </div>
    );
};

export default Services;