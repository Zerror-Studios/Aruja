import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState, useRef, useEffect } from "react";

const VideoSwiper = () => {
  const data = [
    {
      id: 1,
      name: "Vivanta Apartment",
      city: "Jaipur",
      state: "Rajasthan",
      video: "/video/vid1.mp4",
    },
    {
      id: 2,
      name: "RIDANKO Office",
      city: "Jaipur",
      state: "Rajasthan",
      video: "/video/vid2.mp4",
    },
    {
      id: 3,
      name: "Moodboards",
      city: "Jaipur",
      state: "Rajasthan",
      video: "/video/last_vid.mp4",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);
  const sectionRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 } 
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const currentVideo = videoRefs.current[currentSlide];
    if (!currentVideo) return;

    if (isVisible) {
      if (currentVideo.currentTime < 0.1) {
        requestIdleCallback(() => {
          currentVideo.play().catch(() => {});
        });
      }
    } else {
      currentVideo.pause();
      currentVideo.currentTime = 0;
    }
  }, [isVisible, currentSlide]);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper && prevRef.current && nextRef.current) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiperRef.current]);

  const handleSlideChange = (swiper) => {
    const previousVideo = videoRefs.current[currentSlide];
    if (previousVideo && !previousVideo.paused) {
      previousVideo.pause();
      previousVideo.currentTime = 0;
    }

    setCurrentSlide(swiper.activeIndex);

    const nextVideo = videoRefs.current[swiper.activeIndex];
    if (isVisible && nextVideo) {
      nextVideo.currentTime = 0;
      requestIdleCallback(() => {
        nextVideo.play().catch(() => {});
      });
    }
  };

  const handleVideoEnded = (index) => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    if (index < data.length - 1) {
      swiper.slideNext();
    } else {
      swiper.slideTo(0); 
    }
  };

  return (
    <div
      ref={sectionRef}
      className="w-full h-screen relative overflow-hidden"
    >
      {/* Arrows */}
      <div className="absolute top-[45%] z-[2] w-full flex justify-between px-3">
        <button
          ref={prevRef}
          className={`size-8 center text-xs text-white rounded-full border transition-opacity duration-300 ${
            currentSlide === 0 ? "opacity-40 cursor-not-allowed" : ""
          }`}
        >
          <p className="-translate-y-[1px]">←</p>
        </button>
        <button
          ref={nextRef}
          className={`size-8 center text-xs text-white rounded-full border transition-opacity duration-300 ${
            currentSlide === data.length - 1
              ? "opacity-40 cursor-not-allowed"
              : ""
          }`}
        >
          <p className="-translate-y-[1px]">→</p>
        </button>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        speed={600}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        className="story_swiper_classname_swiper"
      >
        {data.map((item, index) => {
          // only render current, prev, next for performance
          const shouldRender =
            index === currentSlide ||
            index === currentSlide - 1 ||
            index === currentSlide + 1;

          return (
            <SwiperSlide key={item.id}>
              <div className="w-full h-screen relative flex items-center justify-center text-white">
                {shouldRender && (
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className="w-full h-full object-cover brightness-50 will-change-transform"
                    src={item.video}
                    playsInline
                    muted
                    preload="metadata"
                    onEnded={() => handleVideoEnded(index)}
                  />
                )}
                {/* Top counter */}
                <div className="absolute text-xl z-[5] flex justify-center w-full gap-3 lg:gap-10 top-10">
                  <h2>{index + 1}</h2>
                  <h2>/</h2>
                  <h2>{data.length}</h2>
                </div>
                {/* Text overlay */}
                <div className="absolute z-[5] w-full flex flex-col md:flex-row items-center text-center md:text-start justify-between px-3 lg:px-10">
                  <div className="md:w-[20%]">
                    <p className="text-sm lg:text-base uppercase">
                      {item.city}
                    </p>
                    <p className="md:hidden text-sm lg:text-base uppercase">
                      {item.state}
                    </p>
                  </div>
                  <h2 className="mt-5 md:mt-0 text-4xl lg:text-7xl uppercase">
                    {item.name}
                  </h2>
                  <div className="hidden md:block w-[20%] text-end">
                    <p className="text-sm lg:text-base capitalize">mumbai</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default VideoSwiper;
