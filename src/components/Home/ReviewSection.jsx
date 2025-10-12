import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { Draggable } from "gsap/dist/Draggable";

gsap.registerPlugin(ScrollToPlugin, Draggable);

const reviewData = [
  {
    pic: "/Images/HomePage/reviews/pic.png",
    name: "Mariam Sajeev",
    role: "office space ",
    desc: "Aruja really understands the core of our brand, especially when it comes to aesthetics and color combinations. She has a sharp eye for detail and always provides thoughtful, budget-friendly options that align with our needs — something I truly appreciate."
  },
  {
    pic: "/Images/HomePage/reviews/pic.png",
    name: "Deveshi Jhunjhunwala",
    role: "living room renovation ",
    desc: "We consulted with Aruja for our living room furniture and it past our expectations! She not only reccomended the pieces but also got them made and shipped all the way to Mumbai. It was a very seamless process and Aruja was a delight to work with."
  },
  {
    pic: "/Images/HomePage/reviews/pic.png",
    name: "Riya Dangayach Kothari",
    role: "office space ",
    desc: "Designing a workspace that feels like “me” was no easy task but Aruja made it look effortless. My office isn’t just a workspace, it’s functional, flexible, and thoughtfully designed to adapt as I do. Every corner feels intentional- movable elements that keep it dynamic.  "
  },
  {
    pic: "/Images/HomePage/reviews/pic.png",
    name: "Roshni Bahri Leal",
    role: "house renovation",
    desc: "Aruja and her team were great to work with! She got our vision perfectly and had amazing ideas to bring my Pinterest board to life. She was able to adapt to the UK furniture market with ease and worked within our budget. She has been reliable, friendly, and understanding!"
  },

]

const ReviewSection = () => {
  const scrollRef = useRef(null);
  const scrollRef2 = useRef(null);

  const handleScroll = (direction) => {
    if (window.innerWidth < 1024) {
      if (scrollRef2.current) {
        const scrollAmount = 300;
        const targetX =
          scrollRef2.current.scrollLeft +
          (direction === "left" ? -scrollAmount : scrollAmount);

        gsap.to(scrollRef2.current, {
          scrollTo: { x: targetX },
          duration: 1.5,
          ease: "ease-secondary",
        });
      }
    } else {
      if (scrollRef.current) {
        const scrollAmount = 470;
        const targetX =
          scrollRef.current.scrollLeft +
          (direction === "left" ? -scrollAmount : scrollAmount);

        gsap.to(scrollRef.current, {
          scrollTo: { x: targetX },
          duration: 1.5,
          ease: "ease-secondary",
        });
      }
    }
  };

  return (
    <div>
      <div className="w-full relative px-3 lg:px-10 py-16 lg:py-28">
        {/* Header */}
        <div className="w-full flex  lg:items-center justify-between">
          <div className=" text-xl lg:text-4xl uppercase flex">
            <p className="whitespace-nowrap">what our</p>
            <h2 className=" mx-1.5 lg:mx-3 italic">client</h2>
            <p>say</p>
          </div>
          <div className=" w-full flex h-full  gap-2  lg:gap-5 justify-end lg:items-center">
            <button
              onClick={() => handleScroll("left")}
              className=" size-8 lg:size-10 center uppercase bg-[#2E2D2B] text-[#FFFDF4]"
            >
              <img src="/icons/arrow_left.svg" alt="loading" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className=" size-8 lg:size-10 center uppercase bg-[#2E2D2B] text-[#FFFDF4]"
            >
              <img src="/icons/arrow_right.svg" alt="loading" />
            </button>
          </div>
        </div>

        {/* for mobile */}
        <div
          ref={scrollRef2}
          className="w-full h-[350px] lg:h-[300px] lg:hidden overflow-x-scroll lg:overscroll-none scroller_none gap-5 flex mt-10 lg:mt-14"
        >
          {/* Scrollable reviews */}
          <div
            ref={scrollRef}
            className="scroller_none  relative flex gap-5 shrink-0"
          >
            {reviewData.map((item, i) => (
              <div
                key={i}
                className="h-full w-[300px] lg:w-[450px] flex flex-col justify-between border border-black/50 shrink-0 px-3 lg:px-8 py-3 lg:py-5"
              >
                <div className="w-full flex items-center gap-3">
                  {/* <div className="size-12 shrink-0 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={item.pic}
                      alt="loading"
                    />
                  </div> */}
                  <div>
                    <p className=" text-xl lg:text-3xl leading-none capitalize">{item.name}</p>
                  <p className=" text-xs mt-1 lg:text-sm uppercase">({item.role})</p>
                  </div>
                </div>
                <div className="w-full h-[50%]  overflow-y-auto custm_review_scroller">
                  <p className=" text-base lg:text-xl leading-tight capitalize">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* for desktop */}
        <div className="w-full hidden h-[200px] lg:h-[350px] overflow-x-scroll lg:overscroll-none scroller_none gap-5 lg:flex mt-10 lg:mt-14">
          <div className=" w-[150px] lg:w-[280px] h-[200px] lg:h-full overflow-hidden shrink-0">
            <img
              className="w-full h-full object-cover"
              src="/Images/reviewImage.webp"
              alt="loading"
            />
          </div>

          {/* Scrollable reviews */}
          <div
            ref={scrollRef}
            className="w-full scroller_none relative lg:overflow-x-scroll gap-5 flex"
          >
            {reviewData.map((item, i) => (
              <div
                key={i}
                className="h-full w-[300px] relative lg:w-[500px] flex flex-col justify-between border border-black/50 shrink-0 px-5 lg:px-5 py-3 lg:py-5"
              >
                {/* <div className="w-full h-10 bg-gradient-to-b from-transparent to-white absolute left-0 bottom-0 z-[1]"></div> */}
                <div className="w-full flex items-start gap-3">
                  {/* <div className="size-12 shrink-0 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={item.pic}
                      alt="loading"
                    />
                  </div> */}
                  <div>
                    <p className=" text-2xl  capitalize leading-none">{item.name}</p>
                    <p className=" text-xs lg:text-sm uppercase">({item.role})</p>
                  </div>
                </div>
                <div className="w-full ">
                  <p className=" text-[17px] leading-tight capitalize">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReviewSection;
