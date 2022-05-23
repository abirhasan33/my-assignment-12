import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const Inventory = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});
    

    

    const [quantityUpodet, setQuantityUodet] = useState();

    useEffect( () =>{
        const url = `http://localhost:5000/service/${serviceId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => {
            setService(data)
            console.log(data);
            setQuantityUodet(data.quantity);
        })

    }, [])

    const quantityUpdete = ()=>{
        const quantity = parseInt(quantityUpodet);
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
        quantity
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => {
     console.log(data);
     setQuantityUodet(quantity - 1);
  });
        
    };


    const quantityAdd = ()=>{
        const quantity = parseInt(quantityUpodet);
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
        quantity
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => {
     console.log(data);
     setQuantityUodet(quantity + 1);
  });
        
    };



    console.log(service);
    return (
        <div class="card lg:card-side bg-base-100 mt-32">
  <figure className='mx-auto p-20'><img src={service.img} alt="Album" /></figure>
  <div class="mx-auto p-20">
      <h1 className='text-xl font-bold pb-2'>Name: {service.name}</h1>
      <h1 className='text-sm font-bold pb-1'>Descrription: {service.descrription}</h1>
      <h1 className='text-md font-bold pb-3'>price: {service.price}</h1>
      <h1 className='text-xl font-bold'>quantity:
       <button onClick={quantityUpdete} className='btn text-white font-bold px-6 bg-orange-400 mx-3'>-</button>
        {quantityUpodet}
     <button onClick={quantityAdd} className='btn mx-3 text-white font-bold px-6 bg-orange-400'>+</button></h1>
  <Link to='/' className="btn btn-primary mt-10 px-10 fonnt-bold uppercase text-white bg-gradient-to-r from-secondary to-primary ">Please Order
      </Link>
  </div>
</div>
    );
};

export default Inventory;