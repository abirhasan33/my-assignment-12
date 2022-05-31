import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Services from "./Services";

const BookingModal = ({ order, setOrder }) => {
  const [user] = useAuthState(auth);
  const { _id, name } = order;

  const hadelBooking = (event) => {
    event.preventDefault();

    const booking = {
      ordersId: _id,
      orders: name,
      user: user.email,
      userName: user.displayName,
      quantity: event.target.quantity.value,
      price: event.target.price.value,
      phone: event.target.phone.value,
    };

    fetch(" https://guarded-refuge-32359.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast("Order is Boking");
        } else {
          toast.error("Order is onts Boking");
        }
        setOrder(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary text-center">
            Order for: {name}
          </h3>
          <form
            onSubmit={hadelBooking}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            <input
              type="text"
              name="name"
              value={user?.displayName || ""}
              disabled
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={user?.email || ""}
              disabled
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Price"
              name="price"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              class="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
