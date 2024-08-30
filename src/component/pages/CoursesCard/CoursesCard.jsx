/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const CoursesCard = ({course}) => {
   const {id,title, price, img, rating} =course;
   //
 
    return (
        <div  data-aos="zoom-in">
            <div className="card w-full bg-base-100 shadow-xl">
              <figure><img className="w-full h-[250px]" src={img} alt="Shoes" /></figure>
              <div className="card-body bg-lime-300">
                 <h2 className="text-xl font-bold">{title}</h2>
                 <div className="flex justify-between items-center">
                    <p className="text-[16px] font-semibold">Price: <del>10000</del> {price} Tk</p>
                    <p className="text-[16px] font-semibold">Rating: {rating}</p>
                 </div>
                 <div className="flex justify-between pt-2 items-center">
                   <button className="btn text-2xl btn-warning">Enroll</button>
                   <Link to={`/details/${id}`}>
                      <button className="btn btn-error">Details</button>
                   </Link>
                 </div>
              </div>
            </div>
        </div> 
    );
};

export default CoursesCard;