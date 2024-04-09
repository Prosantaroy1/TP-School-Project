import { Outlet } from "react-router-dom";
import Navber from "../Sharedpage/Navbers/Navber";
import Footer from "../Sharedpage/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;