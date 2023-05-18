import { Link } from "react-router-dom";
import {FaGoogle } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="mt-10 mb-10">
        <div className="hero-content">
         
          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
         
         <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-5">Login</h1>
            <form >
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={show ? "text":"password"} placeholder="password" name="password" className="input input-bordered" required />
          
              </div>
              <p className="mt-3" onClick={() => setShow(!show)}>
            <span className=" font-bold ">
              {show ? <span>Hide Password</span> : <span>Show Password</span>}
            </span>
          </p>
              <div className="form-control mt-6">
                
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <p > <span className="font-semibold"> Did not have an Account?</span>  <Link className="text-orange-400 font-bold" to="/register">Register</Link></p>
            </div>
            <div className="text-center">
            <span className="text-gray-400">or</span>
          </div>
      <div className="mb-5 mx-auto mt-5">
      <button
           
           className=" px-6  py-3 btn btn-outline btn-primary rounded-md"
         >
          <FaGoogle className="text-blue-700 text-2xl mr-5"/> Sign in with Google
         </button>
      </div>
        
          </div>
        </div>
      </div>
    );
};

export default Login;