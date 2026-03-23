import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import AOS from "aos";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Footer from '@/components/common/Footer';
import { usePageReady } from '@/components/hooks/usePageReady';
import useNavigation from '@/store/useNavigation';
import SeoHeader from '@/components/seo/SeoHeader';
import { worksData } from '@/store/WorksData';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);

const index = () => {
    const meta = {
        title: "STUDIO AKTO - WORK & PROJECTS ",
        description: "Explore Studio AKTO's portfolio of interiors across residential, commercial, and hospitality spaces.",
        canonical: "https://studioakto.com/work",
        og: {
            title: "STUDIO AKTO - WORK & PROJECTS ",
            description: "Discover our portfolio of proportion-led interior design projects for homes, offices, and hospitality.",
            image: "https://www.studioakto.com/logo.png" // You can replace with a hero image from your work page
        },
        twitter: {
            card: "summary_large_image",
            title: "STUDIO AKTO - WORK & PROJECTS ",
            description: "Showcasing our curated interior design projects for contemporary spaces.",
            image: "https://www.studioakto.com/logo.png" // Optional: replace with a project highlight image
        },
        robots: "index,follow"
    };

    const { navigate } = useNavigation();
    const router = useRouter();
    const id = parseInt(router.query.id);

    const work = worksData.find((item) => item.id === parseInt(id));

    usePageReady(() => {
        gsap.fromTo(".id_anim_txt_2", {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            stagger: 0.05,
            delay: 1,
            ease: "ease-secondary",
            duration: 2,
        });
        gsap.to(".id_anim_txt", {
            transform: "translateY(0%)",
            stagger: 0.05,
            ease: "ease-secondary",
            duration: 2,
        });
    });

    useEffect(() => {
        if (!id) return;
        if (window) {
            window.scrollTo(0, 0);
            if (window.lenis) {
                window.lenis.scrollTo(0, { immediate: true });
                window.lenis.resize();
            }
        }
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        gsap.set(".id_anim_txt", { yPercent: 105 });

        if (window.innerWidth >= 1024) {
            gsap.to(".paex_img", {
                y: 500,
                duration: 4,
                ease: "linear",
                scrollTrigger: {
                    trigger: ".stic_image_pent",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    // markers: true,
                },
            });
        }

        gsap.fromTo(".id_anim_txt_2", {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            stagger: 0.05,
            delay: 1,
            ease: "ease-secondary",
            duration: 2,
        });
        gsap.to(".id_anim_txt", {
            yPercent: 0,
            stagger: 0.05,
            ease: "ease-secondary",
            duration: 2,
        });
    }, [id]);


    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: "ease-secondary",
        });
    }, []);

    useEffect(() => {
        AOS.refresh();
    });

    return (
        <>
            <SeoHeader meta={meta} />

            <div className="  w-full h-[120vh] lg:h-[170vh] relative text-[#FFFDF4] ">
                <div className=" stic_image_pent   w-full h-full overflow-hidden relative center">
                    <img
                        src={work?.HeroImg}
                        alt="loading"
                        className=" paex_img brightness-[.6] w-full h-full object-cover"
                    />
                </div>
                <div className="absolute w-full bottom-20 lg:top-[30vw] px-3 lg:px-10 ">
                    <div className=" id_anim_txt   translate-y-[105%] block overflow-hidden text-4xl  lg:text-8xl font-semibold uppercase leading-none">

                        <p className='id_anim_txt lg:hidden   translate-y-[105%]'  >
                            {work?.title}
                        </p>
                        <p className='id_anim_txt hidden lg:block   translate-y-[105%]'  >
                            {work?.title.split(" ").slice(0, 2).join(" ")}
                        </p>
                    </div>
                    <div className="hidden  lg:block overflow-hidden text-4xl  lg:text-8xl font-semibold uppercase leading-none">
                        <p className='id_anim_txt   translate-y-[105%]'  >
                            {work?.title.split(" ").slice(2).join(" ")}
                        </p>
                    </div>

                    <div className="w-full text-base md:text-base font-semibold mt-10 lg:mt-20 uppercase flex  justify-between md:grid md:grid-cols-12 ">
                        <div className="w-full md:col-span-6">
                            <div className="block overflow-hidden">
                                <p className='id_anim_txt  leading-none w-full lg:w-[60%]  translate-y-[105%]' >{work?.project_desc[0]}</p>
                            </div>
                        </div>
                        <div className="w-full  hidden  lg:block overflow-hidden  md:col-span-2">
                            <p className='id_anim_txt   translate-y-[105%]' >{work?.project_location}</p>
                        </div>
                        <div className="w-full hidden  overflow-hidden lg:flex justify-end whitespace-nowrap  md:col-span-4">
                            <p className='id_anim_txt   translate-y-[105%]' >(scroll to explore)</p>
                        </div>
                    </div>

                    <div className="w-full  lg:hidden mt-10 overflow-hidden  md:col-span-2">
                        <p className='id_anim_txt uppercase   translate-y-[105%]' >{work?.project_location}</p>
                    </div>

                    <div className="w-full text-base md:text-base grid uppercase grid-cols-4 md:grid-cols-12 ">

                        <div className="w-full overflow-hidden opacity-0 hidden lg:block  lg:col-span-6 ">
                            <p className='id_anim_txt   translate-y-[105%]' >{work?.project_location}</p>
                        </div>

                        <div className=" w-full  col-span-2 md:col-span-6 lg:col-span-2">
                            <div className="  space-y-5  lg:space-y-10">
                                <div className=" pt-10">
                                    <div className=' block mb-2 overflow-hidden capitalize font-semibold'>
                                        <p className='id_anim_txt  translate-y-[105%]'>
                                            Date Completed
                                        </p>
                                    </div>
                                    <div className=' block overflow-hidden capitalize font-black'>
                                        <p className='id_anim_txt  translate-y-[105%]'>
                                            {work?.completion_Data}
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className=' block mb-2 overflow-hidden  capitalize font-semibold'>
                                        <p className='id_anim_txt_2'>
                                            Design Highlights
                                        </p>
                                    </div>
                                    <div className=' font-black'>
                                        {
                                            work?.tags.map((item, i) => (
                                                <div key={i} className=' block overflow-hidden  '>
                                                    <p className='id_anim_txt_2'>
                                                        {item}
                                                    </p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" w-full  col-span-2 lg:col-span-4">
                            <div className=" space-y-5  lg:space-y-10">
                                <div className="pt-10">
                                    <div className=' block mb-2 overflow-hidden capitalize font-semibold'>
                                        <p className='id_anim_txt  translate-y-[105%]'>
                                            Project Type
                                        </p>
                                    </div>
                                    <div className=' block overflow-hidden font-black'>
                                        <p className='id_anim_txt  translate-y-[105%]'>
                                            {work?.project_type}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full gap-3 lg:gap-5 pt-3 lg:pt-5 px-3 lg:px-10 mb-5 lg:mb-10 grid grid-cols-12">
                {work?.images.map((item, i) => {
                    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

                    let height = "auto";
                    let gridColumn = "span 12 / span 12";

                    if (isMobile) {
                        if (item.type === "portrait") {
                            height = "70vh";
                            gridColumn = "span 12 / span 12";
                        } else {
                            height = "30vh";
                            gridColumn = "span 12 / span 12";
                        }
                    } else {
                        if (item.type === "portrait") {
                            height = "100vh";
                            gridColumn = "span 6 / span 6";
                        } else {
                            height = "100vh";
                            gridColumn = "span 12 / span 12";
                        }
                    }

                    return (
                        <div
                            key={i}
                            data-aos="fade"
                            data-aos-anchor-placement="center-bottom"
                            className="w-full overflow-hidden relative"
                            style={{
                                gridColumn,
                                height,
                            }}
                        >
                            <Image
                                fill
                                src={item.img}
                                alt="loading"
                                className="object-cover w-full h-full"
                            />

                        </div>
                    );
                })}
            </div>

            <div className="w-full  font-light gap-5 text-base lg:text-3xl border-t h-10 lg:h-20 border-black/20 center uppercase flex justify-between">
                <button
                    className="flex group gap-2 items-center group"
                    onClick={() => {
                        const currentIndex = worksData.findIndex((work) => work.id === id);
                        if (currentIndex === -1) return;
                        const prevIndex = (currentIndex - 1 + worksData.length) % worksData.length;
                        navigate(router, `/work/${worksData[prevIndex].id}`);
                    }}
                >
                    <div className="flex ">
                        <p className=' translate-x-1/2 group-hover:scale-100 origin-right scale-0 transition-all duration-300'>←</p>
                        <p className=' group-hover:scale-0 origin-left transition-all duration-300'>←</p>
                    </div>
                    <h2>Prev</h2>
                </button>
                <div className=" h-full w-[1px] bg-black/20"></div>
                <button
                    className="flex gap-2 items-center group"
                    onClick={() => {
                        const currentIndex = worksData.findIndex((work) => work.id === id);
                        if (currentIndex === -1) return;
                        const nextIndex = (currentIndex + 1) % worksData.length;
                        navigate(router, `/work/${worksData[nextIndex].id}`);
                    }}
                >
                    <h2>Next</h2>
                    <div className="flex ">
                        <p className=' group-hover:scale-0 origin-right transition-all duration-300'>→</p>
                        <p className=' -translate-x-1/2 group-hover:scale-100 origin-left scale-0 transition-all duration-300'>→</p>
                    </div>
                </button>

            </div>

            <Footer />

        </>
    )
}

export default index