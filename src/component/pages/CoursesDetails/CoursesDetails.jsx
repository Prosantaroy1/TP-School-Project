import { useLoaderData, useParams } from "react-router-dom";

const CoursesDetails = () => {
    //all data
    const card= useLoaderData();
    //click id
    const {id} =useParams();
    //match all id or specific id
    const details= card.find(card=> card.id == id);
    return (
        <div className="pt-4 pb-5 px-20">
            <h3>This is Courses Details: {details.price}</h3>
        </div>
    );
};

export default CoursesDetails;