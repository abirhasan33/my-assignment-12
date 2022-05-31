import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loging from "../Loding/Loging";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3NFBGAkwLQbvLT2J2iBJ2TsOutQjDjavO76mpkt28gtWhfpxn0ogMKKY9RCYmkWOMQzAcezy3Mv4Nnjpw09rYF00J5MzLeHt"
);

const Payment = () => {
  const { id } = useParams();

  const [order, setOrder, isLoading] = useState({});

  useEffect(() => {
    fetch(` https://guarded-refuge-32359.herokuapp.com/booking/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  console.log(order, id);

  // const url = ` https://guarded-refuge-32359.herokuapp.com/booking/${id}`;

  // const {data: order, isLoading} = useQuery(['booking', id], ()=>  fetch(url, {
  //     method: 'GET',
  //     headers: {
  //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
  //     }
  // }).then(res=> res.json()));
  // console.log(order);

  if (isLoading) {
    return <Loging></Loging>;
  }

  return (
    <div>
      <div class="card w-50 max-w-md  shadow-xl my-12 mx-auto">
        <div class="card-body">
          <p className="text-success font-bold">Hello, {order.userName}</p>
          <h2 class="card-title">Please Pay for {order.orders}</h2>
          <p>Quantity: {order.quantity}</p>
          <p>Please pay: ${order.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl mx-auto">
        <div class="card-body ">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
