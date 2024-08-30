// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// 
import img1 from '../../../assets/feedback/Interactive-Cares-Testimonial-1.png'
import img2 from '../../../assets/feedback/Interactive-Cares-Testimonial-2.png'
import img3 from '../../../assets/feedback/Interactive-Cares-Testimonial-3.png'
import img4 from '../../../assets/feedback/Interactive-Cares-Testimonial-4.png'
import img5 from '../../../assets/feedback/Interactive-Cares-Testimonial-5.png'
import img6 from '../../../assets/feedback/Interactive-Cares-Testimonial-6.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const FeedbackStu = () => {
    // time
    return (
        <div className='bg-[#eeebcf] pt-8 mb-12'>
            <div className="container mx-auto">
                {/* title */}
                <h3 className="text-center font-semibold text-6xl">Student <span className='text-cyan-400'>Feedback</span></h3>
                {/* card */}
                <div className='pt-12 pb-6'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={img1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img4} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img5} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img6} alt="" />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default FeedbackStu;