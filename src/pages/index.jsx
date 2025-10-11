import React, { useEffect, useState } from "react";
import IntroLoader from "@/components/common/IntroLoader";
import Hero from "@/components/Home/Hero";
import MobileHero from "@/components/Home/MobileHero";
import ReviewSection from "@/components/Home/ReviewSection";
import StaticImage from "@/components/Home/StaticImage";
import StickyWork from "@/components/Home/StickyWork";
import SeoHeader from "@/components/seo/SeoHeader";

const Home = ({ meta }) => {

  return (
    <>
      <SeoHeader meta={meta} />
      <IntroLoader />
      <div className="lg:hidden w-full">
        <MobileHero />
      </div>
      <div className="hidden lg:block w-full">
        <Hero />
      </div>
      <StaticImage />
      <StickyWork />
      <ReviewSection />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const meta = {
    title: "STUDIO AKTO — INTERIOR DESIGN STUDIO",
    description: "We design proportion-led interiors for homes, workspaces, and hospitality.",
    canonical: "https://studioakto.com/",
    og: {
      title: "STUDIO AKTO — INTERIOR DESIGN STUDIO",
      description: "Proportion-led interiors across residential, commercial & hospitality.",
      image: "https://www.studioakto.com/logo.png"
    },
    twitter: {
      card: "summary_large_image",
      title: "STUDIO AKTO — INTERIOR DESIGN STUDIO",
      description: "Precision and design systems for contemporary spaces.",
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