import React from 'react';
import banarimg from '../../image/banar.png'

const Banar = () => {
    return (
        <div className="hero min-h-screen px-16 banar-add">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className="max-w-md mb-4 rounded-lg" src={banarimg} alt="" />
          <div className="pr-16">
            <h1 className="text-5xl font-bold">Your New Car Equipment </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Velit sunt in beatae quaerat pariatur accusamus?
            </p>
            <button className="btn btn-primary fonnt-bold uppercase text-white bg-gradient-to-r from-secondary to-primary ">GET STARTED
      </button>
          </div>
        </div>
      </div>
    );
};

export default Banar;