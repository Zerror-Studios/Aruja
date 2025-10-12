import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useRef, useEffect } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react';

const VideoSwiper = () => {


    const data = [
        {
            id: 1,
            name: "Vivanta Apartment",
            city: "Jaipur",
            state: "Rajasthan",
            video: "/video/vid1.mp4"
        }, {
            id: 2,
            name: "RIDANKO Office",
            city: "Jaipur",
            state: "Rajasthan",
            video: "/video/vid2.mp4"
        }, {
            id: 3,
            name: "Moodboards",
            city: "Jaipur",
            state: "Rajasthan",
            video: "/video/last_vid.mp4"
        }
    ]




    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(data.length);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);


    useEffect(() => {
        if (swiperInstance && prevRef.current && nextRef.current) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.destroy(); // destroy existing navigation
            swiperInstance.navigation.init(); // re-init navigation
            swiperInstance.navigation.update(); // update navigation
        }
    }, [swiperInstance, prevRef, nextRef]);

    return (
        <div className=" w-full h-screen  relative  ">
            <div className="absolute top-[45%] z-[2] w-full ">
                <div className="flex  justify-between ">
                    <button
                        ref={prevRef}
                        className={`size-10 center  shrink-0 text-[#ffffff] rounded-full border  z-10 transition-opacity duration-300 ${currentSlide === 0 ? ' text-black opacity-40 cursor-not-allowed' : ''
                            }`}
                    >
                        <p className="-translate-y-[1px]" >
                            ←
                        </p>
                        {/* <RiArrowLeftLine size={20} /> */}
                    </button>
                    <button
                        ref={nextRef}
                        className={`size-10 center  shrink-0 text-[#ffffff] rounded-full border  z-10 transition-opacity duration-300 ${currentSlide === totalSlides - 1 ? ' text-black opacity-40 cursor-not-allowed' : ''
                            }`}
                    >
                        <p className="-translate-y-[1px]" >→</p>
                        {/* <RiArrowRightLine size={20} /> */}
                    </button>


                </div>
            </div>
            <Swiper
                modules={[Navigation, A11y ,Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                speed={600}
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
                className="story_swiper_classname_swiper"
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <div
                                className=" w-full h-screen  relative  center text-white">
                                <video className=' w-full brightness-50 h-full object-cover' loop autoPlay muted playsInline src={item.video}></video>
                                <div className="  absolute z-[5] flex gap-3 lg:gap-10  top-10 ">
                                    <h2> {index + 1} </h2>
                                    <h2> /</h2>
                                    <h2>3</h2>
                                </div>
                                <div className="  absolute z-[5] w-full flex items-center text-center md:text-start flex-col md:flex-row md:justify-between px-3 lg:px-10">
                                    <div className="md:w-[20%]">
                                        <p className=' text-sm lg:text-base uppercase'>{item.city}</p>
                                        <p className=' md:hidden text-sm lg:text-base uppercase'>{item.state}</p>
                                    </div>
                                    <h2 className=' mt-5 md:mt-0 text-4xl text-center lg:text-7xl uppercase '>{item.name}</h2>
                                    <div className="hidden md:block w-[20%] text-end">
                                        <p className=' text-sm lg:text-base capitalize'>mumbai</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>


        </div>
    );
};

export default VideoSwiper;
