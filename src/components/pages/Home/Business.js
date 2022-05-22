import React from "react";
import flag from '../../image/flag.png'
import conpter from '../../image/conpter.png'
import frend from '../../image/frend.png'
import lick from '../../image/lick.png'


const Business = () => {
  return (
    <div className="mt-20">
        <h1 className="text-center text-4xl font-bold text-secondary">MILLIONS BUSINESS TRUST US</h1>
        <p className="text-sm font-bold text-center py-2 mb-10">TRY TO UNDERSTAND USERS EXPECTION</p>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 m-20 justify-items-center">
            <div>
                <img className="mb-5" width='70px' src={flag} alt="" />
                <h1 className="text-4xl font-bold">82</h1>
                <p className="text-secondary font-bold">Contreices</p>
            </div>
            <div className="mt-4">
                <img className="mb-5" width='50px' src={conpter} alt="" />
                <h1 className="text-4xl font-bold">855+</h1>
                <p className="text-secondary font-bold">Compite Projects</p>
            </div>
            <div>
                <img className="mb-5" width='60px' src={frend} alt="" />
                <h1 className="text-4xl font-bold">375+</h1>
                <p className="text-secondary font-bold">Happy Clents</p>
            </div>
            <div>
                <img className="mb-5" width='75px' src={lick} alt="" />
                <h1 className="text-4xl font-bold">534+</h1>
                <p className="text-secondary font-bold">Feedback</p>
            </div>
        </div>



        <div className="grid grid-cols-1 xl:grid-cols-2 shadow-xl m-16 p-8">
            <div>
            <h1 className="text-3xl font-bold text-secondary py-2">Have any question about us or get a products reques ?</h1>
            <p className="font-bold">Don't hesitale to contact us</p>
            </div>
            <div className="mx-auto mt-4">
            <button class="btn btn-secondary px-6 m-3">Request For Quote</button>
            <button class="btn btn-accent px-8 m-3">Contact Us</button>
            </div>
        </div>
    </div>
  );
};

export default Business;
