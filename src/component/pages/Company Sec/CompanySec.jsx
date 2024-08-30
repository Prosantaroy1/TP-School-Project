import logo1 from '../../../assets/compnayImg/company1.png'
import logo2 from '../../../assets/compnayImg/company2.png'
import logo3 from '../../../assets/compnayImg/company3.png'
import logo4 from '../../../assets/compnayImg/company4.png'
import logo5 from '../../../assets/compnayImg/company5.png'
import logo6 from '../../../assets/compnayImg/comapny6.png'
import logo7 from '../../../assets/compnayImg/company7.png'
import logo8 from '../../../assets/compnayImg/company8.png'
import logo9 from '../../../assets/compnayImg/company9.png'
import logo10 from '../../../assets/compnayImg/company10.png'
import logo11 from '../../../assets/compnayImg/company11.png'

const CompanySec = () => {
    return (
        <div className="bg-slate-200 py-20 md:px-0 px-4">
            <div className="container mx-auto">
                <h3 className="text-center text-4xl">
                    Thousands of our students achieved their <span className="text-pink-500">dream job</span> at
                </h3>
                {/* company logo */}
                <div className='pt-6 '>
                    <ul className='grid md:grid-cols-6 grid-cols-3  items-center gap-20 '>
                        <li>
                            <img src={logo1} alt="" className='w-40 h-40'/>
                        </li>
                        <li>
                            <img src={logo2} alt=""  className='w-40 h-40'/>
                        </li>
                        <li>
                            <img src={logo3} alt=""  className='w-40 h-40'/>
                        </li>
                        <li>
                            <img src={logo4} alt=""  className='w-40 h-40'/>
                        </li>
                        <li>
                            <img src={logo5} alt=""  className='w-40 h-40'/>
                        </li>
                        <li>
                            <img src={logo6} alt=""  className='w-40 h-40'/>
                        </li>
                        <li>
                            <img src={logo7} alt="" className='w-40 h-40' />
                        </li>
                        <li>
                            <img src={logo9} alt="" className='w-40 h-40' />
                        </li>
                        <li>
                            <img src={logo10} alt=""  className='w-40 h-40'/>
                        </li>
                        <li>
                            <img src={logo11} alt=""  className='w-40 h-40'/>
                        </li>
                        <li>
                            <img src={logo8} alt=""  className='w-40 h-40'/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CompanySec;