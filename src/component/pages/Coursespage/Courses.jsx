import { useEffect, useState } from "react";
import CoursesCard from "../CoursesCard/CoursesCard";

const Courses = () => {
    //data useState or useEffect
    const [coursesData, setCoursesData] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCoursesData(data))
    }, []);
    console.log(coursesData);
    return (
        <div className="mx-auto md:px-0 px-4 py-10 container mt-7">
            {/* title course */}
            <div data-aos="fade-up">
                <h3 className='text-center font-semibold text-4xl text-black' >
                    Most Trending Online Courses
                </h3>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-12">
                {
                    coursesData.map((course, idx) => <CoursesCard
                        key={idx}
                        course={course}
                    ></CoursesCard>)
                }
            </div>
        </div>
    );
};

export default Courses;