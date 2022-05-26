import React from 'react';

const Serivc = ({serivces}) => {
    console.log(serivces);
    const {img} = serivces; 
    return (
        <div className='items-center text-center'>
            <img style={{height: "150px", width: "300px"}} src={img} alt="" />
        </div>
    );
};

export default Serivc;