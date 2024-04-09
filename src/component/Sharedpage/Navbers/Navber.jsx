import { Link, NavLink } from "react-router-dom";


const Navber = () => {

    return (
        <div className="flex justify-between items-center pt-3 px-10 ">
            <h3 className="text-2xl font-bold">TP SCHOOL</h3>
            <div className="flex gap-6 text-xl">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/courses'>Courses</NavLink>
            </div>
            <div>
                <Link to='/login'>
                   <button className="btn  btn-secondary">Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navber;