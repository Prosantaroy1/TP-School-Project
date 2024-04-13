import { useEffect, useState } from "react";
import CoursesCard from "../CoursesCard/CoursesCard";

const Courses = () => {
    //data useState or useEffect
    const [coursesData, setCoursesData] = useState([]);

    useEffect(()=>{
        fetch('../../../../public/courses.json')
        .then(res=> res.json())
        .then(data=> setCoursesData(data))
    },[]);
    console.log(coursesData);
    return (
        <div className="px-16 py-10  mt-7">
            <h3 className='text-center font-bold text-3xl text-black'>OUR TOP SOFTWARW COURSES</h3>
            <div className="flex gap-7 pt-14 flex-wrap items-center">
             {
                coursesData.map((course, idx)=> <CoursesCard
                 key={idx}
                 course={course}
                ></CoursesCard>)
             }
            </div>
        </div>
    );
};

export default Courses;