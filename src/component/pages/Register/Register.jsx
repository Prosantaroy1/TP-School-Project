import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const {GoogleLogin, CreatedUser} = useContext(AuthContext);
    //form register
    const handleRegister=(e)=>{
        e.preventDefault();
        const from=e.target;
        const name=from.name.value;
        const email= from.email.value;
        const password= from.password.value;
        //test
        console.log(name, email, password);
        CreatedUser(email, password)
        .then(result=>{
            const user= result.user;
            console.log(user);
            from.reset('')
            navigate('/')
        })
        .catch(error=>{
            console.log(error);
        })
    }
    // navigate
    const navigate= useNavigate();
    //google register
    const handleGoogleLogin=()=>{
        GoogleLogin()
        .then(result=>{
            const user = result.user;
            console.log(user)
            navigate('/')

        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div className="pt-3 pb-3">
            <div className="hero min-h-screen bg-base-200">
                 <div className="card shrink-0 md:w-2/4 sm:w-full shadow-2xl bg-base-100">
                   <form onSubmit={handleRegister} className="card-body">
                     <div className="form-control">
                       <label className="label">
                         <span className="label-text">Full Name</span>
                       </label>
                       <input type="text" name="name" placeholder="Full name" className="input input-bordered" required />
                     </div>
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
                     </div>
                     <div className="form-control mt-6">
                       <button type="submit" className="btn btn-primary">Register</button>
                     </div>
                     <h4 className="text-center text-xl">OR</h4>
                     <div className="flex gap-5 justify-center items-center">
                          <button onClick={handleGoogleLogin} className="btn btn-outline btn-primary">Google Login</button>
                          <button className="btn btn-outline btn-secondary">GitHub Login</button>
                     </div>
                   </form>
                 </div>
             </div>
        </div>
    );
};

export default Register;