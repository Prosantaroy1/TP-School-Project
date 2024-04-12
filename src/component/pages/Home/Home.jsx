import Banner from "../Bannerpage/Banner";
import BdComminutedev from "../BdComminute dev/BdComminutedev";
import Category from "../categoryCourses/Category";
import Courses from "../Coursespage/Courses";

const Home = () => {
    return (
        <div>
            <Banner/>
            <BdComminutedev/>
            <Category/>
            <Courses/>
        </div>
    );
};

export default Home;