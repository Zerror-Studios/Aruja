import React, { useEffect, useState } from "react";
import IntroLoader from "@/components/common/IntroLoader";
import Hero from "@/components/Home/Hero";
import MobileHero from "@/components/Home/MobileHero";
import ReviewSection from "@/components/Home/ReviewSection";
import VideoSection from "@/components/Home/VideoSection";
import StickyWork from "@/components/Home/StickyWork";
import SeoHeader from "@/components/seo/SeoHeader";
import VideoSwiper from "@/components/Home/VideoSwiper";
import ServicesSection from "@/components/Home/ServicesSection";

const Home = ({ meta }) => {

  return (
    <>
      <SeoHeader meta={meta} />
      <IntroLoader />
      <div className="md:hidden w-full">
        <MobileHero />
      </div>
      <div className="hidden md:block w-full">
        <Hero />
      </div>
      {/* <div className="lg:hidden w-full">
        <VideoSwiper />
      </div> */}
      {/* <div className="hidden lg:block w-full"> */}
      <VideoSection />
      {/* </div> */}
      <StickyWork />
      <ServicesSection />
      <ReviewSection />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const meta = {
    title: "STUDIO AKTO — INTERIOR DESIGN STUDIO",
    description: "Studio Akto is a multidisciplinary interior design studio blending creativity with precision, crafting functional and inspiring spaces",
    canonical: "https://studioakto.com/",
    og: {
      title: "STUDIO AKTO — INTERIOR DESIGN STUDIO",
      description: "Studio Akto is a multidisciplinary interior design studio blending creativity with precision, crafting functional and inspiring spaces",
      image: "https://www.studioakto.com/logo.png"
    },
    twitter: {
      card: "summary_large_image",
      title: "STUDIO AKTO — INTERIOR DESIGN STUDIO",
      description: "Studio Akto is a multidisciplinary interior design studio blending creativity with precision, crafting functional and inspiring spaces",
      image: "https://www.studioakto.com/logo.png"
    },
    robots: "index,follow"
  };
  return {
    props: {
      meta,
    },
  };
}