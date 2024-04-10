import { PiUsersThreeBold } from "react-icons/pi";
import { HiOutlineHeart,HiPaperClip } from "react-icons/hi";


const BdComminutedev = () => {
    return (
        <div className="py-4 bg-[#6674cc] mt-12">
            <h3 className="text-center font-bold pt-4 text-white text-2xl">Bangladesh Most Loved Coding Community</h3>
            <div className="flex px-44 pt-8 pb-5 justify-between items-center">
                <div className="flex text-xl font-bold flex-col items-center text-[#fff]">
                    <p className="flex gap-2 items-center"><PiUsersThreeBold className="text-2xl"/>300000+</p>
                    <p>HAPPAY LEARNERS</p>
                </div>
                <div className="flex text-xl font-bold flex-col items-center text-[#fff]">
                    <p className="flex gap-2 items-center"><HiOutlineHeart className="text-2xl"/>30000+</p>
                    <p>MONTHLY VIEWS</p>
                </div>
                <div  className="flex text-xl font-bold flex-col items-center text-[#fff]">
                   <p className="flex gap-2 items-center"><HiPaperClip className="text-2xl"/> 51000+</p>
                    <p>MONTHLY SUBSCRIBES</p>
                </div>
            </div>
        </div>
    );
};

export default BdComminutedev;