import React from 'react';
import { Link } from 'react-router-dom';
import abir from '../../image/bir.png'


const MyOrders = () => {
    return (
        <div className="hero min-h-screen px-16 banar-add">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img width='600px' className="mb-4 mr-20 rounded-lg" src={abir} alt="" />
          <div className="pr-16">
            <h1 className="text-5xl font-bold text-secondary">T AM A WEB DEVELOPER </h1>
            <h1 className='text-2xl font-bold mt-3'>My Name is Abir Hasan</h1>
            <p className="py-6">
              I am student in class tent. and web developer. i am from ther curess of Education programamer-hero. A lot peopple lrnarn here . I can Javacrript, html, css, bootstrap, tailwindcss, and rect. i want to work as a web developer now
              a id nisi Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Velit sunt in beatae quaerat pariatur accusamus?
            </p>
            <Link to="/about" className="btn btn-primary fonnt-bold uppercase text-white bg-gradient-to-r from-secondary to-primary ">MY POFILE INFORMATION
      </Link>
          </div>
        </div>
      </div>
    );
};

export default MyOrders;