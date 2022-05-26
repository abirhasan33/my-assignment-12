import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import About from './components/pages/About/About';
import Login from './components/pages/Login/Login';
import Home from './components/pages/Home/Home';
import SignUp from './components/pages/Login/SignUp';
import NotFound from './components/NotFound/NotFound';
import Blogs from './components/pages/Blogs/Blogs';
import RequireAuth from './components/pages/Login/ReqireAuth';
import Dashboard from './components/pages/Dashboard/Dashboard';
import AddAReview from './components/pages/Dashboard/AddAReview';
import MyOrders from './components/pages/Dashboard/MyOrders';
import Inventory from './components/pages/Home/Inventory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllUsers from './components/pages/Dashboard/AllUsers';
import Order from './components/pages/Dashboard/Order';
import Payment from './components/pages/Dashboard/Payment';

function App() {
  return (
    <div>
      <Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/inventory/:serviceId' element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}></Route>
        <Route path='/deshboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
        <Route index element={<AllUsers></AllUsers>}></Route>
        <Route path='review' element={<AddAReview></AddAReview>}></Route>
        <Route path='user' element={<Order></Order>}></Route>
        <Route path='payment/:id' element={<Payment></Payment>}></Route>
        <Route path='order' element={<MyOrders></MyOrders>}></Route>
        </Route>


        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      </Navbar>
    </div>
  );
}

export default App;
