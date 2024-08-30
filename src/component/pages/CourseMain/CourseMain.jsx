import Courses from "../Coursespage/Courses";
import SubscribeSec from "../Subscribe Sec/SubscribeSec";

const CourseMain = () => {
    return (
        <>
            <div className="mb-8">
                {/* banner course */}
                <div className="py-32 bg-gradient-to-r from-red-200 to-yellow-200">
                    <div className="container mx-auto">
                        <h4 className="text-center text-5xl font-bold">Complete Collection of TP School Courses</h4>
                        <p className="text-center text-2xl font-semibold pt-6">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo asperiores<br /> sapiente quam alias, dolor,
                            ullam impedit dolore beatae repudiandae deleniti<br /> reiciendis itaque vitae? Debitis, iusto?
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