import { Link } from 'react-router-dom';
import imgbanner from '../../../assets/banner/banner.svg'

const Banner = () => {
    return (
        <div className='flex overflow-x-hidden lg:flex-row lg:gap-1 gap-7 flex-col-reverse md:px-0 px-4  container mx-auto py-28 justify-between  items-center pb-12'>
            <div className='bg-[#ffffff] tracking-wider' data-aos="fade-right">
               <span className='md:text-7xl text-3xl font-bold  text-[#000000]'>Learn & become the </span><br/>
               <span className='md:text-7xl text-3xl font-bold text-[#6674cc] space-y-3'>Top 1% software developer</span>
              <div className='md:pt-14 pt-4'>
                <Link to='/courses'>
                  <button className="btn text-xl btn-active btn-primary">Explore Our Courses</button>
                </Link>
              </div>
            </div>
            <div data-aos="fade-left">
                <img src={imgbanner} className='w-[650px]'/>
            </div>
        </div>
    );
};

export default Banner;