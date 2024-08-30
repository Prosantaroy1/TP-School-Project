import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";


const Navber = () => {
  //
  const { user, logOut } = useContext(AuthContext);
  //
  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="shadow">
      <div className="flex container mx-auto  justify-between text-black items-center py-4 ">
        <h3 className="text-4xl font-bold ">
          TP <span className="font-bold text-yellow-400">SCHOOL</span>
        </h3>
        <div className="flex gap-6 text-[17px] font-semibold items-center">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/courses'>Courses</NavLink>
          {/**login or lagout */}
          {
            user ?
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li><a onClick={handleLogOut}>Logout</a></li>
                </ul>
              </div> :
              <Link to='/login'>
                <button className="border-2 border-[#6674cc]  px-4 py-2 text-[#6674cc] rounded">SignIn</button>
              </Link>

          }
        </div>
      </div>
    </div>
  );
};

export default Navber;
