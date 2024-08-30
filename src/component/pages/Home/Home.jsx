import { useEffect } from "react";
import Banner from "../Bannerpage/Banner";
import BdComminutedev from "../BdComminute dev/BdComminutedev";
import Courses from "../Coursespage/Courses";
import DiscountSection from "../DisCountSection/DiscountSection";
// aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import Category from "../categoryCourses/Category";
import FeedbackStu from "../FeedbackStudent/FeedbackStu";
import SubscribeSec from "../Subscribe Sec/SubscribeSec";

const Home = () => {
    //aos 
    useEffect(()=>{
        AOS.init({duration: 1500});
    },[])
    return (
        <div>
            <Banner/>
            <BdComminutedev/>
            <Category/>
            <Courses/>
            <DiscountSection/>
            <FeedbackStu/>
            <SubscribeSec/>
        </div>
    );
};

export default Home;