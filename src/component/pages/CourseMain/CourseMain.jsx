import Courses from "../Coursespage/Courses";
import SubscribeSec from "../Subscribe Sec/SubscribeSec";

const CourseMain = () => {
    return (
        <>
            <div className="mb-8 ">
                {/* banner course */}
                <div className="py-32 bg-gradient-to-r from-red-200 to-yellow-200">
                    <div className="container md:px-0 px-4 mx-auto">
                        <h4 className="text-center md:text-5xl text-3xl font-bold">Complete Collection of TP School Courses</h4>
                        <p className="text-center md:text-2xl text-xl font-semibold pt-6">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo asperiores sapiente quam alias, dolor,
                            ullam impedit dolore beatae repudiandae deleniti reiciendis itaque vitae? Debitis, iusto?
                        </p>

                    </div>
                </div>
                {/* courser */}
                <div className="pt-12">
                    <Courses />
                </div>
            </div>
            <SubscribeSec/>
        </>
    );
};

export default CourseMain;