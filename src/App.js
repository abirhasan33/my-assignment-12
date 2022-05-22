import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import About from './components/pages/About/About';
import Login from './components/pages/Login/Login';
import Home from './components/pages/Home/Home';
import SignUp from './components/pages/Login/SignUp';
import NotFound from './components/NotFound/NotFound';
import Blogs from './components/pages/Blogs/Blogs';
import RequireAuth from './components/pages/Login/ReqireAuth';
import Dashboard from './components/pages/Dashboard/Dashboard';

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
        <Route path='/deshboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}></Route>


        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      </Navbar>
    </div>
  );
}

export default App;
