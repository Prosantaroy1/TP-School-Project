
const Category = () => {
    return (
        <div className="pt-12 px-16  py-6 mt-4">
            <h3 className="text-center text-black text-2xl font-bold font-serif ">
                TOP IT CATEGORY COURSES
            </h3>
            <div className="flex pt-7 px-36 gap-6 items-center">
                <div className="border-2 rounded px-6 bg-[#39f2ab] py-8 hover:bg-orange-500  text-black">
                    <h3 className="text-xl font-bold font-mono">Web Development</h3>
                </div>
                <div className="border-2 rounded px-6 py-8 bg-[#39f2ab] hover:bg-yellow-300 text-black">
                    <h3 className="text-xl font-bold font-mono">Game Development</h3>
                </div>
                <div className="border-2 rounded px-6 py-8 bg-[#39f2ab] hover:bg-lime-500  text-black">
                    <h3 className="text-xl font-bold font-mono">Graphics Design</h3>
                </div>
                <div className="border-2 rounded px-6 py-8 bg-[#39f2ab] hover:bg-sky-800  text-black">
                    <h3 className="text-xl font-bold font-mono">Machine Learing</h3>
                </div>
            </div>
        </div>
    );
};

export default Category;