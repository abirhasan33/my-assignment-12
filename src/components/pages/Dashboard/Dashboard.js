import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from "react-router-dom";
import auth from '../../../firebase.init';
import useAdmin from '../../hooks/useAdmin';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
  return (
      <div class="drawer drawer-mobile mt-20">
          <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content">
              <h2 className='text-2xl text-center mt-5 font-bold text-purple-500'>Welcome to your Dashboard</h2>
              <Outlet></Outlet>
          </div>
          <div class="drawer-side mt-12">
              <label for="dashboard-sidebar" class="drawer-overlay"></label>
              <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                  {/* <!-- Sidebar content here --> */}
                    <li><Link to="/deshboard">Order</Link></li>
                  { admin && <li><Link to="/deshboard/user">Make Admin</Link></li>}
                  <li><Link to="/deshboard/review">Add A Products</Link></li>
                  <li><Link to="/deshboard/order">My Order</Link></li>
              </ul>

          </div>
      </div>
  );
};

export default Dashboard;