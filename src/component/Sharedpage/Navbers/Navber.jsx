import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import { FaBars } from "react-icons/fa";


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
  // moblie state
  const [menu, setMenu] = useState(false)

  return (
    <div className="shadow">
      <div className="flex md:px-0 px-4 container mx-auto  justify-between text-black items-center py-4 ">
        <h3 className="lg:text-4xl text-xl font-bold ">
          TP <span className="font-bold text-yellow-400">SCHOOL</span>
        </h3>
        <div className="md:flex hidden gap-6  text-2xl font-semibold items-center">
          <NavLink to='/'>Home</NavLink>
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
                <button className="border-2 border-[#6674cc]  px-4 py-2 text-[#6674cc] rounded">Login</button>
              </Link>

          }
        </div>
        {/* moblie */}
        <div className="block md:hidden">
          <FaBars className="text-xl" onClick={() => setMenu(!menu)} />
        </div>

      </div>
      {/* link */}
      {
        menu && <div className="w-full text-white flex flex-col items-center py-7 bg-slate-950 h-[400px]">
          <div className="flex flex-col items-center gap-10">
            <NavLink  to='/'>Home</NavLink>
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
                  <button className="border-2 border-[#6674cc]  px-4 py-2 text-[#6674cc] rounded">Login</button>
                </Link>

            }
          </div>
        </div>
      }
    </div>
  );
};

export default Navber;
