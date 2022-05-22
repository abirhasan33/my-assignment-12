import React from 'react';

const Aboutinfo = ({img, cardTitle, cardTitles, bgclass}) => {
    return (
        <div className='mx-auto'>
            <div class={`card w-80 h-52 bg-neutral text-neutral-content mt-4 ${bgclass}`}>
  <div class="card-body items-center text-center">
      <img width="80px" src={img} alt="" />
    <h2 class="card-title text-white font-bold">{cardTitles}</h2>
    <p className='font-bold text-white'>{cardTitle}</p>
  </div>
 </div>
        </div>
    );
};

export default Aboutinfo;