


const Category = () => {
    return (
        <div className="pt-12 overflow-x-hidden md:px-0 px-4 container mx-auto  py-6 mt-4">
            <h3 className="text-center text-black md:text-4xl text-2xl font-bold font-serif ">
                TOP IT CATEGORY COURSES
            </h3>
            <div className="grid md:grid-cols-5 grid-cols-2 gap-5 items-center pt-8">
                <div  data-aos="fade-right" className="card  shadow-xl">
                    <div className="card-body rounded-2xl hover:bg-lime-200 transform duration-200 hover:scale-110 bg-[#d6db91]  py-16">
                        <h2 className="text-center text-2xl font-bold">
                            Web Development
                        </h2>
                    </div>
                </div>
                <div data-aos="fade-right" className="card  shadow-xl">
                    <div className="card-body rounded-2xl hover:bg-lime-200 transform duration-200 hover:scale-110 bg-[#d6db91]  py-16">
                        <h2 className="text-center text-2xl font-bold">
                            Game Development
                        </h2>
                    </div>
                </div>
                <div data-aos="flip-left" className="card shadow-xl">
                    <div className="card-body rounded-2xl hover:bg-lime-200 transform duration-200 hover:scale-110 bg-[#d6db91]  py-16">
                        <h2 className="text-center text-2xl font-bold">
                            AI & Mechine Leannig
                        </h2>
                    </div>
                </div>
                <div data-aos="fade-left" className="card shadow-xl">
                    <div className="card-body rounded-2xl hover:bg-lime-200 transform duration-200 hover:scale-110 bg-[#d6db91]  py-16">
                        <h2 className="text-center text-2xl font-bold">
                            BSC Preparetion
                        </h2>
                    </div>
                </div>
                <div data-aos="fade-left" className="card shadow-xl">
                    <div className="card-body rounded-2xl hover:bg-lime-200 transform duration-200 hover:scale-110 bg-[#d6db91]  py-16">
                        <h2 className="text-center text-2xl font-bold">
                            DSA & CV Make
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;