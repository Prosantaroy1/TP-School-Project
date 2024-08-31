import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";


const Login = () => {
    //
    const { SignIn} = useContext(AuthContext);
    //privet router
    const navigate = useNavigate();
    const location = useLocation();
    //const from = location.state?.from?.pathname || '/';
    //
    const handlelogin= e =>{
        e.preventDefault();
        const from= e.target;
        const email=from.email.value;
        const password=from.password.value;
        SignIn(email, password)
        .then(result=>{
            const user=result.user;
            console.log('successful :', user);
            navigate(location.state?.from?.pathname || '/', {replace: true})
            alert('login succssful');
           
            from.reset('');
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div>
           <div className="hero  min-h-screen bg-base-200">
                 <div className="card shrink-0 md:w-2/4 sm:w-full shadow-2xl bg-base-100">
                   <form onSubmit={handlelogin} className="card-body">
                     <div className="form-control">
                       <label className="label">
                         <span className="label-text">Email</span>
                       </label>
                       <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                       <label className="label">
                         <span className="label-text">Password</span>
                       </label>
                       <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                       <label className="label">
                         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                       </label>
                     </div>
                     <div className="form-control mt-6">
                       <button type="submit" className="btn btn-primary">Login</button>
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