import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import CustomEase from 'gsap/dist/CustomEase'
gsap.registerPlugin(CustomEase);

const IntroLoader = () => {
    const [count, setCount] = useState(0);
    CustomEase.create("in-out-quint", "0.83,0,0.17,1");

    useEffect(() => {
        let current = 0;
        const duration = 1700;
        const minJump = 1;
        const maxJump = 2;

        const minSteps = Math.ceil(100 / maxJump);
        const maxSteps = Math.floor(100 / minJump);
        const steps = Math.floor(Math.random() * (maxSteps - minSteps + 1)) + minSteps;

        const intervalTime = duration / steps;

        const jumps = new Array(steps).fill(minJump);
        let remaining = 100 - minJump * steps;

        for (let i = 0; i < steps && remaining > 0; i++) {
            const extra = Math.min(maxJump - minJump, remaining);
            const add = Math.floor(Math.random() * (extra + 1));
            jumps[i] += add;
            remaining -= add;
        }

        if (remaining > 0) jumps[steps - 1] += remaining;

        let index = 0;
        const interval = setInterval(() => {
            current += jumps[index];
            setCount(current);
            index++;

            if (index >= jumps.length) {
                clearInterval(interval);
                setCount(100);
            }
        }, intervalTime);

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {

        gsap.to(".rotate_anim_box", {
            rotation: "+=360",
            duration: 20,
            ease: "linear",
            repeat: -1,
        });

        gsap.to(".loader_div", {
            top: "15%",
            duration: 1.2,
            delay: 0.5,
            ease: "in-out-quint",
            onComplete: () => {
                gsap.to(".loader_div", {
                    opacity: 0,
                    duration: .5,
                    delay: 2,
                });
            }
        });
        gsap.to(".loader_parent", {
            backgroundColor: "transparent",
            duration: 0,
            delay: 2.3,
            ease: "in-out-quint",
        });
        gsap.to(".left_txt", {
            left: "93%",
            duration: 1.2,
            delay: 1.7,
            ease: "in-out-quint",
        });
        gsap.to(".right_txt", {
            right: "91.5%",
            duration: 1.2,
            delay: 1.7,
            ease: "in-out-quint",
        });

        gsap.set(".center_txt , .left_txt , .right_txt", {
            display: "none",
            delay: 2.25,
            ease: "in-out-quint",
        });

    }, [])

    return (
        <div>
            <div className=" loader_parent pointer-events-none w-full h-screen fixed top-0 left-0 bg-black z-[99]">
                <div className="loader_div uppercase text-white text-xs font-semibold absolute left-1 top-[40%] -translate-y-1/2 leading-none">
                    <p>{count} percent</p>
                    <p>Loaded experience</p>
                </div>
                <p className='left_txt text-xs lg:text-sm font-semibold  uppercase absolute top-1/2 left-1 -translate-y-1/2  text-white'>Looking for</p>
                <p className='right_txt text-xs lg:text-sm font-semibold  uppercase absolute top-1/2 right-1 -translate-y-1/2  text-white'>new emotions ?</p>
                <h2 className='center_txt text-2xl lg:text-4xl font-light uppercase absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white'>studio akto</h2>

                 <div className="  md:hidden center_txt  bottom-2 left-1/2 -translate-x-[30%] absolute shrink-0  z-[1] flex items-end">
                    <div className=" shrink-0  flex items-end relative">
                        <div className=" shrink-0 size-[10vw] border-[.25vw] overflow-hidden  border-[#ffffff] flex  relative   items-end">
                            <img className='w-[5vw] invert-[100]' src="/logo.png" alt="" />
                            <div className=" shrink-0 size-[9.75vw]  bg-[#ffffff] rotate_anim_box    translate-y-[-6vw] origin-center   rotate-[-15deg] translate-x-[-0.6vw] ">
                            </div>
                        </div>
                        <div className=" shrink-0 size-[10vw] border-[.25vw] border-[#ffffff] rotate_anim_box   rotate-[-15deg] origin-center translate-y-[-6vw]  translate-x-[-5.5vw] "></div>
                    </div>
                </div>

                <div className=" hidden center_txt bottom-2 left-1/2 -translate-x-[30%] absolute shrink-0  md:flex items-end">
                    <div className=" shrink-0 size-[4vw] border-[2px] overflow-hidden   border-white flex  relative   items-end">
                        <img className='  w-[1.8vw] invert-[100]' src="/logo.png" alt="" />
                        <div className=" shrink-0 size-[3.9vw]  bg-white    rotate_anim_box rotate-[-15deg]    translate-y-[-1.5vw] origin-center    translate-x-[0.17vw] ">
                        </div>
                    </div>
                    <div className=" shrink-0 size-[4vw] border-[2px] border-white    rotate_anim_box rotate-[-15deg]    origin-center translate-y-[-1.51vw]  translate-x-[-2vw] "></div>
                </div>

            </div>
        </div>
    )
}

export default IntroLoader