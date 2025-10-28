import Form from '@/components/common/Form';
import { usePageReady } from '@/components/hooks/usePageReady';
import SeoHeader from '@/components/seo/SeoHeader';
import gsap from 'gsap';
import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'

const index = () => {
    const [openForm, setOpenForm] = useState(false)
    const meta = {
        title: "STUDIO AKTO — GET IN TOUCH",
        description: "Get in touch with Studio AKTO for interior design inquiries, project consultations, or collaborations across residential, commercial, and hospitality spaces.",
        canonical: "https://studioakto.com/contact",
        og: {
            title: "STUDIO AKTO — GET IN TOUCH",
            description: "Reach out to Studio AKTO to discuss your interior design project, request consultations, or explore collaboration opportunities.",
            image: "https://www.studioakto.com/logo.png" // Optional: replace with a contact hero image
        },
        twitter: {
            card: "summary_large_image",
            title: "STUDIO AKTO — GET IN TOUCH",
            description: "Contact Studio AKTO for expert interior design solutions and personalized consultations for your space.",
            image: "https://www.studioakto.com/logo.png" // Optional: replace with a contact hero image
        },
        robots: "index,follow"
    };


    usePageReady(() => {
        gsap.to(".form_pren", {
            opacity: 1,
            ease: "ease-secondary",
            duration: 1.5,
        })
        gsap.to(".ctct_anim_txt", {
            transform: "translateY(0%)",
            stagger: 0.05,
            ease: "ease-secondary",
            duration: 1.5,
        });
        gsap.to(".ctct_clip_div", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "ease-secondary",
            duration: 2,
            stagger: 0.15,
        })
    });

    return (
        <>
            <SeoHeader meta={meta} />
            <div className="w-full relative z-[1] pb-20 lg:pb-0 lg:h-screen flex flex-col lg:flex-row  ">
                <div
                    style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
                    className=" ctct_clip_div h-[60vh] relative  lg:h-full w-full  flex items-end justify-center md:justify-start lg:justify-center lg:w-[30%]">
                    <img className="w-full h-full object-cover" src="/Images/ContactPageImg.webp" alt="" />
                    <div className="absolute text-sm md:text-lg z-[1] p-8 md:left-6 lg:left-auto bottom-6 bg-[#fffdf6] w-[90%] md:w-fit lg:w-[90%] ">
                        <div className="uppercase ">
                            <div className="flex gap-5">
                                <p className='w-[80px] shrink-0  ' >Contact </p>
                                <p>-</p>
                                <a href="tel:+918130070663">
                                    <p className=' hover:underline normal-case mb-8'>+91 8130070663</p>
                                </a>
                            </div>
                            <div className="flex gap-5">
                                <p className='w-[80px] shrink-0  ' >Email</p>
                                <p>-</p>
                                <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTHVwvZPMrDzDbcCPPphsTmqGmtbrPBpLRXJTJpDMRnthvkfVgnrWvdpMQGbdfBCkcVBcL">
                                    <p className=' hover:underline normal-case mb-8'>hello@studioakto.com</p>
                                </a>
                            </div>
                            <div className="flex gap-5">
                                <p className='w-[80px] shrink-0  ' >socials</p>
                                <p>-</p>
                                <div className=" normal-case flex w-full gap-8 space-y-2">
                                    <a href="https://www.instagram.com/studioakto?igsh=MWlyY3N0dHE5ZHRneg==" target="_blank" rel="noopener noreferrer" >
                                        <p className='hover:underline'>Instagram</p>
                                    </a>
                                    <a href="https://www.linkedin.com/company/studio-arujak" target="_blank" rel="noopener noreferrer">
                                        <p className='hover:underline'>LinkedIn</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-full lg:w-[70%] lg:h-full p-8 lg:p-24 flex items-center ">
                    <div className="   w-full">
                        <div className="block relative overflow-hidden">
                            <p className='uppercase ctct_anim_txt translate-y-full text-2xl md:text-3xl lg:text-6xl'>Get in touch</p>
                        </div>
                        <div className="block relative overflow-hidden">
                            <p className='capitalize ctct_anim_txt translate-y-full mt-2 text-base leading-tight lg:text-xl'>Fill in your Details and we'll get back to you shortly. </p>
                        </div>
                        <div className="w-full form_pren opacity-0">
                            <Form openForm={openForm} setOpenForm={setOpenForm} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index