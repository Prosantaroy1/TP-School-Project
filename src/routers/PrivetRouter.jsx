/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouter = ({children}) => {
    const {user} = useContext(AuthContext);
    //path location state a set kore deoyar jonno
    const location = useLocation();
    //if user then children
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace/>
};

export default PrivetRouter;