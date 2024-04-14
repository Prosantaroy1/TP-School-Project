
const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                 <div className="card shrink-0 md:w-2/4 sm:w-full shadow-2xl bg-base-100">
                   <form className="card-body">
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
                         <span className="label-text">PhotoUrl</span>
                       </label>
                       <input type="text" name="photo" placeholder="photo Url" className="input input-bordered" required />
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
                          <button className="btn btn-outline btn-primary">Google Login</button>
                          <button className="btn btn-outline btn-secondary">GitHub Login</button>
                     </div>
                   </form>
                 </div>
             </div>
        </div>
    );
};

export default Register;