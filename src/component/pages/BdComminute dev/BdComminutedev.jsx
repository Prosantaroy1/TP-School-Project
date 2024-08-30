import { PiUsersThreeBold } from "react-icons/pi";
import { HiOutlineHeart,HiPaperClip } from "react-icons/hi";


const BdComminutedev = () => {
    return (
        <div className="py-16 bg-[#6674cc] mt-12 md:px-1 px-4">
            <h3 className="text-center font-bold pt-4 text-white text-2xl">Bangladesh Most Loved Coding Community</h3>
            <div className="flex  container mx-auto pt-8 pb-5 justify-between items-center">
                <div className="flex md:text-xl text-base font-bold flex-col items-center text-[#fff]">
                    <p className="flex gap-2 items-center"><PiUsersThreeBold className="md:text-2xl text-xl"/>300000+</p>
                    <p>HAPPAY LEARNERS</p>
                </div>
                <div className="flex md:text-xl text-base font-bold flex-col items-center text-[#fff]">
                    <p className="flex gap-2 items-center"><HiOutlineHeart className="md:text-2xl text-xl"/>30000+</p>
                    <p>MONTHLY VIEWS</p>
                </div>
                <div  className="flex md:text-xl text-base font-bold flex-col items-center text-[#fff]">
                   <p className="flex gap-2 items-center"><HiPaperClip className="md:text-2xl text-xl"/> 51000+</p>
                    <p>MONTHLY SUBSCRIBES</p>
                </div>
            </div>
        </div>
    );
};

export default BdComminutedev;