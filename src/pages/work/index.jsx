import gsap from 'gsap';
import Link from 'next/link';
import Lenis from "lenis";
import AOS from "aos";
import React, { useEffect, useRef, useState } from 'react'
import Footer from '@/components/common/Footer';
import { usePageReady } from '@/components/hooks/usePageReady';
import SplitText from 'gsap/dist/SplitText';
import useNavigation from '@/store/useNavigation';
import { useRouter } from 'next/router';
import SeoHeader from '@/components/seo/SeoHeader';
import { worksData } from '@/store/WorksData';
import Image from 'next/image';
gsap.registerPlugin(SplitText);

const Index = () => {

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



  const router = useRouter();
  const { navigate } = useNavigation();
  const [view, setView] = useState("horizontal");

  const verticalRef = useRef(null);
  const horizontalRef = useRef(null);

  const scrollWrapper = useRef(null);
  const scrollContent = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-secondary",
      once: false,
    });
    AOS.refresh();
  }, []);


  useEffect(() => {
    const wrapper = scrollWrapper.current;
    const content = scrollContent.current;

    const lenis = new Lenis({
      wrapper,
      content,
      duration: 1.2,
      orientation: "horizontal",
      gestureOrientation: "vertical",
      easing: (t) => 1 - Math.pow(2, -10 * t),
      smooth: true,
      infinite: false,
    });

    const cloneCount = 3;
    const originalChildren = Array.from(content.children);
    for (let i = 0; i < cloneCount - 1; i++) {
      originalChildren.forEach((child) => {
        const clone = child.cloneNode(true);
        content.appendChild(clone);
      });
    }

    const totalWidth = content.scrollWidth / cloneCount;

    const raf = (time) => {
      lenis.raf(time);
      const scrollLeft = lenis.scroll;
      if (scrollLeft >= totalWidth) {
        lenis.scrollTo(scrollLeft - totalWidth, { immediate: true });
      } else if (scrollLeft <= 0) {
        lenis.scrollTo(scrollLeft + totalWidth, { immediate: true });
      }
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (view === "vertical") {

      gsap.to(verticalRef.current, {
        autoAlpha: 1,
        duration: 0.6,
        ease: "ease-secondary",
        display: "grid",
      });
      gsap.to(horizontalRef.current, {
        autoAlpha: 0,
        duration: 0,
        ease: "ease-secondary",
        display: "none",
      });
      const clips = document.querySelectorAll(".ver_clip_div");
      const texts = document.querySelectorAll(".ver_wrk_anim_txt_title");

      gsap.set(clips, { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" });
      gsap.set(texts, { yPercent: 105 });

      gsap.to(clips, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "ease-secondary",
        duration: 0.8,
        stagger: 0.05,
      });

      gsap.to(texts, {
        yPercent: 0,
        ease: "ease-secondary",
        duration: 0.8,
        stagger: 0.05,
      });
    } else {
      gsap.to(horizontalRef.current, {
        autoAlpha: 1,
        duration: 0.6,
        ease: "ease-secondary",
        display: "flex",
      });
      gsap.to(verticalRef.current, {
        autoAlpha: 0,
        duration: 0,
        ease: "ease-secondary",
        display: "none",
      });
      const clips = document.querySelectorAll(".hori_clip_div");
      const texts = document.querySelectorAll(".hori_wrk_anim_txt_title");

      gsap.set(clips, { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" });
      gsap.set(texts, { yPercent: 105 });

      gsap.to(clips, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "ease-secondary",
        duration: 0.8,
        stagger: 0.05,
      });

      gsap.to(texts, {
        yPercent: 0,
        ease: "ease-secondary",
        duration: 0.8,
        stagger: 0.05,
      });
    }
  }, [view]);

  useEffect(() => {
    gsap.to(".text-clip-img", {
      backgroundPosition: "21% -30%",
      duration: 3,
      scrollTrigger: {
        trigger: ".text-clip-img",
        start: "top 20%",
        scrub: true,
      },
    });
  }, []);

  usePageReady(() => {

    gsap.to(".para_anim", {
      opacity: 1,
      ease: "ease-secondary",
      delay: 1,
      duration: 2,
    });
    gsap.to(".wrk_anim_txt", {
      transform: "translateY(0%)",
      stagger: 0.05,
      ease: "ease-secondary",
      duration: 2,
    });
    gsap.to(".clip_div", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "ease-secondary",
      duration: 1.5,
      stagger: 0.1,
    })
  });

  return (
    <>
      <SeoHeader meta={meta} />
      <div
        className="w-full pt-14 lg:pt-12  relative   flex-col justify-between">
        <div className="w-full  lg:flex px-3 mb-5 lg:mb-0 justify-center translate-y-[7vw] lg:translate-y-[2.5vw] overflow-hidden">
          <div className="leading-none overflow-hidden flex gap-2 uppercase   pr-4 lg:pr-12 text-[17vw] lg:text-[14vw] ">
            <p className="wrk_anim_txt translate-y-[105%] ">our</p>
            <h2 className="wrk_anim_txt translate-y-[105%]  italic">work</h2>
          </div>
        </div>

        <div className="w-full relative   lg:flex items-center justify-center ">
          <div className=" text-base px-3  absolute  top-[8.5vw] lg:top-[3vw] z-[99] lg:w-fit">
            <div className=" w-full lg:hidden leading-none font-semibold">
              <div className="block overflow-hidden">
                <p className='wrk_anim_txt translate-y-[105%]'   >Every project at arujaK is crafted with flow, proportion, and precision. </p>
              </div>
              <div className="block  mt-1 overflow-hidden">
                <p className='wrk_anim_txt translate-y-[105%]'   >Explore some of our featured spaces:</p>
              </div>
            </div>
            <div className=" hidden lg:block leading-none font-semibold">
              <div className="block overflow-hidden">
                <p className='wrk_anim_txt translate-y-[105%]'   >Every project at arujaK is crafted with</p>
              </div>
              <div className="block overflow-hidden">
                <p className='wrk_anim_txt translate-y-[105%]'   >flow, proportion, and precision. </p>
              </div>
              <div className="block overflow-hidden">
                <p className='wrk_anim_txt translate-y-[105%]'   >Explore some of our featured spaces:</p>
              </div>
            </div>
            <div className="flex mt-3 font-semibold gap-5">
              <button
                onClick={() => setView("vertical")}
                className={`  block overflow-hidden  uppercase text-base lg:text-sm transition-opacity duration-300 ${view === "vertical" ? "underline opacity-100" : "opacity-50"
                  }`}
              >
                <p className='wrk_anim_txt translate-y-[105%] '>
                  Vertical
                </p>
              </button>

              <button
                onClick={() => setView("horizontal")}
                className={`  block overflow-hidden  uppercase text-base lg:text-sm transition-opacity duration-300 ${view === "horizontal" ? "underline opacity-100" : "opacity-50"
                  }`}
              >
                <p className='wrk_anim_txt translate-y-[105%] '>
                  Horizontal
                </p>
              </button>
            </div>
          </div>
        </div>

        <div
          ref={horizontalRef}
          className="w-full"
          style={{ opacity: 1, display: "flex" }}
        >
          <div
            ref={scrollWrapper} className="w-full flex justify-start items-end pb-10 md:pb-[1vw] absolute h-[100dvh] z-[9] top-0 left-0 px-3 lg:px-10 pr-3 lg:pr-10 overflow-x-auto scroller_none">
            <div
              ref={scrollContent}
              className=" gap-3 lg:gap-5  flex "
            >
              {[...worksData, ...worksData].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate(router, `/work/${item.id}`)}
                  className="shrink-0 cursor-pointer w-[80vw] md:w-[23.25vw] lg:w-[22.8vw] h-full">
                  <div className="text-base  font-semibold block overflow-hidden mb-2 uppercase">
                    <p className='wrk_anim_txt hori_wrk_anim_txt_title translate-y-[105%] '>
                      {item.title}
                    </p>
                  </div>
                  <div
                    style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", }}
                    className=" hori_clip_div clip_div w-full h-[250px] overflow-hidden relative">
                    <img
                      src={item.HeroImg}
                      alt="loading"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={verticalRef}
          className={`w-full mt-44 mb-10 lg:mb-24 px-3 lg:px-10 grid gap-y-5 lg:gap-y-14 gap-x-3 lg:gap-x-5 grid-cols-1 md:grid-cols-2`}
          style={{ opacity: 1, display: "grid" }}
        >
          {worksData.map((item, idx) => (
            <div
              key={idx}
              onClick={() => navigate(router, `/work/${item.id}`)}
              className="shrink-0 cursor-pointer w-full aspect-[14/9] lg:aspect-video">
              <div className=" block overflow-hidden text-base  font-semibold mb-0.5 lg:mb-2 uppercase">
                <p
                  data-aos-anchor-placement="top-bottom"
                  data-aos="clip"
                  data-aos-delay={idx * 100} className='wrk_anim_txt ver_wrk_anim_txt_title translate-y-[105%] '>
                  {item.title}
                </p>
              </div>
              <div
                style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", }}
                className=" ver_clip_div clip_div w-full h-full overflow-hidden relative">
                <img
                  data-aos="clip"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay={idx * 100}
                  src={item.HeroImg}
                  alt="loading"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
        {view === "vertical" && <Footer />}
      </div>
    </>
  );
};

export default Index;
