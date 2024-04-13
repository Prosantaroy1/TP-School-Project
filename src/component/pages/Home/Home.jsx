import Banner from "../Bannerpage/Banner";
import BdComminutedev from "../BdComminute dev/BdComminutedev";
import Courses from "../Coursespage/Courses";
import DiscountSection from "../DisCountSection/DiscountSection";

const Home = () => {
    return (
        <div>
            <Banner/>
            <BdComminutedev/>
            <Courses/>
            <DiscountSection/>
        </div>
    );
};

export default Home;