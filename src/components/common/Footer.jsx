import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import useNavigation from "@/store/useNavigation";
import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
  const router = useRouter();
  const { navigate } = useNavigation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "the studio", path: "/studio" },
    { name: "our work", path: "/work" },
    { name: "contact", path: "/contact" },
  ];

  useGSAP(() => {
    gsap.to(".rotate_anim_box", {
      rotation: "+=360",
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  })
  return (
    <div className="w-full  border-t border-black/20 py-5 lg:py-0 p-3 lg:p-10 ">
      <div className="flex h-[40vw] lg:h-[25vw] ">
        <div className=" flex items-end pb-2 lg:pb-0 ">
          <div className=" shrink-0  flex items-end relative">
            <div className=" shrink-0 size-[15vw] lg:size-[10vw] border-[.25vw] overflow-hidden  border-[#2e2d2b] flex  relative   items-end">
              <img className='w-[10vw] lg:w-[5vw] invert-[.125]' src="/logo.png" alt="" />
              <div className=" shrink-0 size-[14.75vw] lg:size-[9.75vw]  bg-[#2e2d2b] rotate_anim_box    translate-y-[-6vw] origin-center   rotate-[-15deg] translate-x-[-0.6vw] ">
              </div>
            </div>
            <div className=" shrink-0 size-[15vw] lg:size-[10vw] border-[.25vw] border-[#2e2d2b] rotate_anim_box   rotate-[-15deg] origin-center translate-y-[-6vw]  translate-x-[-5.5vw] "></div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-between pl-3 lg:pl-10">
          <div className="w-full flex justify-between">
            <div className=" text-base md:text-4xl flex flex-col gap-y-2 lg:gap-y-4 uppercase">
              {navLinks.map((link, i) =>
                <div
                  onClick={() => navigate(router, link.path)}
                  key={i} className="group relative w-fit cursor-pointer">
                  <p className=" group-hover:opacity-0 transition-all duration-150">{link.name}</p>
                  <h2 className="absolute italic left-0 top-0 opacity-0 group-hover:opacity-100 transition-all duration-150">{link.name}</h2>
                </div>
              )}
            </div>

            <div className="uppercase flex flex-col items-end lg:items-start gap-y-2">
              <a href="https://www.instagram.com/studioakto?igsh=MWlyY3N0dHE5ZHRneg==" target="_blank" rel="noopener noreferrer" >
                <button>
                  <div className='  text-sm lg:text-base relative w-fit group overflow-hidden uppercase flex items-center lg:gap-2'>
                    <div className="w-[80%]  group-hover:right-[-82%] transition-all duration-300 h-[1px]  bg-[#2E2D2B] translate-x-[-25%] bottom-0.5 right-0 absolute"></div>
                    <p>
                      instagram
                    </p>
                    <div className="block relative">
                      <img className='  w-[60%] lg:w-full   opacity-0  ' src="/icons/black_arrow.png" alt="loading" />
                      <img className='  w-[60%] lg:w-full absolute  top-0 right-0 origin-top-right group-hover:scale-0 transition-all duration-300  ' src="/icons/black_arrow.png" alt="loading" />
                      <img className='   absolute  top-0 left-0 scale-0 origin-bottom-left group-hover:scale-100 transition-all duration-500 ease-in-out ' src="/icons/black_arrow.png" alt="loading" />
                    </div>
                  </div>
                </button>
              </a>
              <a href="https://www.linkedin.com/company/studio-arujak" target="_blank" rel="noopener noreferrer">
                <button>
                  <div className=' text-sm lg:text-base relative w-fit group overflow-hidden uppercase flex items-center lg:gap-2'>
                    <div className="w-[80%]  group-hover:right-[-82%] transition-all duration-300 h-[1px]  bg-[#2E2D2B] translate-x-[-25%] bottom-0.5 right-0 absolute"></div>
                    <p>
                      linkedIn
                    </p>
                    <div className="block relative">
                      <img className='  w-[60%] lg:w-full   opacity-0  ' src="/icons/black_arrow.png" alt="loading" />
                      <img className='  w-[60%] lg:w-full absolute  top-0 right-0 origin-top-right group-hover:scale-0 transition-all duration-300  ' src="/icons/black_arrow.png" alt="loading" />
                      <img className='   absolute  top-0 left-0 scale-0 origin-bottom-left group-hover:scale-100 transition-all duration-500 ease-in-out ' src="/icons/black_arrow.png" alt="loading" />
                    </div>
                  </div>
                </button>
              </a>

            </div>
          </div>

          <div className="w-full opacity-0 lg:opacity-100 uppercase leading-none">
            <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWstvLCXWRKfPgPVdpPPtmlcPZDpTBtzcGnkzhMGvWzMzxmzCnKrGJjfXGsbKkzvjPnTsFQgb">
              <p className="w-full lg:translate-y-3 text-[5vw] md:text-[7.1vw]">hello@arujak.com</p>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full center mt-2  lg:hidden uppercase leading-none">
        <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWstvLCXWRKfPgPVdpPPtmlcPZDpTBtzcGnkzhMGvWzMzxmzCnKrGJjfXGsbKkzvjPnTsFQgb">
          <p className=" lg:hidden lg:translate-y-3 text-[9.2vw]">hello@arujak.com</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;

