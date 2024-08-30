
const SubscribeSec = () => {
    return (
        <div className="bg-[#59628b] text-white">
            <div data-aos="zoom-in-up" className="container mx-auto  flex items-center justify-center flex-col gap-3 py-20">
                <h3 className="text-5xl font-semibold">Subscribe To Us</h3>
                <p className="text-xl font-medium">Subscribe to our newsletter</p>
                <div className="flex pt-5 items-center gap-3">
                    <input type="email" placeholder="Email" className="input text-black input-bordered w-full" />
                    <button className="btn btn-accent">Subscribe now</button>
                </div>
            </div>
        </div>
    );
};

export default SubscribeSec;