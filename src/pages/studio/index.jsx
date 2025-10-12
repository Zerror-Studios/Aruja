import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/common/Footer';
import CustomEase from 'gsap/dist/CustomEase';
import { usePageReady } from '@/components/hooks/usePageReady';
import useNavigation from '@/store/useNavigation';
import { useRouter } from 'next/router';
import SeoHeader from '@/components/seo/SeoHeader';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger, CustomEase);

const processData = [
    {
        number: "01",
        title: "design",
        img: "/Images/HomePage/heroSlider/About_1.webp"
    },
    {
        number: "02",
        title: "Planning",
        img: "/Images/HomePage/heroSlider/About_2.webp"
    },
    {
        number: "03",
        title: "Visualisation",
        img: "/Images/HomePage/heroSlider/About_3.webp"
    },
    {
        number: "04",
        title: "execution",
        img: "/Images/HomePage/heroSlider/About_4.webp"
    },
    {
        number: "05",
        title: "setup",
        img: "/Images/HomePage/heroSlider/About_5.webp"
    },
]

const solutionData = [
    {
        title: "Transparent Scope of Work Documents",
        desc: "Every project begins with a clearly outlined scope, defining deliverables, inclusions, and phases.",
        icon: "/icons/solutionIcons/stack.svg"
    },
    {
        title: "Project Management System PMS",
        desc: "From tracking orders and budgets to real-time project timelines, we use an internal PMS tailored to design execution.",
        icon: "/icons/solutionIcons/settingsWheel.svg"
    },
    {
        title: "Checklists for Drawing Sets",
        desc: "Creating meticulous checklists to ensure everyone working on the project has a clear, accurate, and unified understanding of the design intent, finishes, and spatial arrangements.",
        icon: "/icons/solutionIcons/pointer.svg"
    },
    {
        title: "Checklists for Site Supervision",
        desc: "We standardize communication with vendors and site teams using structured checklists for everything from electricals to furniture placement.",
        icon: "/icons/solutionIcons/intersectionCircle.svg"
    },
    {
        title: "Full -Kitting",
        desc: "We don’t just design — we create a comprehensive kit of deliverables for each step in the project to ensure we don’t miss a step.",
        icon: "/icons/solutionIcons/box.svg"
    },
    {
        title: "Quality Checks",
        desc: "Final quality checks after the project completion to be conducted by our team",
        icon: "/icons/solutionIcons/searchCube.svg"
    },

]

const index = () => {

    const meta = {
        title: "STUDIO AKTO — ABOUT STUDIO",
        description: "We are a multidisciplinary interior design studio crafting spaces that balance form, function, and flow. Discover our approach to residential, commercial, and hospitality interiors.",
        canonical: "https://studioakto.com/studio",
        og: {
            title: "STUDIO AKTO — ABOUT STUDIO",
            description: "Rooted in the principle that form follows function, Studio AKTO creates proportion-led interiors that respond to how people live and interact.",
            image: "https://www.studioakto.com/logo.png" // Replace with a hero image if available
        },
        twitter: {
            card: "summary_large_image",
            title: "STUDIO AKTO — ABOUT STUDIO",
            description: "Every project is a study in proportion, purpose, and precision. Explore how Studio AKTO designs thoughtful and experiential interiors.",
            image: "https://www.studioakto.com/logo.png" // Replace with a hero image if available
        },
        robots: "index,follow"
    };


    const router = useRouter();
    const { navigate } = useNavigation();
    CustomEase.create("ease-secondary", "0.16, 1, 0.35, 1");
    const [hovered, setHovered] = useState(null);

    const spring = {
        stiffness: 150,
        damping: 15,
        mass: 0.1,
    }
    const mousePosition = {
        x: useSpring(0, spring),
        y: useSpring(0, spring)
    }

    const mouseMove = (e) => {
        gsap.to(".cursor-box", { opacity: 1, duration: .3 })
        const { clientX, clientY } = e;
        const el = document.querySelector(".cursor-box");
        if (el) {
            const { width, height } = el.getBoundingClientRect();
            mousePosition.x.set(clientX - width / 2);
            mousePosition.y.set(clientY - height / 2);
        }
    };
    const mouseLeave = () => {
        gsap.to(".cursor-box", { opacity: 0, duration: .3 })
    }


    useEffect(() => {

        if(window.innerWidth < 1024) return;

        gsap.to(".slide_ttx", {
            width: "100%",
            duration: 6,
            ease: "linear",
            scrollTrigger: {
                trigger: ".slide_ttx",
                start: "top 100%",
                end: "bottom 50%",
                scrub: true,
                // markers: true,
            }
        })
        gsap.fromTo(".parlx_img_eff", {
            y: -100,
        }, {
            y: 100,
            duration: 6,
            ease: "linear",
            scrollTrigger: {
                trigger: ".par_img_pren",
                start: "top 100%",
                end: "bottom 0%",
                scrub: true,
                // markers: true,
            }
        })
        gsap.fromTo(".parlx_img_eff_2", {
            y: -100,
        }, {
            y: 100,
            duration: 6,
            ease: "linear",
            scrollTrigger: {
                trigger: ".par_img_pren_2",
                start: "top 100%",
                end: "bottom 0%",
                scrub: true,
                // markers: true,
            }
        })
        gsap.fromTo(".paex_img_cdc", {
            y: -200,
        }, {
            y: 200,
            duration: 4,
            ease: "linear",
            scrollTrigger: {
                trigger: ".stic_image_pent_c",
                start: "top 50%",
                scrub: true,
                // markers: true,
            }
        })
        gsap.to(".text-clip-img", {
            backgroundPosition: "21% -30%", // move vertically to 100%
            duration: 3,
            scrollTrigger: {
                trigger: ".stic_image_pent_c",
                start: "top 50%",
                scrub: true,
                // markers: true,
            }
        });


        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".studio_desc",
                start: "top 70%",
                end: "top 10%",
                scrub: true,
                // markers: true,
            }

        })
        tl.to(".opa_slide_1", {
            left: "100%",
            duration: .8,
            ease: "linear",
        }, "parr");

        tl.to(".opa_slide_2", {
            left: "100%",
            duration: .8,
            delay: .8,
            ease: "linear",
        }, "parr");

        tl.to(".opa_slide_3", {
            left: "100%",
            duration: .8,
            delay: 1.6,
            ease: "linear",
        }, "parr");

    }, [])

    useEffect(() => {
        if (window.innerWidth < 1024) return;
        const ctx = gsap.context(() => {
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".solution_paren",
                    start: "top top",
                    end: "+=1500",
                    scrub: true,
                    pin: true,
                    // markers: true,
                    pinSpacing: true,
                }
            })
            tl.to(".scroll_solut", {
                xPercent: -132,
                ease: "linear",
            }, "parallel")

            tl.set(".icon_1, .content_box_1", {
                opacity: 1,
                delay: 0.01,
                ease: "linear",
            }, "parallel")
            tl.set(".dot_border_1", {
                borderColor: "#FFFDF6",
                delay: 0.01,
                ease: "linear",
            }, "parallel")
            tl.set(".inside_dot_1", {
                height: "20px",
                width: "20px",
                backgroundColor: "#FFFDF6",
                delay: 0.01,
                ease: "linear",
            }, "parallel")
            tl.to(".scroll_line_0", {
                width: "100%",
                duration: 0.01,
                ease: "linear",
            }, "parallel")


            tl.set(".icon_2, .content_box_2", {
                opacity: 1,
                delay: 0.105,
                ease: "linear",
            }, "parallel")
            tl.set(".dot_border_2", {
                borderColor: "#FFFDF6",
                delay: 0.105,
                ease: "linear",
            }, "parallel")
            tl.set(".inside_dot_2", {
                height: "20px",
                width: "20px",
                backgroundColor: "#FFFDF6",
                delay: 0.105,
                ease: "linear",
            }, "parallel")
            tl.to(".scroll_line_1", {
                width: "100%",
                duration: 0.1,
                delay: 0.005,
                ease: "linear",
            }, "parallel")

            tl.set(".icon_3, .content_box_3", {
                opacity: 1,
                delay: 0.2,
                ease: "linear",
            }, "parallel")
            tl.set(".dot_border_3", {
                borderColor: "#FFFDF6",
                delay: 0.2,
                ease: "linear",
            }, "parallel")
            tl.set(".inside_dot_3", {
                height: "20px",
                width: "20px",
                backgroundColor: "#FFFDF6",
                delay: 0.2,
                ease: "linear",
            }, "parallel")
            tl.to(".scroll_line_2", {
                width: "100%",
                duration: 0.1,
                delay: 0.1,
                ease: "linear",
            }, "parallel")

            tl.set(".icon_4, .content_box_4", {
                opacity: 1,
                delay: 0.295,
                ease: "linear",
            }, "parallel")
            tl.set(".dot_border_4", {
                borderColor: "#FFFDF6",
                delay: 0.295,
                ease: "linear",
            }, "parallel")
            tl.set(".inside_dot_4", {
                height: "20px",
                width: "20px",
                backgroundColor: "#FFFDF6",
                delay: 0.295,
                ease: "linear",
            }, "parallel")
            tl.to(".scroll_line_3", {
                width: "100%",
                duration: 0.1,
                delay: 0.195,
                ease: "linear",
            }, "parallel")

            tl.set(".icon_5, .content_box_5", {
                opacity: 1,
                delay: 0.39,
                ease: "linear",
            }, "parallel")
            tl.set(".dot_border_5", {
                borderColor: "#FFFDF6",
                delay: 0.39,
                ease: "linear",
            }, "parallel")
            tl.set(".inside_dot_5", {
                height: "20px",
                width: "20px",
                backgroundColor: "#FFFDF6",
                delay: 0.39,
                ease: "linear",
            }, "parallel")
            tl.to(".scroll_line_4", {
                width: "100%",
                duration: 0.1,
                delay: 0.29,
                ease: "linear",
            }, "parallel")


            tl.set(".last_dot_border_5", {
                borderColor: "#FFFDF6",
                delay: 0.482,
                ease: "linear",
            }, "parallel")
            tl.set(".last_inside_dot_5", {
                height: "20px",
                width: "20px",
                backgroundColor: "#FFFDF6",
                delay: 0.482,
                ease: "linear",
            }, "parallel")
            tl.to(".scroll_line_5", {
                width: "100%",
                duration: 0.1,
                delay: 0.39,
                ease: "linear",
            }, "parallel")
            tl.to(".clip_btn", {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                duration: 0.1,
                delay: 0.485,
                ease: "linear",
            }, "parallel")
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

    useEffect(() => {

        if (window.innerWidth >= 1024) return;

        const ctx = gsap.context(() => {
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".solution_paren",
                    start: "top top",
                    end: "+=1500",
                    scrub: true,
                    pin: true,
                    // markers: true,
                    pinSpacing: true,
                }
            })
            tl.to(".scroll_solut", {
                xPercent: -530,
                ease: "linear",
            }, "parallel")

            tl.set(".icon_1, .content_box_1", {
                opacity: 1,
                delay: 0.01,
                ease: "linear",
            }, "parallel")
            tl.set(".dot_border_1", {
                borderColor: "#FFFDF6",
                delay: 0.01,
                ease: "linear",
            }, "parallel")
            tl.set(".inside_dot_1", {
                height: "20px",
                width: "20px",
                backgroundColor: "#FFFDF6",
                delay: 0.01,
                ease: "linear",
            }, "parallel")
            tl.to(".scroll_line_0", {
                width: "100%",
                duration: 0.01,
                ease: "linear",
            }, "parallel")


            tl.set(".icon_2, .content_box_2", {
                opacity: 1,
                delay: 0.105,
                ease: "linear",
            }, "parallel")
            tl.set(".dot_border_2", {
                borderColor: "#FFFDF6",
                delay: 0.105,
                ease: "linear",
            }, "parallel")
            tl.set(".inside_dot_2", {
                height: "20px",
                width: "20px",
                backgroundColor: "#FFFDF6",
                delay: 0.105,
                ease: "linear",
            }, "parallel")
            tl.to(".scroll_line_1", {
                width: "100%",
                duration: 0.1,
                delay: 0.005,
                ease: "linear",
            }, "parallel")

            tl.set(".icon_3, .content_box_3", {
                opacity: 1,
                delay: 0.2,
                ease: "linear",
            }, "parallel")
            tl.set(".dot_border_3", {
                borderColor: "#FFFDF6",
                delay: 0.2,
                ease: "linear",
            }, "parallel")
            tl.set(".inside_dot_3", {
                height: "20px",
                width: "20px",
                backgroundColor: "#FFFDF6",
                delay: 0.2,
                ease: "linear",
            }, "parallel")
            tl.to(".scroll_line_2", {
                width: "100%",
                duration: 0.1,
                delay: 0.1,
                ease: "linear",
            }, "parallel")

            tl.set(".icon_4, .content_box_4", {
                opacity: 1,
                delay: 0.295,
                ease: "linear",
            }, "parallel")
            tl.set(".dot_border_4", {
                borderColor: "#FFFDF6",
                delay: 0.295,
                ease: "linear",
            }, "parallel")
            tl.set(".inside_dot_4", {
                height: "20px",
                width: "20px",
                backgroundColor: "#FFFDF6",
                delay: 0.295,
                ease: "linear",
            }, "parallel")
            tl.to(".scroll_line_3", {
                width: "100%",
                duration: 0.1,
                delay: 0.195,
                ease: "linear",
            }, "parallel")

            tl.set(".icon_5, .content_box_5", {
                opacity: 1,
                delay: 0.39,
                ease: "linear",
            }, "parallel")
            tl.set(".dot_border_5", {
                borderColor: "#FFFDF6",
                delay: 0.39,
                ease: "linear",
            }, "parallel")
            tl.set(".inside_dot_5", {
                height: "20px",
                width: "20px",
                backgroundColor: "#FFFDF6",
                delay: 0.39,
                ease: "linear",
            }, "parallel")
            tl.to(".scroll_line_4", {
                width: "100%",
                duration: 0.1,
                delay: 0.29,
                ease: "linear",
            }, "parallel")


            tl.set(".last_dot_border_5", {
                borderColor: "#FFFDF6",
                delay: 0.482,
                ease: "linear",
            }, "parallel")
            tl.set(".last_inside_dot_5", {
                height: "20px",
                width: "20px",
                backgroundColor: "#FFFDF6",
                delay: 0.482,
                ease: "linear",
            }, "parallel")
            tl.to(".scroll_line_5", {
                width: "100%",
                duration: 0.1,
                delay: 0.39,
                ease: "linear",
            }, "parallel")
            tl.to(".clip_btn", {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                duration: 0.1,
                delay: 0.485,
                ease: "linear",
            }, "parallel")
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
        gsap.to(".anim_txt", {
            transform: "translateY(0%)",
            stagger: 0.05,
            ease: "ease-secondary",
            duration: 2,
        });
        gsap.to(".stic_image_pent_c", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "ease-secondary",
            duration: 2,
        })
    });


    return (
        <>
            <SeoHeader meta={meta} />
            <div className="w-full relative  pt-14 lg:pt-12 flex-col center">
                <div className="w-full z-[99]  translate-y-[7vw] lg:translate-y-[4.1vw]  center block overflow-hidden">
                    <div className="leading-none  overflow-hidden  pr-2 lg:pr-4 lg:translate-x-4 translate-x-2    flex center gap-2 lg:gap-6  uppercase text-[15vw]">
                        <p className=" anim_txt translate-y-[100%]   ">The</p>
                        <h2 className=" anim_txt translate-y-[100%] italic   ">studio</h2>
                    </div>
                </div>

                <div
                    style={{
                        clipPath: "polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)"
                    }}
                    className=" mt-6  lg:mt-10 stic_image_pent_c w-full h-[100vh] lg:h-[140vh] relative overflow-hidden center">
                    <img
                        src="/Images/studioPage/studio_hero.webp"
                        alt="loading"
                        className=" paex_img_cdc brightness-[.9] w-full h-full object-cover"
                    />
                </div>

                <div className="w-full py-20 lg:py-44 overflow-hidden center studio_desc">
                    <div className="  text-lg md:text-4xl lg:text-6xl leading-tight flex flex-col  items-center   capitalize">
                        <div className='block relative overflow-hidden pb-2'>
                            <div className=" hidden lg:block opa_slide_1 absolute top-1 left-[25%] w-full h-full bg-[#fffdf6c0]"></div>
                            <p className='whitespace-nowrap' >
                                design is more than decoration
                            </p>
                        </div>
                        <div className="flex  relative overflow-hidden pb-2 pr-2 gap-2">
                            <div className=" hidden lg:block opa_slide_2 absolute top-1 left-0 w-full h-full bg-[#fffdf6c0]"></div>
                            <p className='whitespace-nowrap' >it’s about </p>
                            <h2 className='whitespace-nowrap' > <i>creating spaces</i> </h2>
                            <p className='whitespace-nowrap' >that flow with</p>
                        </div>
                        <div className='block relative overflow-hidden pb-2 '>
                            <div className=" hidden lg:block opa_slide_3 absolute top-1 left-0 w-full h-full bg-[#fffdf6c0]"></div>
                            <p className='whitespace-nowrap'  >purpose, proportion, and precision.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full px-3 lg:px-10 gap-y-5 lg:gap-y-0 flex-col md:flex-row  justify-between flex">
                    <div className=" w-full md:w-[60%] h-full">
                        <div className="w-full par_img_pren overflow-hidden aspect-[16/10] ">
                            <img className=' parlx_img_eff scale-150 lg:scale-110 w-full h-full object-cover  brightness-[.9] ' src="/Images/studioPage/left_portrait.webp" alt="loading" />
                        </div>
                        <p className='uppercase text-xs md:text-sm font-black mt-5 md:mt-10'>About us</p>
                        <p className=' text-sm leading-tight md:text-lg lg:text-3xl mt-3 md:mt-5'>We are a multidisciplinary interior design studio rooted in the principle that form follows function. Our spaces are built on flow: spatial, emotional, and experiential. We craft interiors that respond to how people live and interact. Every project is a study in proportion, purpose, and precision</p>
                    </div>
                    <div className=" mt-10 md:hidden w-full flex   ">
                        <div className="w-[50%] par_img_pren overflow-hidden h-full flex items-end aspect-[10/14] ">
                            <img className='  parlx_img_eff scale-[2.5] lg:scale-110 w-full h-full object-cover  brightness-[.9] ' src="/Images/studioPage/right_portrait.webp" alt="loading" />
                        </div>
                        <div className="w-1/2  aspect-[10/14] pl-2 h-full flex items-end">
                            <p className=' text-xs md:text-lg mt-10 leading-tight'>At arujaK, we combine creativity with operations. We believe great interiors must inspire while staying on track. With 15+ projects across India and 45,000+ sq. ft. designed, we bring structure and imagination together.</p>
                        </div>
                    </div>
                    <div className=" hidden md:block w-[23.5%] h-full ">
                        <div className="w-full flex par_img_pren overflow-hidden items-end aspect-[10/16] ">
                            <img className=' parlx_img_eff scale-[150] lg:scale-110 w-full aspect-[4/5] object-cover  brightness-[.9] ' src="/Images/studioPage/right_portrait.webp" alt="loading" />
                        </div>
                        <p className=' text-sm lg:text-lg mt-10 leading-tight'>At arujaK, we combine creativity with operations. We believe great interiors must inspire while staying on track. With 15+ projects across India and 45,000+ sq. ft. designed, we bring structure and imagination together.</p>
                    </div>
                </div>

                <div className="w-full py-20 lg:py-44 px-3 lg:px-10 gap-5 lg:gap-20 flex flex-col lg:flex-row justify-between items-stretch">
                    <div className=" w-full lg:w-[70vw] flex flex-col justify-between">
                        <div className="mt-3 lg:mt-5 overflow-hidden uppercase leading-none text-[9vw] md:text-8xl">
                            <div className=" slide_ttx flex w-[90%] justify-between">
                                <p>the</p>
                                <p>person</p>
                                <h2>behind</h2>
                            </div>
                            <div className="w-full flex justify-end">
                                <div className=" slide_ttx flex justify-between w-[50%]">
                                    <p>akto</p>
                                    <h2>Studio</h2>
                                </div>
                            </div>
                        </div>

                        <div className=" hidden  w-full lg:flex justify-between">
                            <div className="  relative shrink-0  flex items-end">
                                <div className=" shrink-0 size-[6vw] border-[2px] overflow-hidden   transition-colors  border-[#2e2d2b] flex  relative   items-end">
                                    <img className='  w-[3vw] invert-[.125] transition-all' src="/logo.png" alt="" />
                                    <div className=" shrink-0 size-[5.9vw]  transition-colors  bg-[#2e2d2b]     rotate-[-15deg]    translate-y-[-3vw] rotate_anim_box origin-center    translate-x-[-1vw] ">
                                    </div>
                                </div>
                                <div className=" shrink-0 size-[6vw] transition-colors  border-[2px] border-[#2e2d2b]     rotate-[-15deg]   rotate_anim_box  origin-center translate-y-[-3vw]  translate-x-[-3.9vw] "></div>
                            </div>
                            <div className="leading-tight text-lg w-[50%] capitalize font-semibold">
                                <p className="text-end">
                                    “ Personal vision, professional execution.
                                </p>
                                <p>
                                    Founded with the intent to balance aesthetics with function, arujaK
                                    reflects the eye and passion of its founder. Each project carries
                                    personal attention — not just a template.”
                                </p>
                                <p className="text-lg uppercase font-semibold mt-5">
                                    - Aruja Kothari tantia
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className=" w-full  lg:w-[30vw]  lg:h-fit overflow-hidden">
                        <div className=" overflow-hidden h-fit  w-full aspect-[6/7] par_img_pren_2">
                            <img
                                className="w-full parlx_img_eff_2 scale-110 brightness-105 aspect-[6/7] object-cover"
                                src="/Images/studioPage/behind_studio.webp"
                                alt="loading"
                            />
                        </div>
                        <div className="leading-tight lg:hidden  mt-3 w-full capitalize">
                            <p className='text-sm leading-tight md:text-lg lg:text-3xl'>
                                “ Personal vision, professional execution.
                                Founded with the intent to balance aesthetics with function, arujaK
                                reflects the eye and passion of its founder. Each project carries
                                personal attention — not just a template.”
                            </p>
                            <p className=" text-end text-sm uppercase font-semibold mt-2 ">
                                - Aruja Kothari tantia
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full pb-20 lg:pb-44 px-3 lg:px-10">
                    <p className='uppercase text-xs mb-5 lg:text-sm font-black'>THe Process</p>
                    <div onMouseMove={mouseMove} onMouseEnter={mouseMove} onMouseLeave={mouseLeave} className="w-full ">

                        {processData.map((item, idx) => (
                            <motion.div
                                onMouseEnter={() => setHovered(idx)}
                                onMouseLeave={() => setHovered(null)}
                                style={{
                                    clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
                                }}
                                key={idx}
                                animate={{
                                    borderColor: hovered === idx ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.2)",
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className={`w-full  ${idx === 4 ? "border-none" : "border-b-[1px]"
                                    } h-[10vh] lg:h-[20vh] group text-3xl lg:text-8xl uppercase flex items-center justify-between`}
                            >
                                <motion.div className=" cursor-box pointer-events-none z-[-1] lg:opacity-1 aspect-square w-[50vw] md:w-[30vw] lg:w-[20vw]  overflow-hidden fixed top-1/2 lg:top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 lg:left-0"
                                    style={{ x: mousePosition.x, y: mousePosition.y }}>
                                    <img className='w-full h-full object-cover' src={item.img} alt="loading" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0.4 }}
                                    animate={{ opacity: hovered === idx ? 1 : 0.4 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <p>{item.number}</p>
                                </motion.div>

                                <motion.div
                                    className="text-end"
                                    initial={{ opacity: 0.4 }}
                                    animate={{ opacity: hovered === idx ? 1 : 0.4 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <p>{item.title}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>


                <div className=" solution_paren w-full h-screen bg-[#454738] text-[#FFFDF6] ">
                    <div className="flex uppercase h-[25%]  px-3 lg:px-10 py-24 text-3xl lg:text-6xl gap-4">
                        <p>Our</p>
                        <h2 className='italic '>solution</h2>
                    </div>

                    <div className=" h-[70%] lg:h-[75%] w-full overflow-hidden  flex items-center">
                        <div className=" scroll_solut w-full flex px-3 lg:px-10 scroller_none ">
                            {solutionData.map((item, idx) => (
                                <div key={idx} className=" w-[90vw]  lg:w-[30vw] shrink-0 space-y-10 ">
                                    <div className=" size-16  lg:size-24">
                                        <img className={` w-full  transition-all duration-300 icon_${idx} ${idx === 0 ? "opacity-100" : "opacity-30"} `} src={item.icon} alt="loading" />
                                    </div>
                                    <div className="w-full h-[3px] bg-[#fffdf646] relative ">
                                        <div className="w-full h-full relative overflow-hidden">
                                            <div className={` scroll_line_${idx} absolute bg-[#FFFDF6] h-full left-0 ${idx === 0 ? 'w-[70%]' : 'w-0'}`}></div>
                                        </div>

                                        {idx === 5 && (
                                            <div className={` ${idx === 5 ? " border-[#fffdf646] " : ""} last_dot_border_${idx} size-9  absolute overflow-hidden border-[2px]  bg-[#454738] top-1/2 right-0 -translate-y-1/2 center rounded-full`}>
                                                <div className={`  ${idx === 5 ? " bg-[#fffdf646] " : "bg-[#FFFDF6]"} transition-all duration-300 last_inside_dot_${idx} h-[0px] w-[0px]  rounded-full  `}></div>
                                            </div>
                                        )}

                                        <div className={` ${idx === 0 ? "border-[#FFFDF6]  " : "border-[#fffdf646]"} dot_border_${idx} absolute size-9 border-[2px]  bg-[#454738] top-1/2 left-0 -translate-y-1/2 center rounded-full`}>
                                            <div className={`  ${idx === 0 ? "  bg-[#FFFDF6] h-[20px] w-[20px] " : "bg-[#fffdf646] h-[0px] w-[0px]"} transition-all duration-300 inside_dot_${idx}  rounded-full  `}></div>
                                        </div>
                                    </div>
                                    <div className={` transition-all duration-300 content_box_${idx} w-[80%]  lg:w-[70%] ${idx === 0 ? "opacity-100" : "opacity-30"} `}  >
                                        <p className=' text-lg lg:text-2xl leading-tight font-semibold'>0{idx + 1}/</p>
                                        <p className='uppercase leading-tight font-semibold  text-lg lg:text-2xl'>{item.title}</p>
                                        <p className=' text-sm lg:text-base font-semibold mt-5 leading-tight'>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                            <div className=" w-[70vw] lg:w-[15vw] pb-24 ml-5  lg:ml-20 flex flex-col justify-center uppercase shrink-0 text-sm  ">
                                <p>our interiors are designed to be functional, timeless, and personal.</p>
                                <button
                                    onClick={() => navigate(router, "/contact")}
                                    className=' relative font-semibold uppercase border  mt-5 border-[#FFFDF6] text-[#FFFDF6] w-fit px-6 py-2'>
                                    <div className="w-full center h-full">
                                        <p>
                                            let's talk
                                        </p>
                                    </div>
                                    <div
                                        style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
                                        className=" clip_btn absolute top-0 left-0 bg-[#FFFDF6] center text-[#454738] font-semibold w-full h-full">
                                        <p>
                                            let's talk
                                        </p>
                                    </div>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default index