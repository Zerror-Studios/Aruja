"use client";
import React, { useRef, useImperativeHandle } from "react";
import { gsap } from "gsap";
import CustomEase from "gsap/dist/CustomEase";

gsap.registerPlugin(CustomEase);
CustomEase.create("ease-secondary", "0.16, 1, 0.35, 1");

const PageTransition = React.forwardRef((_, ref) => {
  const screenRef = useRef(null);

  useImperativeHandle(ref, () => ({
    fadeIn: () =>
      new Promise((resolve) => {
        const el = screenRef.current;
        if (!el) return resolve();

        const tl = gsap.timeline({
          onComplete: resolve,
        });

        tl.set(el, { autoAlpha: 0 });
        tl.to(el, {
          autoAlpha: 1,
          ease: "ease-secondary",
          duration: 0.35,
          onComplete:() => {
            window.scrollTo(0, 0);
          }
        });
      }),

    fadeOut: () =>
      new Promise((resolve) => {
        const el = screenRef.current;
        if (!el) return resolve();

        gsap.to(el, {
          autoAlpha: 0,
          duration: 0.35,
          ease: "ease-secondary",
          onComplete: resolve,
        });
      }),

  }));

  return (
    <div
      ref={screenRef}
      className="transition_screen fixed top-0 left-0 w-screen h-screen bg-[#FFFDF6] z-[9999]"
      style={{ opacity: 0, visibility: "hidden" }}
    />
  );
});

PageTransition.displayName = "PageTransition";
export default PageTransition;
