/* eslint-disable react/prop-types */

const CoursesCard = ({course}) => {
   const {title, price, img, rating} =course;
    return (
        <div  data-aos="zoom-in">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure><img className="w-full h-[250px]" src={img} alt="Shoes" /></figure>
              <div className="card-body bg-lime-300">
                 <h2 className="text-xl font-bold">{title}</h2>
                 <div className="flex justify-between items-center">
                    <p className="text-[16px] font-semibold">Price: <del>10000</del> {price} Tk</p>
                    <p className="text-[16px] font-semibold">Rating: {rating}</p>
                 </div>
                 <div className="flex justify-between pt-2 items-center">
                   <button className="btn btn-warning">Add Course</button>
                   <button className="btn btn-error">Details</button>
                 </div>
              </div>
            </div>
        </div> 
    );
};

export default CoursesCard;