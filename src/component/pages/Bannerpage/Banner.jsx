import { Link } from 'react-router-dom';
import imgbanner from '../../../../public/images.jfif'

const Banner = () => {
    return (
        <div className='flex px-14 pt-20 gap-32 pb-3'>
            <div className='bg-[#ffffff]'>
               <span className='text-[70px] font-bold text-[#000000]'>Learn & become the </span><br/>
               <span className='text-[60px] font-bold text-[#6674cc] space-y-3'>Top 1% software</span><br/>
               <span className='text-[60px] font-bold text-[#6674cc]'> developer</span><br/>
              <div className='pt-14'>
                <Link to='/courses'>
                  <button className="btn text-xl btn-active btn-primary">Explore Our Courses</button>
                </Link>
              </div>
            </div>
            <div >
                <img className=" rounded-xl p-1 border-2 border-emerald-600 w-[420px]  h-[380px]" src={imgbanner} />
            </div>
        </div>
    );
};

export default Banner;