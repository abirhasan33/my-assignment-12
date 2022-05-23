import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {


    const [services, setServices] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    

    return (
        <div className='my-16 mx-12'>
            <h1 className='text-center text-4xl font-bold text-secondary'>MASONRY TOOLS</h1>
           <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 my-20 mx-12  gap-6 '>
               {
                   services.map(services=> <Service key={services._id} services={services}></Service>)
               }
           </div>
        </div>
    );
};

export default Services;