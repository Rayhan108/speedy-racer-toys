import { Link } from "react-router-dom";

const Registration = () => {
    return (
        <div className="mt-10 mb-10">
        <div className="hero-content">
         
          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
         
         <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-5">Register</h1>
            <form >
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
              </div>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoL</span>
                </label>
                <input type="url" placeholder="Photo URL" name="photo" className="input input-bordered" required />
              </div>
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
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          
              </div>
           
              <div className="form-control mt-6">
                
                <input className="btn btn-primary" type="submit" value="Register" />
              </div>
            </form>
            <p > <span className="font-semibold"> Alredy have an Account?</span>  <Link className="text-orange-400 font-bold" to="/login">Login</Link></p>
            </div>
       
        
          </div>
        </div>
      </div>
    );
};

export default Registration;