import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
                 <div className="card shrink-0 md:w-2/4 sm:w-full shadow-2xl bg-base-100">
                   <form className="card-body">
                     <div className="form-control">
                       <label className="label">
                         <span className="label-text">Email</span>
                       </label>
                       <input type="email" placeholder="email" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                       <label className="label">
                         <span className="label-text">Password</span>
                       </label>
                       <input type="password" placeholder="password" className="input input-bordered" required />
                       <label className="label">
                         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                       </label>
                     </div>
                     <div className="form-control mt-6">
                       <button className="btn btn-primary">Login</button>
                     </div>
                   </form>
                   <p className="px-2 pb-3 text-center">
                     Alreay Account!  Created Account : <Link className="bg-green font-bold" to='/register'>Register Now</Link>
                   </p>
                 </div>
               </div>
        </div>
    );
};

export default Login;