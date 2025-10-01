import { usePageReady } from '@/components/hooks/usePageReady';
import SeoHeader from '@/components/seo/SeoHeader';
import gsap from 'gsap';
import React from 'react'
import Marquee from 'react-fast-marquee'

const index = () => {

    const meta = {
        title: "Studio AKTO — Interior Design Studio",
        description: "We design proportion-led interiors for homes, workspaces, and hospitality.",
        canonical: "https://studioakto.com/",
        og: {
            title: "Studio AKTO — Interior Design Studio",
            description: "Proportion-led interiors across residential, commercial & hospitality.",
            image: "https://www.studioakto.com/logo.png"
        },
        twitter: {
            card: "summary_large_image",
            title: "Studio AKTO",
            description: "Precision and design systems for contemporary spaces.",
            image: "https://www.studioakto.com/logo.png"
        },
        robots: "index,follow"
    };

    usePageReady(() => {
        gsap.to(".marq_op", {
            opacity: 1,
            ease: "ease-secondary",
            duration: 4,
        });
        gsap.to(".belo_link", {
            width: "100%",
            ease: "ease-secondary",
            duration: 2,
        });
        gsap.to(".ctct_anim_txt", {
            transform: "translateY(0%)",
            stagger: 0.05,
            ease: "ease-secondary",
            duration: 1.5,
        });
        gsap.to(".ctct_clip_div", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "ease-secondary",
            duration: 2,
            stagger: 0.15,
        })
    });

    return (
        <>
            <SeoHeader meta={meta} />
            <div className="w-full relative h-[100dvh] flex flex-col-reverse lg:flex-row  ">
                <div
                    style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
                    className=" ctct_clip_div h-[40%]  lg:h-full w-full center lg:w-[25%]">
                    <img className="w-full h-full object-cover" src="/Images/ContactPageImg.webp" alt="" />
                </div>
                <div className=" h-[60%]  lg:h-full w-full lg:w-[75%] relative flex flex-col lg:flex-row items-end gap-y-5  pb-5 lg:gap-y-5 justify-end">
                    <div className=" lg:hidden  marq_op opacity-0 text-5xl lg:text-[6vw] uppercase overflow-hidden scroller_none  w-full ">
                        <Marquee gradient gradientWidth={50} className='   h-full w-full scroller_none ' >
                            <p className='h-full  ml-[10vw] flex gap-10 items-center'>
                                “Got a Thought? <img className='w-8' src="/icons/footerMonogram/1.svg" alt="" />
                            </p>
                            <p className='h-full  ml-[10vw] flex gap-10 items-center'>
                                toss It Here”<img className='w-8' src="/icons/footerMonogram/1.svg" alt="" />
                            </p>
                        </Marquee>
                    </div>
                    <div className=" hidden lg:block absolute marq_op opacity-0 text-5xl lg:text-[6vw] uppercase overflow-hidden scroller_none  w-full top-[10vh] lg:top-[25%]">
                        <Marquee gradient gradientWidth={50} className='   h-full w-full scroller_none ' >
                            <p className='h-full  ml-[5vw] flex gap-20 items-center'>
                                “Got a Thought? <img className='w-20' src="/icons/footerMonogram/1.svg" alt="" />
                            </p>
                            <p className='h-full  ml-[5vw] flex gap-20 items-center'>
                                toss It Here”<img className='w-20' src="/icons/footerMonogram/1.svg" alt="" />
                            </p>

                        </Marquee>
                    </div>

                    <div className="w-full  lg:space-y-10 uppercase p-3 py-5 lg:p-28">
                        <div className="flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row w-full justify-between">
                            <div className=" w-full flex  lg:flex-col justify-start leading-none lg:w-1/2">
                                <div className=' w-[35%]  block overflow-hidden   '>
                                    <p className='ctct_anim_txt mt-1 lg:mt-0 mb-1 text-xs lg:text-sm font-black translate-y-[105%]'  >
                                        Write US
                                    </p>
                                </div>
                                <div className='  block overflow-hidden'>
                                    <p className='ctct_anim_txt text-lg lg:text-2xl translate-y-[105%]'  >
                                        hello@arujak.com
                                    </p>
                                </div>
                            </div>
                            <div className=" w-full flex  lg:flex-col justify-start leading-none lg:w-1/2">
                                <div className='   w-[35%] block overflow-hidden   '>
                                    <p className='ctct_anim_txt mt-1 lg:mt-0 mb-1 text-xs lg:text-sm font-black translate-y-[105%]'  >
                                        find US
                                    </p>
                                </div>
                                <div className='  block overflow-hidden'>
                                    <div className="block overflow-hidden">
                                        <p className='ctct_anim_txt text-lg lg:text-2xl translate-y-[105%]'  >
                                            H.no arujak mumbai,
                                        </p>
                                    </div>
                                    <div className="block overflow-hidden">
                                        <p className='ctct_anim_txt text-lg lg:text-2xl translate-y-[105%]'  >
                                            india
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-5 mt-5 lg:mt-0 lg:flex-row w-full justify-between">

                            <div className=" w-full flex  lg:flex-col justify-start leading-none lg:w-1/2">
                                <div className='  w-[35%]  block overflow-hidden   '>
                                    <p className='ctct_anim_txt mt-1 lg:mt-0 mb-1 text-xs lg:text-sm font-black translate-y-[105%]'  >
                                        talk to US
                                    </p>
                                </div>
                                <div className='  block overflow-hidden'>
                                    <p className='ctct_anim_txt text-lg lg:text-2xl translate-y-[105%]'  >
                                        +91 12345 67890
                                    </p>
                                </div>
                            </div>


                            <div className="  w-full flex  lg:flex-col justify-start leading-none lg:w-1/2 uppercase ">
                                <div className='  w-[35%] block overflow-hidden   '>
                                    <p className='ctct_anim_txt mt-1 lg:mt-0 mb-1 text-xs lg:text-sm font-black translate-y-[105%]'  >
                                        follow us
                                    </p>
                                </div>
                                <div className="flex gap-5 lg:gap-10 ">
                                    <a href="https://www.instagram.com/arujak?igsh=djZua2NuaGo1YTE5&utm_source=qr" target="_blank" rel="noopener noreferrer" >
                                        <button>
                                            <div className='  relative w-fit group overflow-hidden uppercase flex items-center gap-2'>
                                                <div className=" belo_link  w-0 group-hover:left-[100%]   transition-all duration-300 h-[1px]  bg-[#2E2D2B]  bottom-0 left-0 absolute"></div>
                                                <p className='ctct_anim_txt text-lg lg:text-2xl  translate-y-[105%]'  >
                                                    instagram
                                                </p>
                                            </div>
                                        </button>
                                    </a>
                                    <a href="https://www.linkedin.com/company/studio-arujak/" target="_blank" rel="noopener noreferrer">
                                        <button>
                                            <div className=' relative w-fit group overflow-hidden uppercase flex items-center gap-2'>
                                                <div className=" belo_link w-0 group-hover:left-[100%]   transition-all duration-300 h-[1px]  bg-[#2E2D2B]  bottom-0 left-0 absolute"></div>
                                                <p className='ctct_anim_txt text-lg lg:text-2xl translate-y-[105%]'  >
                                                    linkedIn
                                                </p>
                                            </div>
                                        </button>
                                    </a>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index