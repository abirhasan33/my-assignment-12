import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service, setOrder }) => {
  const { _id, name, img, descrription, quantity, price, availableQuantity } = service;

  const nevigate = useNavigate();
  const navigetToServiseDetail = (id) => {
    nevigate(`/inventory/${id}`);
  };

  return (
    <div class="card bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          width="250px"
          style={{ height: "200px" }}
          src={img}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="m-10">
        <h2 class="text-2xl font-bold mb-2">{name}</h2>
        <p className="">Descrription: {descrription}</p>
        <p className="text-ml font-bold mb">AvailableQuantity: {availableQuantity}</p>
        <p className="text-ml font-bold mt-2 mb-2">Quantity: {quantity}</p>
        <p className="text-ml font-bold">Price: {price}</p>
        <div class="items-center text-center mt-4">
          <button
            onClick={() => navigetToServiseDetail(_id)}
            className="btn btn-primary fonnt-bold uppercase text-white bg-gradient-to-r from-secondary to-primary px-16"
          >
            updete
          </button>
          <div className="card-actions justify-center">
          <label
            for="booking-modal"
            onClick={() => setOrder(service)}
            className="btn px-11 mt-3 btn-primary text-white bg-gradient-to-r from-secondary to-primary"
          >
            place order
          </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
