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
import { Autoplay } from 'swiper/modules';
import { ServicesData } from '@/store/ServicesData';
gsap.registerPlugin(ScrollTrigger);
const data = [
    {
        heroImg: "/Images/services/servImg3.webp",
        title: "Resedential interior"
    }
]

const ServiceDetail = () => {
    const router = useRouter();
    const service = ServicesData.find(item => item.slug === router?.query?.slug);

    usePageReady(() => {
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
                }
            })
        }
        gsap.to(".id_anim_txt", {
            transform: "translateY(0%)",
            stagger: 0.05,
            ease: "ease-secondary",
            duration: 2,
        });
    });

    useEffect(() => {
        if (!service) return;
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
            gsap.fromTo(".servi_paex_vid", {
                y: -150
            }, {
                y: 150,
                ease: "linear",
                scrollTrigger: {
                    trigger: ".servi_paex_vid_paren",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    // markers: true,
                },
            });
            gsap.fromTo(".servi_paex_img", {
                y: -150
            }, {
                y: 150,
                ease: "linear",
                scrollTrigger: {
                    trigger: ".servi_paex_img_paren",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    // markers: true,
                },
            });


        }

        gsap.to(".id_anim_txt", {
            yPercent: 0,
            stagger: 0.05,
            ease: "ease-secondary",
            duration: 2,
        });
    }, [service]);


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
            <div className="  w-full h-[100vh] lg:h-[120vh] relative text-[#FFFDF4] ">
                <div className=" stic_image_pent   w-full h-full overflow-hidden relative center">
                    <img
                        src={service?.heroImg}
                        alt="loading"
                        className=" paex_img brightness-[.6] w-full h-full object-cover"
                    />
                </div>
                <div className="absolute z-10 w-full bottom-20 lg:top-[30vw] px-3 lg:px-10 ">
                    <div className=" block overflow-hidden text-4xl  lg:text-8xl font-semibold uppercase leading-none">
                        <p className='id_anim_txt w-[50%]    translate-y-[105%]'  >
                            {service?.title}
                        </p>
                    </div>
                    <div className="w-full   font-semibold mt-10 gap-y-4 lg:gap-y-0 grid md:grid-cols-[50%_25%_25%]">
                        <div className="block  h-fit overflow-hidden">
                            <p className='uppercase id_anim_txt    translate-y-[105%]'>OUR services</p>
                        </div>
                        <div className="block  h-fit overflow-hidden">
                            <p className='uppercase id_anim_txt    translate-y-[105%]'>{service?.id}/4</p>
                        </div>
                        <div className="block  h-fit overflow-hidden">
                            <p className='uppercase id_anim_txt    translate-y-[105%]'> {service?.heroDesc}</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-full md:flex items-stretch   p-3 lg:p-10 py-8 lg:py-14">
                <div className=" w-full md:w-1/2 md:pr-[4vw] lg:pr-[8vw]  md:border-r border-[#C2C2C2]">
                    <p className='uppercase text-xs lg:text-sm font-black'>
                        Design Services
                    </p>
                    <p className='text-2xl lg:text-4xl font-semibold uppercase md:w-[60%]  mt-2 leading-none md:mt-4 '>  {service?.detailDescription[0].title}</p>
                    <p className='text-sm leading-tight lg:text-lg mt-5 md:mt-8 mb-10 md:mb-20 '>{service?.detailDescription[0].para}</p>
                    <div className="w-full flex items-end overflow-hidden  gap-3 lg:gap-5">
                        <div className="aspect-[2/3] w-[65vw] md:w-[18vw] lg:w-[14vw] ">
                            <img className='h-full w-full object-cover' src="/Images/studioPage/right_portrait.webp" alt="" />
                        </div>
                        <div className="aspect-[3/4] w-[45vw] md:w-[13vw] lg:w-[10vw] ">
                            <img className='h-full w-full object-cover' src="/Images/studioPage/studio_hero.webp" alt="" /></div>
                    </div>
                </div>


                <div className=" w-full md:w-1/2 mt-10 md:mt-0   flex flex-col justify-between md:pl-[4vw] lg:pl-[8vw]  border-[#C2C2C2]">
                    <div className="w-full hidden md:flex items-start justify-end  gap-5">
                        <div className="aspect-[3/4] md:w-[18vw] lg:w-[11vw] ">
                            <img className='h-full w-full object-cover' src="/Images/projects/polymer/img_1.webp" alt="" /></div>
                    </div>
                    <div className="">
                        <p className='uppercase text-xs lg:text-sm font-black'>
                            Design Services
                        </p>
                        <p className='text-2xl lg:text-4xl font-semibold uppercase md:w-[60%]  leading-none  mt-2 '>{service && service.detailDescription[1].title}</p>
                        <p className='text-sm leading-tight lg:text-lg mt-5 md:mt-8 md:w-[80%]'>{service && service.detailDescription[1].para}</p>
                    </div>
                </div>

            </div>

            <div className=" servi_paex_vid_paren overflow-hidden w-full h-screen center">
                <video className=' servi_paex_vid w-full h-full object-cover' loop autoPlay muted playsInline src="/video/vid1.mp4"></video>
            </div>

            <div className="px-3 lg:px-10 py-10 lg:py-16 w-full  bg-[#454738] text-[#FFFDF6]">
                <div className=" text-xl lg:text-4xl uppercase">
                    <p className='leading-none font-semibold lg:w-[25%]'>{service?.expertise.title}</p>
                </div>
                <p className='text-xs lg:text-base md:w-[40%] leading-none mt-2'>
                    {service?.expertise.para}
                </p>

                <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 gap-x-6 lg:gap-x-20 mt-[40vw] md:mt-[12vw]">
                    {service && service.expertise.data.map((item, index) => (
                        <div key={index} className=" space-y-2 lg:space-y-5">
                            <p className='uppercase leading-tight font-semibold  text-sm lg:text-2xl'>{item?.title}</p>
                            <p className=' text-xs lg:text-base  leading-tight'>{item?.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full relative p-3 lg:p-10 py-8 lg:py-14">
                <p className='uppercase text-xs lg:text-sm font-black'>
                    Why us
                </p>
                <div className=" text-xl lg:text-4xl uppercase">
                    <p className='leading-none font-semibold lg:w-[40%] mt-2 md:mt-4'>{service?.whyChoose.title}</p>
                </div>
                <p className='md:hidden text-sm leading-none mt-2 '>{service?.whyChoose.para}</p>

                <div className="w-full h-[100vw] mt-8 md:mt-0 md:h-[40vw] center relative ">
                    <p className='absolute hidden md:block  right-0 w-[15%] leading-tight '>{service?.whyChoose.para}</p>
                    <div className=" circl_1   w-[50vw]  md:w-[20vw]  border border-[#979797]  center text-center  font-semibold  uppercase flex-col leading-tight transition-all duration-300 hover:z-10 hover:bg-[#454738] hover:text-[#FFFDF6]  text-[3vw] md:text-[1.1vw] px-[2.5vw] gap-y-2 rounded-full  aspect-square absolute -translate-x-[45%] md:-translate-x-[18vw] -translate-y-[45%] md:-translate-y-[9vw]">
                        <p>01/</p>
                        <p>{service?.whyChoose.data[0]}</p>
                    </div>
                    <div className=" circl_2 w-[50vw]  md:w-[20vw] font-semibold border border-[#979797]  uppercase flex-col leading-tight text-[3vw] md:text-[1.1vw] px-[2.5vw] gap-y-2 transition-all duration-300 hover:z-10 hover:bg-[#454738] hover:text-[#FFFDF6] center text-center rounded-full  aspect-square absolute -translate-y-[45%] translate-x-[45%] md:translate-x-0 md:-translate-y-[9vw]">
                        <p>02/</p>
                        <p>{service?.whyChoose.data[1]}</p>
                    </div>
                    <div className=" circl_3  w-[50vw]  md:w-[20vw]  border border-[#979797]  center text-center  font-semibold  uppercase flex-col leading-tight transition-all duration-300 hover:z-10 hover:bg-[#454738] hover:text-[#FFFDF6]  text-[3vw] md:text-[1.1vw] px-[2.5vw] gap-y-2 rounded-full  aspect-square absolute -translate-x-[45%] md:translate-x-0 translate-y-[45%] md:translate-y-[9vw]">
                        <p>03/</p>
                        <p>{service?.whyChoose.data[2]}</p>
                    </div>
                    <div className=" circl_4 w-[50vw]  md:w-[20vw]  border border-[#979797]  center text-center  font-semibold  uppercase flex-col leading-tight transition-all duration-300 hover:z-10 hover:bg-[#454738] hover:text-[#FFFDF6]  text-[3vw] md:text-[1.1vw] px-[2.5vw] gap-y-2 rounded-full  aspect-square absolute translate-x-[45%] md:translate-x-[18vw] translate-y-[45%] md:translate-y-[9vw]">
                        <p>04/</p>
                        <p>{service?.whyChoose.data[3]}</p>
                    </div>
                </div>

                <div className="w-full servi_paex_img_paren overflow-hidden h-[65vh] md:h-[100vh] mt-8 lg:mt-14 text-center relative center gap-y-10 flex-col">
                    <img className=' servi_paex_img absolute brightness-[.9] z-[-1] w-full h-full object-cover' src="/Images/services/servImg1.webp" alt="" />
                    <p className='text-[#FFFDF6]  font-semibold w-[80%] text-xl leading-none md:text-3xl lg:text-4xl uppercase'>{service?.contact.title}</p>
                    <p className='text-[#FFFDF6] w-[95%] leading-tight md:w-[70%] lg:w-[50%] text-xs md:text-lg lg:text-xl  capitalize'>{service?.contact.para}</p>
                    <a
                        // href="/contact"
                        onClick={() => navigate(router, "/contact")}
                    >
                        <button className=' cursor-pointer hover:scale-95 hover:rounded-[4px] transition-all duration-300 uppercase bg-[#454738] text-[#FFFDF4] py-2 px-6'>
                            <p className=' text-xs lg:text-sm'>Let's talk</p>
                        </button>
                    </a>


                </div>
            </div>

        </>
    )
}

export default ServiceDetail