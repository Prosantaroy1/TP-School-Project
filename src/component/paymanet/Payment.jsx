import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Payment = () => {
    // 
    const handleClick=()=>{
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Successfully",
            showConfirmButton: false,
            timer: 1500
          });
    }
    return (
        <div className="bg-blue-900 w-full h-screen text-white">
            <div className="container mx-auto py-12 ">
                <h4 className="text-4xl font-semibold">Payment page</h4>
                <div className="flex items-center gap-3 pt-4">
                    <div className="flex items-center"><Link to='/'>Home</Link><GoChevronRight /></div>
                    <div className="flex items-center"><Link to='/courses'>Courses</Link><GoChevronRight /></div>
                    <Link>Payment</Link>
                </div>
                {/* payment card */}
                <div className="bg-white md:w-1/2 w-full mt-5 px-5 shadow-lg py-5 text-black">
                    <h3 className="text-4xl font-semibold">Payment Details</h3>
                    {/* input filed */}
                    <div className="pt-4 flex flex-col gap-5">
                        <div className="flex items-center justify-between gap-12">
                            <label className="text-2xl font-semibold">Amount </label>
                            <input type="text" className="border-2 w-2/3 font-bold pl-3 py-2 rounded border-black" value={4450} />
                        </div>
                        <div className="flex items-center justify-between gap-12">
                            <label className="text-2xl font-semibold">Email </label>
                            <input type="email" className="border-2  text-xl w-2/3  pl-3 py-2 rounded border-black" />
                        </div>
                        <div className="flex items-center justify-between  gap-12">
                            <label className="text-2xl font-semibold">Phone </label>
                            <input type="number" className="border-2 text-xl w-2/3  pl-3 py-2 rounded border-black" />
                        </div>
                        <div className="flex items-center justify-between  gap-12">
                            <label className="text-xl font-semibold">Full Name </label>
                            <input type="text" className="border-2 text-xl w-2/3   pl-3 py-2 rounded border-black" />
                        </div>
                        <div className="flex items-center justify-center pt-5">
                            <button onClick={()=>handleClick()} className="btn bg-green-500 btn-wide">Payment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;