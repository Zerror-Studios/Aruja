import React, { useEffect } from 'react'
import gsap from 'gsap'
import CustomEase from 'gsap/dist/CustomEase'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger, CustomEase);

const NewHero = () => {
    CustomEase.create("in-out-quint", "0.83,0,0.17,1");

    useEffect(() => {
        gsap.from(".anim_txt", { y: 120, duration: 1, delay: 2.2, ease: "in-out-quint" })
        gsap.from(".anim_txt_2", {
            y: 120, duration: 1, delay: 2.3,
            onComplete: () => {
                gsap.set(".anim_txt_2_paren", {
                    overflow: "visible"
                })
            }, ease: "in-out-quint"
        })
        gsap.from(".anim_txt_3", { y: 120, duration: 1, delay: 2.4, ease: "in-out-quint" })
        gsap.from(".anim_txt_4", { y: 20, duration: 1, delay: 2.4, ease: "in-out-quint" })


        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero_paren",
                start: "top top",
                end: "+=3500",
                scrub: true,
                pin: true,
                // markers: true,
            }
        })

        tl.to(".anim_txt_paren", {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "linear",
        }, "0")
        tl.to(".anim_txt_2", {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "linear",
        }, "0")
        tl.to(".anim_txt_3_left", {
            x: -300,
            opacity: 0,
            duration: 1,
            ease: "linear",
        }, "0")
        tl.to(".anim_txt_3_right", {
            x: 300,
            opacity: 0,
            duration: 1,
            ease: "linear",
        }, "0")

        tl.fromTo(".hero_bg_img", {
            clipPath: "polygon(10% 20%, 90% 20%, 90% 90%, 10% 90%)",
        }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1,
            ease: "linear",
        }, "0")
        tl.fromTo(".slide_paren", {
            scaleX: 0.005555555555555556, scaleY: 0
        }, {
            ease: "linear",
            keyframes: [
                { scaleX: 0.005555555555555556, scaleY: 1, duration: 0.375 },
                { scaleX: 1, scaleY: 1, duration: 0.625 }
            ]
        }, "hello")

        tl.to(".hero_slide_1_img", {
            scale: 1,
            ease: "linear",
            transformOrigin: "center center",
            willChange: "transform",
            delay: .7,
            duration: 1,
            onUpdate: function () {
                const progress = this.progress();
                const half = 50 * progress;
                const clip = `polygon(${50 - half}% ${50 - half}%, ${50 + half}% ${50 - half}%, ${50 + half}% ${50 + half}%, ${50 - half}% ${50 + half}% )`;
                gsap.set(".hero_slide_1", {
                    clipPath: clip,
                    transformOrigin: "center center",
                    willChange: "clip-path"
                });
            }
        }, "hello");
        tl.to(".hero_slide_2_img", {
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
                gsap.set(".hero_slide_2", {
                    clipPath: clip,
                    transformOrigin: "center center",
                    willChange: "clip-path"
                });
            }
        }, "hello");
        tl.to(".hero_slide_3_img", {
            scale: 1,
            ease: "linear",
            transformOrigin: "center center",
            willChange: "transform",
            delay: 1.5,
            onUpdate: function () {
                const progress = this.progress();
                const half = 50 * progress;
                const clip = `polygon(${50 - half}% ${50 - half}%, ${50 + half}% ${50 - half}%, ${50 + half}% ${50 + half}%, ${50 - half}% ${50 + half}% )`;
                gsap.set(".hero_slide_3", {
                    clipPath: clip,
                    transformOrigin: "center center",
                    willChange: "clip-path"
                });
            }
        }, "hello");

        tl.to(".hero_slide_4", {
            scale: 1,
            duration: .9,
            delay: 1.7,
            ease: "linear",
        }, "hello");

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

        tl.to(".opa_slide_4", {
            left: "100%",
            duration: .8,
            delay: 1.8,
            ease: "linear",
        }, "parr");

        tl.to(".sq_img_1", {
            top: "-15vw",
            duration: 1,
            ease: "linear",
        }, "parr");
        tl.to(".sq_img_2", {
            top: "-15vw",
            duration: 1,
            ease: "linear",
            delay: .5,
        }, "parr");
        tl.to(".sq_img_3", {
            top: "-15vw",
            duration: 1,
            ease: "linear",
            delay: 1,
        }, "parr");
        tl.to(".sq_img_4", {
            top: "-15vw",
            duration: 1,
            ease: "linear",
            delay: 1.5
        }, "parr");
        tl.to(".sq_img_5", {
            top: "-15vw",
            duration: 1,
            ease: "linear",
            delay: 2,
        }, "parr");
        tl.to(".about_div", {
            y: -150,
            duration: 1,
            ease: "linear",
            delay: 2.3,
        }, "parr");
        tl.to(".number_div", {
            bottom: " 10vh",
            duration: 1,
            ease: "linear",
            delay: 2.3,
        }, "parr");




    }, [])

    return (
        <div>
            <div className=" hero_paren  w-full center h-screen relative overflow-hidden">

                <div className="w-full relative center h-full">
                    <div className='uppercase h-[1.2rem] overflow-hidden    absolute top-[80vh] left-[4.3%] text-sm font-bold -rotate-90    '>
                        <p className='anim_txt_4'>
                            Designed for You
                        </p>
                    </div>
                    <p className='uppercase anim_txt_paren anim_txt  absolute top-[8%] left-[12%]    text-[8.5vw] '>Where Spaces </p>
                    <div className='uppercase block overflow-hidden  h-[10vw] left-10 top-[48%] absolute text-[8.5vw]'>
                        <p className='anim_txt_3 anim_txt_3_left'>
                            thinks
                        </p>
                    </div>
                    <div className='uppercase block overflow-hidden  h-[10vw] right-10 top-[48%] absolute text-[8.5vw]'>
                        <p className='anim_txt_3 anim_txt_3_right'>
                            design
                        </p>
                    </div>
                    <div
                        style={{ clipPath: "polygon(10% 20%, 90% 20%, 90% 90%, 10% 90%)" }}
                        className=" hero_bg_img relative  overflow-hidden  w-[100%] h-[100%]">
                        <div className='uppercase  block anim_txt_paren overflow-hidden  h-[10vw] text-white absolute top-[8%] left-[12%]    text-[8.5vw] '>
                            <p className='anim_txt'>
                                Where Spaces
                            </p>
                        </div>
                        <div className=' anim_txt_2_paren uppercase block overflow-hidden  h-[10vw] text-white absolute top-[28%] left-[50%] -translate-x-1/2   text-[8.5vw] '>
                            <p className='anim_txt_2'>
                                flow, &
                            </p>
                        </div>
                        <div className='uppercase block overflow-hidden  h-[10vw] left-10 text-white absolute top-[48%]  text-[8.5vw]'>
                            <p className='anim_txt_3 anim_txt_3_left'>
                                thinks
                            </p>
                        </div>
                        <div className='uppercase block overflow-hidden  h-[10vw] right-10 text-white absolute top-[48%]  text-[8.5vw]'>
                            <p className='anim_txt_3 anim_txt_3_right'>
                                design
                            </p>
                        </div>
                        <img className='w-full h-full object-cover' src="/Images/HomePage/HeroImg.png" alt="loading" />
                    </div>
                </div>

                <div className=" slide_paren  w-[100%] h-[100%] center overflow-hidden absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#FFFDF6]"></div>

                <div
                    style={{
                        clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)"
                    }} className="hero_slide_1 w-full h-full origin-center  absolute z-[2] ">
                    <img className=' hero_slide_1_img h-full origin-center w-full object-cover scale-[0.3] ' src="https://cdn.fame-estate.com/1_787ee4dae3_54280191fd.webp" alt="loading" />
                </div>
                <div
                    style={{
                        clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)"
                    }} className="hero_slide_2 w-full h-full origin-center  absolute z-[3] ">
                    <img className=' hero_slide_1_img h-full origin-center w-full object-cover scale-[0.3] ' src="https://cdn.fame-estate.com/4_e4dd79658e_e0dc0c7570.webp" alt="loading" />
                </div>
                <div
                    style={{
                        clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)"
                    }} className="hero_slide_3 w-full h-full origin-center  absolute z-[4] ">
                    <img className=' hero_slide_1_img h-full origin-center w-full object-cover scale-[0.3] ' src="https://cdn.fame-estate.com/3_58be3bd3a5_5a7aefd99a.webp" alt="loading" />
                </div>

                <div className=" hero_slide_4 overflow-hidden scale-[0] bg-[#FFFDF6] w-full h-full absolute z-[5]">
                    <div className="w-full h-screen relative flex-col gap-10 center text-center ">
                        <div className=" about_div flex-col w-full h-full gap-10 center text-center">
                            <p className='font-black'>ABOUT US</p>
                            <div className="text-5xl flex flex-col  items-center   capitalize">
                                <div className='block relative overflow-hidden pb-2'>
                                    <div className=" opa_slide_1 absolute top-1 left-[25%] w-full h-full bg-[#fffdf6c0]"></div>
                                    <p>
                                        At Studio Akto, design is more than decoration
                                    </p>
                                </div>
                                <div className="flex  relative overflow-hidden pb-2 gap-2">
                                    <div className=" opa_slide_2 absolute top-1 left-0 w-full h-full bg-[#fffdf6c0]"></div>
                                    <p>decoration it’s about</p>
                                    <h2> <i>creating spaces</i> </h2>
                                </div>
                                <div className='block relative overflow-hidden pb-2 '>
                                    <div className=" opa_slide_3 absolute top-1 left-0 w-full h-full bg-[#fffdf6c0]"></div>
                                    <p >that flow with purpose, proportion, </p>
                                </div>
                                <div className='block relative w-fit overflow-hidden pb-2 '>
                                    <div className=" opa_slide_4 absolute top-1 left-0 w-full h-full bg-[#fffdf6c0]"></div>
                                    <h2> <i>and precision.</i> </h2>
                                </div>
                            </div>
                        </div>

                        <div className=" sq_img_1 aspect-square overflow-hidden absolute z-[-1] bottom-[-15vw] right-10 w-[15vw] ">
                            <img className='w-full h-full object-cover' src="https://cdn.fame-estate.com/six_70549f943a.png" alt="loading" />
                        </div>
                        <div className=" sq_img_2 aspect-square overflow-hidden absolute z-[-1] bottom-[-15vw] left-10 w-[15vw] ">
                            <img className='w-full h-full object-cover' src="https://cdn.fame-estate.com/1_02b2655de9.jpg" alt="loading" />
                        </div>
                        <div className=" sq_img_3 aspect-square overflow-hidden absolute z-[-1] bottom-[-15vw] left-1/2 -translate-x-1/2 w-[15vw] ">
                            <img className='w-full h-full object-cover' src="https://cdn.fame-estate.com/medium_service2_db4b58f8b4.png" alt="loading" /></div>
                        <div className=" sq_img_4 aspect-square overflow-hidden absolute z-[-1] bottom-[-15vw] right-32 w-[15vw] ">
                            <img className='w-full h-full object-cover' src="https://cdn.fame-estate.com/medium_service_01a01267d4.png" alt="loading" />
                        </div>
                        <div className=" sq_img_5 aspect-square overflow-hidden absolute z-[-1] bottom-[-15vw] left-32 w-[15vw] ">
                            <img className='w-full h-full object-cover' src="https://cdn.fame-estate.com/medium_damac_2cd1f341f0.png" alt="loading" />
                        </div>


                        <div className=" number_div w-full absolute bottom-[-20vh] left-0 h-[20vh]   flex items-center justify-between px-24">
                            <div className=" text-start block">
                                <h2 className='text-8xl'>15+</h2>
                                <p className='uppercase text-sm font-extrabold'>projects</p>
                            </div>
                            <div className=" text-start block">
                                <div className='text-8xl flex items-center'> <h2> 45K+</h2> <p className='text-3xl lowercase -translate-y-[3px]'>SQ. ft.</p> </div>
                                <p className='uppercase text-sm font-extrabold'>Space Designed</p>
                            </div>
                            <div className=" text-start block">
                                <div className='text-8xl flex items-center'> <h2> 5+</h2> <p className='text-3xl capitalize  -translate-y-[2px]'>Yrs</p> </div>

                                <p className='uppercase text-sm font-extrabold'>Experience</p>
                            </div>
                            <div className=" text-start block">
                                <h2 className='text-8xl'>100%</h2>
                                <p className='uppercase text-sm font-extrabold'>Transparency</p>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default NewHero