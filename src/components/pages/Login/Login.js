import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loging from '../Loding/Loging';
import img from '../../image/google.png'


const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
  ] = useSignInWithEmailAndPassword(auth);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect( () =>{
      if (user || gUser) {
          navigate(from, { replace: true });
      }
  }, [user, gUser, from, navigate])

  if (loading || gLoading) {
      return <Loging></Loging>
  }

  if(error || gError){
      signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
  }

  const onSubmit = data => {
      signInWithEmailAndPassword(data.email, data.password);
  }

  return (
      <div className='flex h-screen justify-center items-center mt-16 mb-12'>
          <div className="card w-96 shadow-xl m-6">
              <div className="card-body">
                  <h2 className="text-center text-3xl font-bold">Login</h2>
                  <form onSubmit={handleSubmit(onSubmit)}>

                      <div className="form-control w-full max-w-xs">
                          <label className="label">
                              <span className="label-text">Email</span>
                          </label>
                          <input
                              type="email"
                              placeholder="Your Email"
                              className="input input-bordered w-full max-w-xs"
                              {...register("email", {
                                  required: {
                                      value: true,
                                      message: 'Email is Required'
                                  },
                                  pattern: {
                                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                      message: 'Provide a valid Email'
                                  }
                              })}
                          />
                          <label className="label">
                              {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                              {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                          </label>
                      </div>
                      <div className="form-control w-full max-w-xs">
                          <label className="label">
                              <span className="label-text">Password</span>
                          </label>
                          <input
                              type="password"
                              placeholder="Password"
                              className="input input-bordered w-full max-w-xs"
                              {...register("password", {
                                  required: {
                                      value: true,
                                      message: 'Password is Required'
                                  },
                                  minLength: {
                                      value: 6,
                                      message: 'Must be 6 characters or longer'
                                  }
                              })}
                          />
                          <label className="label">
                              {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                              {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                          </label>
                      </div>

                      {signInError}
                      <input className='btn pt-2 bg-slate-700 w-full max-w-xs text-white' type="submit" value="Login" />
                  </form>
                  <p><small>New to Siginup?<Link className='btn btn-link' to="/signup">Create New Account</Link></small></p>
                  <div className="divider">OR</div>
                  <button
                      onClick={() => signInWithGoogle()}
                      className="btn btn-outline"
                  ><img style={{ width: "33px" }} src={img} alt="" />
                  <span className="px-3">Google Sign In</span></button>
              </div>
          </div>
      </div >
  );
};

export default Login;