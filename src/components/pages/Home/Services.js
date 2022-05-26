import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookingModal from './BookingModal';
import Service from './Service';

const Services = () => {


    const [services, setServices, refetch] = useState([]);
    const [order, setOrder] = useState(null);

    useEffect(()=> {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data));
    },[setServices])

    

    return (
        <div className='my-16 mx-12'>
            <h1 className='text-center text-4xl font-bold text-secondary'><Link to='/masonry'>MASONRY TOOLS</Link></h1>
           <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 my-20 mx-12  gap-6 '>
               {
                   services.map(services=> <Service key={services._id} services={services}  setOrder={setOrder}></Service>)
               }
           </div>
           <div>
           {
                order && <BookingModal  order={order} setOrder={setOrder} refetch={refetch}></BookingModal>
            }
           </div>
        </div>
    );
};

export default Services;