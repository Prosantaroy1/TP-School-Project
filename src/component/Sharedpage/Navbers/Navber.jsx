import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";


const Navber = () => {
    //
    const {user} =useContext(AuthContext);

    return (
        <div className="flex  shadow-xl   justify-between text-black items-center py-4 px-14 ">
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
                    <button className="border-2 border-[#6674cc]  px-4 py-2 text-[#6674cc] rounded">LogOut</button>
                    :
                    <Link to='/login'>
                     <button className="border-2 border-[#6674cc]  px-4 py-2 text-[#6674cc] rounded">SignIn</button>
                    </Link> 
                }
            </div>
        </div>
    );
};

export default Navber;