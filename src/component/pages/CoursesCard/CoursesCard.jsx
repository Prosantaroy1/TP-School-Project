/* eslint-disable react/prop-types */

const CoursesCard = ({course}) => {
   const {title, price, img, rating} =course;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure><img className="w-full h-[250px]" src={img} alt="Shoes" /></figure>
              <div className="card-body">
                 <h2>{title}</h2>
                 <div className="flex justify-between items-center">
                    <p>Price: <span>1000</span> {price} Tk</p>
                    <p>Rating: {rating}</p>
                 </div>
                 <div className="flex justify-between items-center">
                   <button className="btn btn-warning">Add Course</button>
                   <button className="btn btn-error">Details</button>
                 </div>
              </div>
            </div>
        </div> 
    );
};

export default CoursesCard;