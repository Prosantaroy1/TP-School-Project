import { Outlet } from "react-router-dom";
import Navber from "../Sharedpage/Navbers/Navber";
import Footer from "../Sharedpage/Footer/Footer";

const Main = () => {
    return (
        <div className="bg-[#0f172a]  text-[#ffffff]">
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;