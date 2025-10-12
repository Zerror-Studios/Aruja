import React, { useEffect } from 'react'
import gsap from 'gsap'
import CustomEase from 'gsap/dist/CustomEase'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useNavigation from '@/store/useNavigation';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger, CustomEase);

const MobileHero = () => {
    const router = useRouter();
    const { navigate } = useNavigation();
    CustomEase.create("in-out-quint", "0.83,0,0.17,1");

    useEffect(() => {
        const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");

        if (hasSeenLoader === "true") {
            gsap.from(".left_txt_2a_mob", {
                left: "93%",
                opacity: 0,
                duration: 1.2,
                ease: "in-out-quint",
            });
            gsap.from(".right_txt_2a_mob", {
                right: "91.5%",
                opacity: 0,
                duration: 1.2,
                ease: "in-out-quint",
            });
            gsap.from(".anim_txt_mob", { y: 100, duration: 1, stagger: 0.1, delay: 0.5, ease: "in-out-quint" })
        } else {
            gsap.from(".left_txt_2a_mob", {
                left: "93%",
                opacity: 0,
                duration: 1.2,
                delay: 1.7,
                ease: "in-out-quint",
            });
            gsap.from(".right_txt_2a_mob", {
                right: "91.5%",
                opacity: 0,
                duration: 1.2,
                delay: 1.7,
                ease: "in-out-quint",
            });

            gsap.from(".anim_txt_mob", { y: 100, duration: 1, stagger: 0.1, delay: 2.2, ease: "in-out-quint" })

        }
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero_paren_mob",
                start: "top top",
                end: "+=6000",
                anticipatePin: 1,
                scrub: true,
                pin: true,
                // markers: true,
            }
        })
        tl.to(".hero_bg_img_mob", { scale: 1.2, duration: 2, }, "hello")

        tl.fromTo(".slide_paren_mob", {
            scaleX: 0.01, scaleY: 0
        }, {
            ease: "linear",
            keyframes: [
                { scaleX: 0.01, scaleY: 1, duration: 0.5 },
                { scaleX: 1, scaleY: 1, duration: 1 }
            ]
        }, "hello")

        tl.to(".hero_slide_1_mob_img_mob", {
            scale: 1,
            ease: "linear",
            transformOrigin: "center center",
            willChange: "transform",
            delay: .7,
            duration: 1,
            onComplete: function () {
                tl.to(".left_txt_2a_mob ,.right_txt_2a_mob", {
                    opacity: 0,
                    duration: 0,
                });
            },
            onReverseComplete: function () {
                tl.to(".left_txt_2a_mob ,.right_txt_2a_mob", {
                    opacity: 1,
                    duration: 0,
                });
            },
            onUpdate: function () {
                const progress = this.progress();
                const half = 50 * progress;
                const clip = `polygon(${50 - half}% ${50 - half}%, ${50 + half}% ${50 - half}%, ${50 + half}% ${50 + half}%, ${50 - half}% ${50 + half}% )`;
                gsap.set(".hero_slide_1_mob", {
                    clipPath: clip,
                    transformOrigin: "center center",
                    willChange: "clip-path"
                });
            }
        }, "hello");

        tl.to(".hero_slide_2_img_mob", {
            scale: 1,
            ease: "linear",
            duration: .8,
            transformOrigin: "center center",
            willChange: "transform",
            delay: 1.1,
            onUpdate: function () {
                const progress = this.progress();
                const half = 50 * progress;
                const clip = `polygon(${50 - half}% ${50 - half}%, ${50 + half}% ${50 - half}%, ${50 + half}% ${50 + half}%, ${50 - half}% ${50 + half}% )`;
                gsap.set(".hero_slide_2_mob", {
                    clipPath: clip,
                    transformOrigin: "center center",
                    willChange: "clip-path"
                });
            }
        }, "hello")
        tl.to(".hero_slide_4_mob", {
            scale: 1,
            duration: .8,
            delay: 1.3,
            ease: "linear",
        }, "hello");

        tl.to(".opa_slide_1_mob", {
            left: "100%",
            duration: .8,
            ease: "linear",
        }, "parr");

        tl.to(".opa_slide_2_mob", {
            left: "100%",
            duration: .8,
            delay: .8,
            ease: "linear",
        }, "parr");

        tl.to(".opa_slide_3_mob", {
            left: "100%",
            duration: .8,
            delay: 1.6,
            ease: "linear",
        }, "parr");

        tl.to(".opa_slide_4_mob", {
            left: "100%",
            duration: .8,
            delay: 2.4,
            ease: "linear",
        }, "parr");

        tl.to(".sq_img_1_mob", {
            top: "-55vw",
            duration: 1,
            ease: "linear",
        }, "parr");
        // tl.fromTo(".sq_img_in_1_mob", {
        //     y: -80,
        // }, {
        //     y: 80,
        //     duration: 1,
        //     ease: "linear",
        // }, "parr");
        tl.to(".sq_img_2_mob", {
            top: "-55vw",
            duration: 1,
            ease: "linear",
            delay: .5,
        }, "parr");
        // tl.fromTo(".sq_img_in_2_mob", {
        //     y: -80,
        // }, {
        //     y: 80,
        //     duration: 1,
        //     delay: .5,
        //     ease: "linear",
        // }, "parr");
        tl.to(".sq_img_3_mob", {
            top: "-55vw",
            duration: 1,
            ease: "linear",
            delay: 1,
        }, "parr");
        // tl.fromTo(".sq_img_in_3_mob", {
        //     y: -80,
        // }, {
        //     y: 80,
        //     delay: 1,
        //     duration: 1,
        //     ease: "linear",
        // }, "parr");
        tl.to(".about_div_mob", {
            y: -150,
            duration: 1,
            ease: "linear",
            delay: 2.3,
        }, "parr");
        tl.to(".number_div_mob", {
            bottom: " 10vh",
            duration: 1,
            ease: "linear",
            delay: 2.3,
        }, "parr");





    }, [])

    return (
        <div>
            <div className=" hero_paren_mob  w-full center h-screen relative overflow-hidden">
                <p className='  left_txt_2a_mob text-xs lg:text-sm pointer-events-none font-semibold  uppercase absolute top-1/2 left-2 -translate-y-1/2  text-white z-[1] '>Designed</p>
                <p className=' right_txt_2a_mob  text-xs lg:text-sm pointer-events-none font-semibold  uppercase absolute top-1/2 right-2 -translate-y-1/2  text-white z-[1] '>For you </p>
                <div className="   bottom-2 left-1/2 -translate-x-[30%] absolute shrink-0  z-[1] flex items-end">
                    <div className=" shrink-0  flex items-end relative">
                        <div className=" shrink-0 size-[10vw] border-[.25vw] overflow-hidden  border-[#ffffff] flex  relative   items-end">
                            <img className='w-[5vw] invert-[100]' src="/logo.png" alt="" />
                            <div className=" shrink-0 size-[9.75vw]  bg-[#ffffff] rotate_anim_box    translate-y-[-6vw] origin-center   rotate-[-15deg] translate-x-[-0.6vw] ">
                            </div>
                        </div>
                        <div className=" shrink-0 size-[10vw] border-[.25vw] border-[#ffffff] rotate_anim_box   rotate-[-15deg] origin-center translate-y-[-6vw]  translate-x-[-5.5vw] "></div>
                    </div>
                </div>
                <img
                    src="/Images/HeroImg.webp"
                    alt="loading"
                    className="hero_bg_img_mob top-0 left-0 h-full brightness-[.8] w-full object-cover"
                />
                <div className=" leading-none absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase text-center text-white   lg:text-5xl font-semibold">
                    <div className="block overflow-hidden">
                        <p className='anim_txt_mob font-bold'>Design that lives, </p>
                    </div>
                    <div className="block overflow-hidden">
                        <p className='anim_txt_mob font-bold'>breathes, and belongs</p>
                    </div>
                    <p></p>
                </div>

                <div className=" slide_paren_mob  w-[100%] h-[100%] center overflow-hidden absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#FFFDF6]"></div>

                <div
                    style={{
                        clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
                    }}
                    className="hero_slide_1_mob w-full h-full origin-center absolute z-[2]"
                >
                    <img
                        src="/Images/HomePage/heroSlider/Hero_animation_1.webp"
                        alt="loading"

                        className="hero_slide_1_mob_img_mob h-full origin-center w-full object-cover scale-[0.3]"
                    />
                </div>

                <div
                    style={{
                        clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
                    }}
                    className="hero_slide_2_mob w-full h-full origin-center absolute z-[3]"
                >
                    <img
                        src="/Images/HomePage/heroSlider/Hero_animation_2.webp"
                        alt="loading"

                        className=" hero_slide_1_mob_img_mob h-full origin-center w-full object-cover scale-[0.3] "
                    />
                </div>
                <div className=" hero_slide_4_mob overflow-hidden scale-[0] bg-[#FFFDF6] w-full h-full absolute z-[5]">
                    <div className="w-full h-screen relative flex-col gap-10 center text-center ">
                        <div className=" about_div_mob flex-col w-full h-full gap-10 center text-center">
                            <p className=' text-xs lg:text-base font-black'>ABOUT US</p>
                            <div className=" text-xl lg:text-5xl flex flex-col  items-center   capitalize">
                                <div className='block relative overflow-hidden lg:pb-2'>
                                    <div className=" opa_slide_1_mob absolute top-1 left-[25%] w-full h-full bg-[#fffdf6c0]"></div>
                                    <p>
                                        At AKTO, design is more than
                                    </p>
                                </div>
                                <div className="flex  relative overflow-hidden lg:pb-2 pr-2 gap-2">
                                    <div className=" opa_slide_2_mob absolute top-1 left-0 w-full h-full bg-[#fffdf6c0]"></div>
                                    <p>decoration it’s about</p>
                                    <h2> <i>creating spaces</i> </h2>
                                </div>
                                <div className='block relative overflow-hidden lg:pb-2 '>
                                    <div className=" opa_slide_3_mob absolute top-1 left-0 w-full h-full bg-[#fffdf6c0]"></div>
                                    <p >that flow with purpose, proportion, </p>
                                </div>
                                <div className='block relative w-fit overflow-hidden lg:pb-2 '>
                                    <div className=" opa_slide_4_mob absolute top-1 left-0 w-full h-full bg-[#fffdf6c0]"></div>
                                    <h2> <i>and precision.</i> </h2>
                                </div>
                            </div>
                            <button
                                onClick={() => navigate(router, "/studio")}
                            >
                                <div className=' mt-5 relative w-fit group overflow-hidden uppercase text-sm flex items-center lg:gap-2'>
                                    <div className="w-[80%]  group-hover:right-[-82%] transition-all duration-300 h-[1px]  bg-[#2E2D2B] translate-x-[-25%] bottom-0.5 right-0 absolute"></div>
                                    <p className=' text-sm lg:text-base '>
                                        View more
                                    </p>
                                    <div className="block relative">
                                        <img className='  w-[70%] lg:w-full   opacity-0  ' src="/icons/black_arrow.png" alt="loading" />
                                        <img className='  w-[70%] lg:w-full absolute  top-0 right-0 origin-top-right group-hover:scale-0 transition-all duration-300  ' src="/icons/black_arrow.png" alt="loading" />
                                        <img className='   absolute  top-0 left-0 scale-0 origin-bottom-left group-hover:scale-100 transition-all duration-500 ease-in-out ' src="/icons/black_arrow.png" alt="loading" />
                                    </div>
                                </div>
                            </button>
                        </div>

                        <div className="sq_img_1_mob aspect-square overflow-hidden absolute z-[1] bottom-[-50vw] lg:bottom-[-15vw] right-3 lg:right-10 w-[50vw] md:w-[15vw]">
                            <img
                                src="/Images/HomePage/heroSlider/About_1.webp"
                                alt="loading"

                                className="sq_img_in_1_mob scale-110 w-full h-full object-cover"
                            />
                        </div>

                        <div className="sq_img_2_mob aspect-square overflow-hidden absolute z-[1] bottom-[-50vw] lg:bottom-[-15vw] left-3 lg:left-10 w-[50vw] md:w-[15vw]">
                            <img
                                src="/Images/HomePage/heroSlider/About_2.webp"
                                alt="loading"

                                className="sq_img_in_2_mob scale-110 w-full h-full object-cover"
                            />
                        </div>

                        <div className="sq_img_3_mob aspect-square overflow-hidden absolute z-[1] bottom-[-50vw] lg:bottom-[-15vw] left-1/2 -translate-x-1/2 w-[50vw] md:w-[15vw]">
                            <img
                                src="/Images/HomePage/heroSlider/About_3.webp"
                                alt="loading"

                                className="sq_img_in_3_mob scale-110 w-full h-full object-cover"
                            />
                        </div>

                        <div className=" number_div_mob w-full absolute bottom-[-20vh] left-0 h-[20vh]    grid space-y-5 md:space-y-0 content-center  grid-cols-1 md:flex md:items-center md:justify-between px-3 md:px-24">
                            <div className="text-start flex items-center justify-between  ">
                                <h2 className=' text-5xl lg:text-8xl'>15+</h2>
                                <p className='uppercase text-xs lg:text-sm font-extrabold'>projects</p>
                            </div>
                            <div className=" text-start flex items-center justify-between ">
                                <div className=' text-5xl lg:text-8xl flex justify-start items-center'> <h2> 45K+</h2> <p className=' text-xl md:text-3xl lowercase md:-translate-y-[3px]'>SQ. ft.</p> </div>
                                <p className='uppercase text-xs lg:text-sm font-extrabold'>Space Designed</p>
                            </div>
                            <div className=" text-start flex items-center justify-between ">
                                <div className=' text-5xl lg:text-8xl flex  justify-start items-center'> <h2> 5+</h2> <p className='text-xl md:text-3xlcapitalize  md:-translate-y-[2px]'>Yrs</p> </div>
                                <p className='uppercase text-xs lg:text-sm font-extrabold'>Experience</p>
                            </div>
                            <div className="text-start flex items-center justify-between ">
                                <h2 className=' text-5xl lg:text-8xl'>100%</h2>
                                <p className='uppercase text-xs lg:text-sm font-extrabold'>Transparency</p>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default MobileHero