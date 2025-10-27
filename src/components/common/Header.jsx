import React, { useEffect } from 'react'
import gsap from 'gsap'
import Link from 'next/link';
import CustomEase from 'gsap/dist/CustomEase'
import { useRouter } from "next/router";
import { RiCloseLine, RiMenu3Line, RiMenuLine } from '@remixicon/react';
import useNavigation from '@/store/useNavigation';
import { usePageReady } from '../hooks/usePageReady';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(CustomEase ,ScrollTrigger );


const Header = () => {
  CustomEase.create("in-out-quint", "0.83,0,0.17,1");
  const router = useRouter();
  const currentPath = router.pathname;

  const { navigate } = useNavigation();

  useEffect(() => {
    if (currentPath === "/studio") return;
    if (currentPath === "/work") return;
    if (currentPath === "/contact") return;
    if (currentPath === "/services") return;
    gsap.to(".header", { display: "flex", delay: 2.25 });
  }, [])

  const openMenu = () => {
    if (window.lenis) lenis.stop();
    gsap.to(".open_menu", {
      right: 0,
      duration: .8,
      ease: "in-out-quint",
      onComplete: () => {
        gsap.set(".header", { pointerEvents: "none" });
      }
    });
    gsap.fromTo(".anii", {
      y: 50,
    }, {
      y: 0,
      delay: 0.8,
      stagger: 0.05
    })
  }
  const closeMenu = () => {
    if (window.lenis) lenis.stop();
    gsap.to(".anii", {
      y: -50,
      stagger: 0.05
    })
    gsap.to(".open_menu", {
      right: "-100%",
      delay: 0.4,
      duration: .8,
      ease: "in-out-quint",
      onComplete: () => {
        gsap.set(".header", { pointerEvents: "auto" });
      }
    });
  }

  usePageReady(()=>{
    gsap.to(".header",{
      backgroundColor:"#fffdf6",
      scrollTrigger:{
          trigger:".trig_div",
          start:"bottom top",
          end:"+=100%",
          // markers:true,
          scrub:true
      }
    })
  })

  return (
    <>
      <div
        className=" open_menu right-[-100%] w-full h-[100dvh] bg-[#FFFDF6] text-[#2E2D2B] p-5 fixed z-[9999999]">
        <div className=" absolute  right-5 w-full flex justify-end">
          <RiCloseLine size={30} onClick={closeMenu} />
        </div>
        <div className="w-full h-full center flex-col gap-5">
          <div
            onClick={() => { navigate(router, "/work"), closeMenu() }}
            className='uppercase  group relative w-fit block overflow-hidden text-2xl '>
            <div className="absolute bg-[#2E2D2B] rounded-full bottom-0.5 w-0 group-hover:w-full transition-all duration-300 h-[1px] left-0"></div>
            <p className='anii'>
              work
            </p>
          </div>

          <div
            onClick={() => { navigate(router, "/studio"), closeMenu() }}
            className='uppercase  group relative w-fit block overflow-hidden text-2xl '>
            <div className="absolute bg-[#2E2D2B] rounded-full bottom-0.5 w-0 group-hover:w-full transition-all duration-300 h-[1px] left-0"></div>
            <p className='anii'>
              studio
            </p>
          </div>


          <div
            onClick={() => { navigate(router, "/services"), closeMenu() }}
            className='uppercase  group relative w-fit block overflow-hidden text-2xl '>
            <div className="absolute bg-[#2E2D2B] rounded-full bottom-0.5 w-0 group-hover:w-full transition-all duration-300 h-[1px] left-0"></div>
            <p className='anii'>
              services
            </p>
          </div>
          {
            currentPath === "/" && (
              <a
                href='#reviews'
                onClick={() => closeMenu()}
                className='uppercase  group relative w-fit block overflow-hidden text-2xl '>
                <div className="absolute bg-[#2E2D2B] rounded-full bottom-0.5 w-0 group-hover:w-full transition-all duration-300 h-[1px] left-0"></div>
                <p className='anii'>
                  reviews
                </p>
              </a>
            )
          }


          <div
            onClick={() => { navigate(router, "/contact"), closeMenu() }}
            className='uppercase  group relative w-fit block overflow-hidden text-2xl '>
            <div className="absolute bg-[#2E2D2B] rounded-full bottom-0.5 w-0 group-hover:w-full transition-all duration-300 h-[1px] left-0"></div>
            <p className='text-2xl anii uppercase'>contact</p>
          </div>
        </div>
      </div>
          <div className="trig_div absolute h-screen w-full pointer-events-none"></div>
      <div className={` header  ${(currentPath === "/services" || currentPath === "/studio" || currentPath === "/work" || currentPath === "/contact") ? "flex" : "hidden"}  w-full  p-3 lg:p-5 lg:px-10 z-[999999] items-center justify-between fixed top-0 left-0`}>
        <div className="">
          <a
            href="/"
            className='relative block center  group'
            onClick={() => navigate(router, "/")}
          >
            <img className=' group-hover:opacity-0  transition-all duration-300 w-[13vw] cursor-pointer md:w-[8vw] lg:w-[5vw]' src="/logo.png" alt="loading" />
            <img className=' opacity-0  group-hover:opacity-100 absolute top-0 left-0 transition-all duration-300 translate-x-4 w-[121vw] cursor-pointer lg:w-[3vw]' src="/monogram.svg" alt="loading" />
          </a>
        </div>
        <div className="flex items-center gap-10  h-full">
          <a
            // href="/work"
            onClick={() => navigate(router, "/work")}
            className='uppercase cursor-pointer hidden group relative w-fit lg:block text-sm font-semibold'>
            <div className="absolute bg-[#2E2D2B] rounded-full bottom-0.5 w-0 group-hover:w-full transition-all duration-300 h-[1px] left-0"></div>
            <p className='font-semibold'>
              work
            </p>
          </a>

          <a
            // href="/studio"
            onClick={() => navigate(router, "/studio")}
            className='uppercase cursor-pointer hidden group relative w-fit lg:block text-sm font-semibold'>
            <div className="absolute bg-[#2E2D2B] rounded-full bottom-0.5 w-0 group-hover:w-full transition-all duration-300 h-[1px] left-0"></div>
            <p className='font-semibold'>
              studio
            </p>
          </a>

          <a
            //  href="services"
            onClick={() => navigate(router, "/services")}
            className='uppercase cursor-pointer hidden group relative w-fit lg:block text-sm font-semibold'>
            <div className="absolute bg-[#2E2D2B] rounded-full bottom-0.5 w-0 group-hover:w-full transition-all duration-300 h-[1px] left-0"></div>
            <p className='font-semibold'>
              services
            </p>
          </a>

          {
            currentPath === "/" && (
              <a
                href="#reviews"
                // onClick={() => navigate(router, "/services")}
                className='uppercase cursor-pointer hidden group relative w-fit lg:block text-sm font-semibold'>
                <div className="absolute bg-[#2E2D2B] rounded-full bottom-0.5 w-0 group-hover:w-full transition-all duration-300 h-[1px] left-0"></div>
                <p className='font-semibold'>
                  reviews
                </p>
              </a>
            )}



          <a
            // href="/contact"
            onClick={() => navigate(router, "/contact")}
          >
            <button className=' cursor-pointer hidden lg:block hover:scale-95 hover:rounded-[4px] transition-all duration-300 uppercase bg-[#2E2D2B] text-[#FFFDF4] py-2 px-4 lg:px-6'>
              <p className=' text-xs lg:text-sm'>Let's talk</p>
            </button>
          </a>
          <RiMenu3Line size={28} className='lg:hidden' onClick={openMenu} />
        </div>
      </div>
    </>
  )
}

export default Header