import React, { useEffect } from 'react'
import gsap from 'gsap'
import CustomEase from 'gsap/dist/CustomEase'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger, CustomEase);

const VideoSection = () => {

    useEffect(() => {
        const videos = document.querySelectorAll("video");

    // ✅ Attempt to autoplay all videos on mount (for iOS)
    videos.forEach(video => {
      video.muted = true; // ensure muted
      video.playsInline = true; // allow inline playback on iOS
      video.currentTime = 0;
      // try autoplay programmatically
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // if autoplay is blocked, wait for first user interaction
          const handleUserGesture = () => {
            video.play();
            window.removeEventListener('touchstart', handleUserGesture);
            window.removeEventListener('click', handleUserGesture);
          };
          window.addEventListener('touchstart', handleUserGesture, { once: true });
          window.addEventListener('click', handleUserGesture, { once: true });
        });
      }
    });
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".show_reel_paren",
                start: "top top",
                end: "300% top ",
                scrub: true,
                pin: true,
                anticipatePin: 1,
                // markers: true
            }
        })
        gsap.fromTo(".show_reel_1", {
            clipPath: "polygon(20% 10%, 80% 10%, 80% 90%, 20% 90%)",
        }, {
            scrollTrigger: {
                trigger: ".show_reel_paren",
                start: "top bottom",
                end: "top top",
                scrub: true,
                // markers: true
            },
            scale: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 4,
            ease: "linear",
        })
        tl.fromTo(".show_reel_2", {
            clipPath: "polygon(20% 10%, 80% 10%, 80% 90%, 20% 90%)",
            y: 650
        }, {
            scale: 1,
            y: 0,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 3,
            ease: "linear",
        }, "pp")
        tl.to(".det_1", {
            y: -200,
            opacity: 0,
            duration: 3,
            ease: "linear",
        }, "pp")
        tl.to(".vid_1", {
            filter: "brightness(0.2)",
            duration: 3,
            ease: "linear",
        }, "pp")
        tl.fromTo(".show_reel_3", {
            clipPath: "polygon(20% 10%, 80% 10%, 80% 90%, 20% 90%)",
            y: 650
        }, {
            scale: 1,
            y: 0,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 3,
            ease: "linear",
        }, "pp2")
        tl.to(".det_2", {
            y: -200,
            opacity: 0,
            duration: 3,
            ease: "linear",
        }, "pp2")
        tl.to(".vid_2", {
            filter: "brightness(0.2)",
            duration: 3,
            ease: "linear",
        }, "pp2")


    }, [])


    return (
        <div>
            <div className=" show_reel_paren w-full h-screen center ">
                <div
                    style={{ clipPath: "polygon(20% 10%, 80% 10%, 80% 90%, 20% 90%)" }}
                    className="show_reel_1 absolute z-[1]  w-full h-screen scale-[.3]   center text-white">
                    <video className='vid_1 w-full brightness-75 h-full object-cover' loop  muted playsInline src="/video/vid1.mp4"></video>
                    <div className=" det_1 absolute flex gap-3 lg:gap-10  top-10 ">
                        <h2> 1 </h2>
                        <h2> /</h2>
                        <h2>3</h2>
                    </div>
                    <div className=" det_1 absolute w-full flex items-center text-center md:text-start flex-col md:flex-row md:justify-center px-3 lg:px-10">
                        {/* <div className="md:w-[20%]">
                            <p className=' text-sm lg:text-base uppercase'>Jaipur</p>
                            <p className=' md:hidden text-sm lg:text-base uppercase'>Rajasthan</p>
                        </div> */}
                        <h2 className=' mt-5 md:mt-0 text-4xl text-center lg:text-7xl uppercase '>living rooms </h2>
                        {/* <div className="hidden md:block w-[20%] text-end">
                            <p className=' text-sm lg:text-base uppercase'>Rajasthan</p>
                        </div> */}
                    </div>
                </div>
                <div
                    style={{ clipPath: "polygon(20% 10%, 80% 10%, 80% 90%, 20% 90%)" }}
                    className=" show_reel_2 absolute z-[2] w-full h-full scale-[.3]  center text-white">
                    <video className=' vid_2 w-full brightness-75 h-full object-cover' loop  muted playsInline src="/video/vid2.mp4"></video>
                    <div className=" det_2 absolute flex gap-3 lg:gap-10  top-10 ">
                        <h2> 2 </h2>
                        <h2> /</h2>
                        <h2>3</h2>
                    </div>
                    <div className=" det_2 absolute w-full flex items-center text-center md:text-start flex-col md:flex-row md:justify-center px-3 lg:px-10">
                        {/* <div className="md:w-[20%]  md:text-start">
                            <p className=' text-sm lg:text-base uppercase'>Jaipur</p>
                            <p className=' md:hidden text-sm lg:text-base uppercase'>Rajasthan</p>
                        </div> */}
                        <h2 className=' mt-5 md:mt-0 text-4xl text-center lg:text-7xl uppercase '>Kitchens </h2>
                        {/* <div className=" hidden md:block w-[20%] text-end">
                            <p className=' text-sm lg:text-base uppercase'>Rajasthan</p>
                        </div> */}
                    </div>
                </div>
                <div
                    style={{ clipPath: "polygon(20% 10%, 80% 10%, 80% 90%, 20% 90%)" }}
                    className=" show_reel_3 absolute z-[3] w-full h-full scale-[.3]  center text-white">
                    <video className='w-full brightness-75 h-full object-cover' loop  muted playsInline src="/video/last_vid.mp4"></video>
                    <div className="absolute flex gap-3 lg:gap-10  top-10 ">
                        <h2> 3 </h2>
                        <h2> /</h2>
                        <h2>3</h2>
                    </div>
                    <div className="absolute w-full flex items-center text-center md:text-start flex-col md:flex-row md:justify-center px-3 lg:px-10">
                        {/* <div className="md:w-[20%] whitespace-nowrap  md:text-start">
                            <p className=' text-sm lg:text-base uppercase'>Jaipur</p>
                            <p className=' md:hidden text-sm lg:text-base uppercase'>Rajasthan</p>
                        </div> */}
                        <h2 className=' mt-5 md:mt-0 text-4xl text-center lg:text-7xl uppercase '>Bedrooms </h2>
                        {/* <div className=" hidden md:block w-[20%] text-end">
                            <p className=' text-sm lg:text-base uppercase'>Rajasthan</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoSection