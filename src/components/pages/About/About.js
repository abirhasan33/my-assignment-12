import React, { useEffect, useState } from 'react';
import abir from '../../image/bir.png'
import img1 from "../../image/email.png";
import img2 from "../../image/phone.png";
import img3 from "../../image/location.png";
import Aboutinfo from './Aboutinfo';
import Infofmson from './Infofmson';
import Footer from '../../shared/Footer';



const About = () => {

    const [serivces, setSerivces] = useState([]);
    useEffect(()=> {
        fetch('allicons.json')
        .then(res => res.json())
        .then(data => setSerivces(data));
    },[])
    console.log(serivces);

    return (
       <div>
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
            <button className="btn btn-primary fonnt-bold uppercase text-white bg-gradient-to-r from-secondary to-primary ">GET STARTED
      </button>
          </div>
        </div>
      </div>
          <h1 className='text-4xl text-center text-secondary font-bold mt-10 mb-20'>CONTACT US</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 px-20">
      <Aboutinfo
        bgclass="bg-gradient-to-r from-secondary to-primary"
        cardTitle="contact now"
        cardTitles="abir03512@gmail.com"
        img={img1}
      ></Aboutinfo>
      <Aboutinfo
        bgclass="bg-gradient-to-r from-secondary to-primary"
        cardTitle="contact now"
        cardTitles="0160889768"
        img={img2}
      ></Aboutinfo>
      <Aboutinfo
        bgclass="bg-gradient-to-r from-secondary to-primary"
        cardTitle="contact now"
        cardTitles="Bonani.Dhaka"
        img={img3}
      ></Aboutinfo>
      </div>

      <div>
      <h1 className='text-4xl text-center text-secondary font-bold mt-20 mb-20'>MY SKILL INFORMATION</h1>
      </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-12 rounded-lg'>
            {
                serivces.map(serivces => <Infofmson key={serivces} serivces={serivces}></Infofmson>)
            }
            </div>

            <div>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto my-20">
  <div class="card-body">
    <h2 class="text-3xl font-bold text-secondary text-center">WEB SITE LINK</h2>
    <p className='my-8'>https://assignment-10-51d3e.web.app/</p>
    <p className='mb-8'>https://guiush-car-services.firebaseapp.com/login</p>
    <p>https://module-patties-60-1.web.app/?fbclid=IwAR27EJaXrZq
        1fS8_4vadX6jZzc7Dfm8Rsv0XBNjm0AYg
        7D2O24TfHjg7fAs</p>
  </div>
</div>
            </div>
            <Footer></Footer>
       </div>
    );
};

export default About;
