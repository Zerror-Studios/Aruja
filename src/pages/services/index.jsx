import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import CustomEase from 'gsap/dist/CustomEase'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { usePageReady } from '@/components/hooks/usePageReady';
import SeoHeader from '@/components/seo/SeoHeader';
import Link from 'next/link';
import useNavigation from '@/store/useNavigation';
import { useRouter } from 'next/router';

gsap.registerPlugin(ScrollTrigger, CustomEase);

const ServiceSlider = () => {
    const router = useRouter();
    const cursorRef = useRef(null);
    const { navigate } = useNavigation();
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

    useEffect(() => {
        if (window.innerWidth < 1020) return;

        const cursor = cursorRef.current;
        const servSlider = document.querySelector(".serv_slider_paren");

        if (!cursor || !servSlider) return;

        const hideCursor = () => {
            gsap.to(cursor, {
                opacity: 0,
                duration: 0.2,
                ease: "power3.out",
            });
        };

        const showCursor = () => {
            gsap.to(cursor, {
                opacity: 1,
                duration: 0.2,
                ease: "power3.out",
            });
        };

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.25,
                ease: "power3.out",
            });
        };

        // Cursor should follow ONLY inside serv_slider_paren
        servSlider.addEventListener("mousemove", moveCursor);
        servSlider.addEventListener("mouseenter", showCursor);
        servSlider.addEventListener("mouseleave", hideCursor);

        // Cursor should be hidden everywhere else
        window.addEventListener("mousemove", (e) => {
            if (!servSlider.contains(e.target)) {
                hideCursor();
            }
        });

        return () => {
            servSlider.removeEventListener("mousemove", moveCursor);
            servSlider.removeEventListener("mouseenter", showCursor);
            servSlider.removeEventListener("mouseleave", hideCursor);
        };
    }, []);


    return (
        <div>
            <SeoHeader meta={meta} />
            <div
                ref={cursorRef}
                className="service_custom-cursor text-xs -translate-x-1/2 -translate-y-1/2 opacity-0 px-4 py-2 top-0 left-0 z-[999999] bg-[#2E2D2B] text-[#FFFDF4] fixed pointer-events-none"
            >
                <p className="">Explore</p>
            </div>

            <div id='services' className=" cursor-none  serv_slider_paren overflow-hidden w-full center  text-[#FFFDF6] h-screen relative">
                <img
                    onClick={() => navigate(router, "/services/residential-interior")}
                    className=' serv_clip_div_back opacity-0 serv_slide_bg_img_1 w-full h-full absolute object-cover top-0 left-0 z-[4] ' src="/Images/services/servImg4.webp" alt="loading" />
                <img
                    onClick={() => navigate(router, "/services/commercial-interiors")}
                    className=' serv_clip_div_back opacity-0 serv_slide_bg_img_2 w-full h-full absolute object-cover top-0 left-0 z-[3] ' src="/Images/services/servImg2.webp" alt="loading" />
                <img
                    onClick={() => navigate(router, "/services/space-planning")}
                    className=' serv_clip_div_back opacity-0 serv_slide_bg_img_3 w-full h-full absolute object-cover top-0 left-0 z-[2] ' src="/Images/services/servImg3.webp" alt="loading" />
                <img
                    onClick={() => navigate(router, "/services/interior-styling")}
                    className=' serv_clip_div_back opacity-0 serv_slide_bg_img_4 w-full h-full absolute object-cover top-0 left-0 z-[1] ' src="/Images/services/servImg1.webp" alt="loading" />

                <div onClick={() => navigate(router, "/services/residential-interior")} className=" serv_slide_bg_img_1 absolute w-[90%] lg:w-[80%] h-[70%]  lg:h-[80%] bg-[#454738] z-[15] p-5 lg:p-8">
                    <div className=" w-full h-[40%]  pb-5 flex flex-col justify-between">
                        <div className=" flex   justify-between">
                            <div className="flex gap-1 lg:gap-2  overflow-hidden uppercase text-sm lg:text-4xl">
                                <p className='serv_anim_txt translate-y-[105%]'>Our</p>
                                <h2 className=' serv_anim_txt translate-y-[105%] italic'>Services</h2>
                            </div>
                            <div className="flex overflow-hidden  lg:gap-2 items-end">
                                <p className=' serv_anim_txt translate-y-[105%] text-xl  lg:text-7xl'>01/</p>
                                <p className=' serv_anim_txt translate-y-[105%]  text-sm lg:text-5xl opacity-50'>04</p>
                            </div>
                        </div>
                        <div className=" flex flex-col lg:flex-row space-y-5 lg:space-y-0  lg:items-end justify-between">
                            <div className="block overflow-hidden ">
                                <div className=' relative group  flex items-center gap-5 leading-none text-3xl lg:text-5xl uppercase'>
                                    <p>
                                        Residential Interior
                                    </p>
                                </div>
                            </div>
                            <div className=" overflow-hidden w-full text-sm lg:text-base lg:w-[30%] leading-none">
                                <p className='serv_anim_txt translate-y-[105%]'>Personalized home transformations that balance aesthetics and function, creating warm, timeless spaces tailored to everyday living.</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[60%] relative w-full">
                        <div
                            className=" lg:hidden absolute flex items-center gap-2 bottom-4 h-fit text-xs  px-4 py-2 left-1/2 -translate-x-1/2 z-[99] bg-[#2E2D2B] text-[#FFFDF4]"
                        >
                            <p className="">Explore</p>
                            <img className='invert-100 w-2' src="/icons/arrow_tilted.svg" alt="" />
                        </div>
                        <img
                            style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", }}
                            className='w-full h-full object-cover serv_clip_div ' src="/Images/services/servImg4.webp" alt="loading" />
                    </div>
                </div>


                <div onClick={() => navigate(router, "/services/commercial-interiors")} className=" serv_slide_bg_img_2 absolute w-[90%] lg:w-[80%] h-[70%]  lg:h-[80%] bg-[#454738] z-[14] p-5 lg:p-8">
                    <div className=" w-full h-[40%]  pb-5 flex flex-col justify-between">
                        <div className=" flex   justify-between">
                            <div className="flex gap-1 lg:gap-2 uppercase text-sm lg:text-4xl">
                                <p>Our</p>
                                <h2 className='italic'>Services</h2>
                            </div>
                            <div className="flex gap-0 lg:gap-2 items-end">
                                <p className=' text-xl  lg:text-7xl'>02/</p>
                                <p className=' text-sm lg:text-5xl opacity-50'>04</p>
                            </div>
                        </div>
                        <div className=" flex flex-col lg:flex-row space-y-5 lg:space-y-0  lg:items-end justify-between">
                            <div className=' relative group  flex items-center gap-5 leading-none text-3xl lg:text-5xl uppercase'>
                                <p>
                                    commercial interiors
                                </p>
                            </div>
                            <div className=" w-full text-sm lg:text-base lg:w-[30%] leading-none">
                                <p className=''>Transformative redesign of workspaces that enhance functionality, reflect brand identity, and create engaging professional environments.</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[60%] relative w-full">
                        <div
                            className=" lg:hidden absolute flex items-center gap-2 bottom-4 h-fit text-xs  px-4 py-2 left-1/2 -translate-x-1/2 z-[99] bg-[#2E2D2B] text-[#FFFDF4]"
                        >
                            <p className="">Explore</p>
                            <img className='invert-100 w-2' src="/icons/arrow_tilted.svg" alt="" />
                        </div>
                        <img
                            style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", }}
                            className='w-full h-full object-cover serv_clip_div ' src="/Images/services/servImg2.webp" alt="loading" />
                    </div>
                </div>


                <div onClick={() => navigate(router, "/services/space-planning")} className="serv_slide_bg_img_3 absolute w-[90%] lg:w-[80%] h-[70%]  lg:h-[80%] bg-[#454738] z-[13] p-5 lg:p-8">
                    <div className=" w-full h-[40%]  pb-5 flex flex-col justify-between">
                        <div className=" flex   justify-between">
                            <div className="flex gap-1 lg:gap-2 uppercase text-sm lg:text-4xl">
                                <p>Our</p>
                                <h2 className='italic'>Services</h2>
                            </div>
                            <div className="flex gap-0 lg:gap-2 items-end">
                                <p className=' text-xl  lg:text-7xl'>03/</p>
                                <p className=' text-sm lg:text-5xl opacity-50'>04</p>
                            </div>
                        </div>
                        <div className=" flex flex-col lg:flex-row space-y-5 lg:space-y-0  lg:items-end justify-between">
                            <div className=' relative group  flex items-center gap-5 leading-none text-3xl lg:text-5xl uppercase'>
                                <p>
                                    space planning
                                </p>
                            </div>
                            <div className=" w-full text-sm lg:text-base lg:w-[30%] leading-none">
                                <p className=''>Comprehensive planning of form and flow to create efficient, balanced, and experience-driven living or working spaces.</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[60%] relative w-full">
                        <div
                            className=" lg:hidden absolute flex items-center gap-2 bottom-4 h-fit text-xs  px-4 py-2 left-1/2 -translate-x-1/2 z-[99] bg-[#2E2D2B] text-[#FFFDF4]"
                        >
                            <p className="">Explore</p>
                            <img className='invert-100 w-2' src="/icons/arrow_tilted.svg" alt="" />
                        </div>
                        <img
                            style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", }}
                            className='w-full h-full object-cover serv_clip_div ' src="/Images/services/servImg3.webp" alt="loading" />
                    </div>
                </div>


                <div onClick={() => navigate(router, "/services/interior-styling")} className="serv_slide_bg_img_4 absolute w-[90%] lg:w-[80%] h-[70%]  lg:h-[80%] bg-[#454738] z-[12] p-5 lg:p-8">
                    <div className=" w-full h-[40%]  pb-5 flex flex-col justify-between">
                        <div className=" flex   justify-between">
                            <div className="flex gap-1 lg:gap-2 uppercase text-sm lg:text-4xl">
                                <p>Our</p>
                                <h2 className='italic'>Services</h2>
                            </div>
                            <div className="flex gap-0 lg:gap-2 items-end">
                                <p className=' text-xl  lg:text-7xl'>04/</p>
                                <p className=' text-sm lg:text-5xl opacity-50'>04</p>
                            </div>
                        </div>
                        <div className=" flex flex-col lg:flex-row space-y-5 lg:space-y-0  lg:items-end justify-between">
                            <div className=' relative group  flex items-center gap-5 leading-none text-3xl lg:text-5xl uppercase'>
                                <p>
                                    Interior styling
                                </p>
                            </div>
                            <div className=" w-full text-sm lg:text-base lg:w-[30%] leading-none">
                                <p className=''>Thoughtful selection of materials and decor that refine spaces with balance, texture, and timeless visual appeal.</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[60%] relative w-full">
                        <div
                            className=" lg:hidden absolute flex items-center gap-2 bottom-4 h-fit text-xs  px-4 py-2 left-1/2 -translate-x-1/2 z-[99] bg-[#2E2D2B] text-[#FFFDF4]"
                        >
                            <p className="">Explore</p>
                            <img className='invert-100 w-2' src="/icons/arrow_tilted.svg" alt="" />
                        </div>
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