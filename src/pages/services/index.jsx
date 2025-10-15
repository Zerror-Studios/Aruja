import React, { useEffect } from 'react'
import gsap from 'gsap'
import CustomEase from 'gsap/dist/CustomEase'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { usePageReady } from '@/components/hooks/usePageReady';
import SeoHeader from '@/components/seo/SeoHeader';
gsap.registerPlugin(ScrollTrigger, CustomEase);

const ServiceSlider = () => {

const meta = {
  title: "STUDIO AKTO — SERVICES",
  description: "Discover Studio AKTO’s interior design services, creating functional, proportion-led spaces for residential, commercial, and hospitality projects.",
  canonical: "https://studioakto.com/services",
  og: {
    title: "STUDIO AKTO — SERVICES",
    description: "We craft tailored interior solutions across homes, offices, and hospitality, balancing form, function, and flow.",
    image: "https://www.studioakto.com/logo.png" // Replace with a hero image from your services page if available
  },
  twitter: {
    card: "summary_large_image",
    title: "STUDIO AKTO — SERVICES",
    description: "Explore our range of interior design services that transform spaces with proportion, purpose, and precision.",
    image: "https://www.studioakto.com/logo.png" // Optional: replace with a hero image
  },
  robots: "index,follow"
};


    useEffect(() => {
        const ctx = gsap.context(() => {

            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".serv_slider_paren",
                    start: "top top",
                    end: "+=3000",
                    scrub: true,
                    pin: true,
                    // markers:true,
                    // anticipatePin: 1
                }
            });

            tl.fromTo(".serv_slide_bg_img_1", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            }, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                ease: "linear",
            });
            tl.fromTo(".serv_slide_bg_img_2", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            }, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                ease: "linear",
            });
            tl.fromTo(".serv_slide_bg_img_3", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            }, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                ease: "linear",
            });
        });

        const handlePageReady = () => {
            ScrollTrigger.refresh(true);
        };
        window.addEventListener("pageReady", handlePageReady);

        return () => {
            ctx.revert();
            window.removeEventListener("pageReady", handlePageReady);
        };
    }, []);



    usePageReady(() => {
        gsap.to(".serv_anim_txt", {
            transform: "translateY(0%)",
            stagger: 0.05,
            ease: "ease-secondary",
            duration: 2,
        });

        gsap.to(".serv_clip_div_back", {
            opacity: 1,
            ease: "ease-secondary",
            duration: 1.5,
            stagger: 0.1,
        })
        gsap.to(".serv_clip_div", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "ease-secondary",
            duration: 1.5,
            stagger: 0.1,
        })

    });


    return (
        <div>
            <SeoHeader meta={meta} />

            <div id='services' className=" serv_slider_paren overflow-hidden w-full center  text-[#FFFDF6] h-screen relative">
                <img
                    className=' serv_clip_div_back opacity-0 serv_slide_bg_img_1 w-full h-full absolute object-cover top-0 left-0 z-[4] ' src="/Images/services/servImg4.webp" alt="loading" />
                <img
                    className=' serv_clip_div_back opacity-0 serv_slide_bg_img_2 w-full h-full absolute object-cover top-0 left-0 z-[3] ' src="/Images/services/servImg2.webp" alt="loading" />
                <img
                    className=' serv_clip_div_back opacity-0 serv_slide_bg_img_3 w-full h-full absolute object-cover top-0 left-0 z-[2] ' src="/Images/services/servImg3.webp" alt="loading" />
                <img
                    className=' serv_clip_div_back opacity-0 serv_slide_bg_img_4 w-full h-full absolute object-cover top-0 left-0 z-[1] ' src="/Images/services/servImg1.webp" alt="loading" />

                <div className=" serv_slide_bg_img_1 absolute w-[90%] lg:w-[80%] h-[70%]  lg:h-[80%] bg-[#454738] z-[15] p-8">
                    <div className=" w-full h-[40%]  pb-5 flex flex-col justify-between">
                        <div className=" flex   justify-between">
                            <div className="flex gap-2  overflow-hidden uppercase text-xl lg:text-4xl">
                                <p className='serv_anim_txt translate-y-[105%]'>Our</p>
                                <h2 className=' serv_anim_txt translate-y-[105%] italic'>Services</h2>
                            </div>
                            <div className="flex overflow-hidden gap-2 items-end">
                                <p className=' serv_anim_txt translate-y-[105%] text-3xl  lg:text-7xl'>01/</p>
                                <p className=' serv_anim_txt translate-y-[105%]  text-lg lg:text-5xl opacity-50'>04</p>
                            </div>
                        </div>
                        <div className=" flex flex-col lg:flex-row space-y-5 lg:space-y-0  lg:items-end justify-between">
                            <div className="block overflow-hidden ">
                                <p className=' leading-none text-3xl lg:text-5xl uppercase  serv_anim_txt translate-y-[105%] '>Residential Interior </p>
                            </div>
                            <div className=" overflow-hidden w-full text-sm lg:text-base lg:w-[30%] leading-none">
                                <p className='serv_anim_txt translate-y-[105%]'>Personalized home transformations that balance aesthetics and function, creating warm, timeless spaces tailored to everyday living.</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[60%] w-full">
                        <img
                            style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", }}
                            className='w-full h-full object-cover serv_clip_div ' src="/Images/services/servImg4.webp" alt="loading" />
                    </div>
                </div>


                <div className=" serv_slide_bg_img_2 absolute w-[90%] lg:w-[80%] h-[70%]  lg:h-[80%] bg-[#454738] z-[14] p-8">
                    <div className=" w-full h-[40%]  pb-5 flex flex-col justify-between">
                        <div className=" flex   justify-between">
                            <div className="flex gap-2 uppercase text-xl lg:text-4xl">
                                <p>Our</p>
                                <h2 className='italic'>Services</h2>
                            </div>
                            <div className="flex gap-2 items-end">
                                <p className=' text-3xl  lg:text-7xl'>02/</p>
                                <p className=' text-lg lg:text-5xl opacity-50'>04</p>
                            </div>
                        </div>
                        <div className=" flex flex-col lg:flex-row space-y-5 lg:space-y-0  lg:items-end justify-between">
                            <p className=' leading-none text-3xl lg:text-5xl uppercase'>commercial interiors</p>
                            <div className=" w-full text-sm lg:text-base lg:w-[30%] leading-none">
                                <p className=''>Transformative redesign of workspaces that enhance functionality, reflect brand identity, and create engaging professional environments.</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[60%] w-full">
                        <img
                            style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", }}
                            className='w-full h-full object-cover serv_clip_div ' src="/Images/services/servImg2.webp" alt="loading" />
                    </div>
                </div>


                <div className="serv_slide_bg_img_3 absolute w-[90%] lg:w-[80%] h-[70%]  lg:h-[80%] bg-[#454738] z-[13] p-8">
                    <div className=" w-full h-[40%]  pb-5 flex flex-col justify-between">
                        <div className=" flex   justify-between">
                            <div className="flex gap-2 uppercase text-xl lg:text-4xl">
                                <p>Our</p>
                                <h2 className='italic'>Services</h2>
                            </div>
                            <div className="flex gap-2 items-end">
                                <p className=' text-3xl  lg:text-7xl'>03/</p>
                                <p className=' text-lg lg:text-5xl opacity-50'>04</p>
                            </div>
                        </div>
                        <div className=" flex flex-col lg:flex-row space-y-5 lg:space-y-0  lg:items-end justify-between">
                            <p className=' leading-none text-3xl lg:text-5xl uppercase'>space planning</p>
                            <div className=" w-full text-sm lg:text-base lg:w-[30%] leading-none">
                                <p className=''>Comprehensive planning of form and flow to create efficient, balanced, and experience-driven living or working spaces.</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[60%] w-full">
                        <img
                            style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", }}
                            className='w-full h-full object-cover serv_clip_div ' src="/Images/services/servImg3.webp" alt="loading" />
                    </div>
                </div>


                <div className="serv_slide_bg_img_4 absolute w-[90%] lg:w-[80%] h-[70%]  lg:h-[80%] bg-[#454738] z-[12] p-8">
                    <div className=" w-full h-[40%]  pb-5 flex flex-col justify-between">
                        <div className=" flex   justify-between">
                            <div className="flex gap-2 uppercase text-xl lg:text-4xl">
                                <p>Our</p>
                                <h2 className='italic'>Services</h2>
                            </div>
                            <div className="flex gap-2 items-end">
                                <p className=' text-3xl  lg:text-7xl'>04/</p>
                                <p className=' text-lg lg:text-5xl opacity-50'>04</p>
                            </div>
                        </div>
                        <div className=" flex flex-col lg:flex-row space-y-5 lg:space-y-0  lg:items-end justify-between">
                            <p className=' leading-none text-3xl lg:text-5xl uppercase'>styling</p>
                            <div className=" w-full text-sm lg:text-base lg:w-[30%] leading-none">
                                <p className=''>Thoughtful selection of materials and decor that refine spaces with balance, texture, and timeless visual appeal.</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[60%] w-full">
                        <img
                            style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", }}
                            className='w-full h-full object-cover serv_clip_div ' src="/Images/services/servImg1.webp" alt="loading" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSlider