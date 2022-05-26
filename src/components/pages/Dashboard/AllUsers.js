import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const AllUsers = () => {

  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate()

  useEffect(() => {
      if (user) {
          fetch(`http://localhost:5000/available?patient=${user.email}`, {
              method: 'GET',
              headers: {
                  'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              }
          })
              .then(res => {
                  console.log('res', res);
                  if (res.status === 401 || res.status === 403) {
                      signOut(auth);
                      localStorage.removeItem('accessToken');
                      navigate('/');
                  }
                  return res.json()
              })
              .then(data => {

                  setOrder(data);
              });
      }
  }, [user])

  return (
      <div>
          <h2>All Orders: {order.length}</h2>
          <div class="overflow-x-auto">
              <table class="table w-full">
                  <thead>
                      <tr>
                          <th></th>
                          <th>Email</th>
                          <th>User Name</th>
                          <th>Products NAme</th>
                          <th>Quantity</th>
                          <th>Pirce</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          order.map((a, index) => <tr>
                              <th>{index + 1}</th>
                              <td>{a.user}</td>
                              <td>{a.userName}</td>
                              <td>{a.orders}</td>
                              <td>{a.quantity}</td>
                              <td>{(a.price && !a.paid) && <Link to={`/deshboard/payment/${a._id}`}><button className='btn btn-xs btn-success px-6'>PAY</button></Link>}</td>

                              <td>{(a.price && a.paid) && <span className='text-success'>PAID</span>}</td>
                          </tr>)
                      }


                  </tbody>
              </table>
          </div>
      </div>
  );
};


export default AllUsers;