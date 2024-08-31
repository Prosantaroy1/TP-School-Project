import { BiSolidUserDetail } from "react-icons/bi";
import { FaUserFriends, FaVideo } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
// 
import detailsImg from '../../../assets/banner/banner.svg'
import CompanySec from "../Company Sec/CompanySec";

const CoursesDetails = () => {
    //all data
    const card = useLoaderData();
    //click id
    const { id } = useParams();
    //match all id or specific id
    const details = card.find(card => card.id == id);
    return (
        <div className="mb-8">
            <div className="container mx-auto  py-28">
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-0 gap-8  justify-between md:px-0 px-4">
                    {/* details title */}
                    <div>
                        <h3 className="text-4xl font-bold ">{details.title}<br />
                            <span>in 4 Months!</span>
                        </h3>
                        {/* list */}
                        <ul className="pt-8 text-2xl flex flex-col gap-6">
                            <li className="flex items-center gap-2">
                                <FaVideo /> 100+ Hrs of learning & 300+ Qs</li>
                            <li className="flex items-center gap-2">
                                <FaUserFriends /> Individual Doubt Solving TAs & Community
                            </li>
                            <li className="flex items-center gap-2">
                                <BiSolidUserDetail /> Access to Library Plus for PYQs of Top Companies
                            </li>
                        </ul>
                        {/* btn */}
                        <div className="pt-7">
                            <Link to='/payment'>
                            <button className="btn  btn-active text-2xl btn-secondary">Enroll Now</button>
                            </Link>
                        </div>
                    </div>
                    {/* details img */}
                    <div>
                        <img src={detailsImg} alt="" className="w-full h-96" />
                    </div>

                </div>
            </div>
            {/* company logo sec */}
            <CompanySec />
            {/* question sec */}
            <div className="container mx-auto pt-12 md:px-0 px-4">
                <h3 className="text-center md:text-5xl text-3xl font-bold">
                    Frequently asked questions ?
                </h3>
                <div className="pt-7 flex flex-col gap-5">
                    <div className="collapse bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-2xl flex justify-between items-center font-medium">
                            <p> I do not know anything about Coding, is this batch good for me?</p>
                            <p className="text-3xl">+</p>
                        </div>
                        <div className="collapse-content text-xl">
                            <p>
                                Yes, this course will cover all important concepts from basic till advanced. So, there is no need to know anything about coding beforehand.
                            </p>
                        </div>
                    </div>
                    {/* second */}
                    <div className="collapse  bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-2xl flex justify-between items-center font-medium">
                            <p> Do I need to learn C before learning C++?</p>
                            <p className="text-3xl">+</p>
                        </div>
                        <div className="collapse-content text-xl">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dicta. Earum eius quae inventore voluptate qui. Aliquam, accusamus ea quaerat quod amet perspiciatis, accusantium dolores dicta sint porro dolor, reprehenderit dolore deserunt? Illum, cupiditate vel? Mollitia, necessitatibus iure! Velit, natus ipsam tenetur eligendi ratione in officia dolores rerum adipisci. Tempore.
                            </p>
                        </div>
                    </div>
                    {/* thrid */}
                    <div className="collapse bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-2xl flex justify-between items-center font-medium">
                            <p>Library Feature will be for how many companies?</p>
                            <p className="text-3xl">+</p>
                        </div>
                        <div className="collapse-content text-xl">
                            <p>
                               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum officia aliquam voluptates similique ullam sint, perspiciatis facere, iure, illum ex unde quidem sit velit optio error asperiores. Eos aspernatur voluptatum ipsam dignissimos totam excepturi fugiat. Recusandae ea porro laboriosam assumenda maxime explicabo animi a repudiandae expedita est itaque voluptates neque eaque sequi debitis quaerat non nostrum architecto laborum distinctio, quibusdam nam. Eius ipsum ut impedit harum aliquid debitis temporibus.
                                Dicta error beatae numquam ratione consequatur dolore facilis possimus deserunt doloremque?
                            </p>
                        </div>
                    </div>
                    {/* four */}
                    <div className="collapse bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-2xl flex justify-between items-center font-medium">
                            <p>What are the lecture timings?</p>
                            <p className="text-3xl">+</p>
                        </div>
                        <div className="collapse-content text-xl">
                            <p>
                               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum officia aliquam voluptates similique ullam sint, perspiciatis facere, iure, illum ex unde quidem sit velit optio error asperiores. Eos aspernatur voluptatum ipsam dignissimos totam excepturi fugiat. Recusandae ea porro laboriosam assumenda maxime explicabo animi a repudiandae expedita est itaque voluptates neque eaque sequi debitis quaerat non nostrum architecto laborum distinctio, quibusdam nam. Eius ipsum ut impedit harum aliquid debitis temporibus.
                                Dicta error beatae numquam ratione consequatur dolore facilis possimus deserunt doloremque?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesDetails;