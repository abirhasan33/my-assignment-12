import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const AddAReview = () => {
  const [user] = useAuthState(auth);

  const handelform = (event) => {
    event.preventDefault();
    // const email=user?.email;
    const email = event.target.email.value;
    const name = event.target.name.value;
    const quantity = event.target.quantity.value;
    const descrription = event.target.descrription.value;
    const img = event.target.img.value;
    const price = event.target.price.value;

    const Addproduct = {
      email,
      name,
      quantity,
      descrription,
      img,
      price,
    };
    console.log(Addproduct);

    fetch('http://localhost:5000/service', {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(Addproduct),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="mt-6">
      <div class="card w-96 bg-base-100 shadow-xl mx-auto">
        <form onSubmit={handelform}>
        <div class="card-body">
        <h2 class="text-3xl font-bold text-center text-secondary">
          Add Product
        </h2>
          <input
            type="email"
            name="email"
            readOnly
            value={user?.email}
            className="form-control"
            required
            class="input input-bordered input-success w-full max-w-xs"
          />
          <input
            type="text"
            name="name"
            placeholder="Services Name"
            class="input input-bordered input-success w-full max-w-xs"
            required
          />
          <input
            type="text"
            name="img"
            placeholder="Type here"
            class="input input-bordered input-success w-full max-w-xs"
            required
          />
          <input
            type="text"
            name="quantity"
            placeholder="quantity"
            class="input input-bordered input-success w-full max-w-xs"
            required
          />
          <input
            type="text"
            name="price"
            placeholder="price"
            class="input input-bordered input-success w-full max-w-xs"
            required
          />
          <input
            type="text"
            name="descrription"
            placeholder="Type descrription"
            class="input input-bordered input-lg w-full max-w-xs"
            required
          />
          <button className="addProduct-btn button bg-slate-500 font-bold text-white py-3 rounded-lg">
            Add Product
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAReview;
