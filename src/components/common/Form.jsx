import { RiArrowRightUpLine, RiCloseLine } from '@remixicon/react';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Form = ({ openForm, setOpenForm }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    // Handle input field changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { fullName, email, phone, city, message } = formData;
        if (!fullName || !email || !phone || !city || !message) {
            toast.error("Please fill all required fields.");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch("/api/submitEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (res.ok) {
                toast.success("Form Submitted Successfully", { position: "top-center" });
                setFormData({ fullName: "", email: "", phone: "", city: "", message: "" });
                setOpenForm(false);
            } else {
                toast.error(data.error || "Submission failed");
            }
        } catch (err) {
            toast.error("Error submitting form.");
        } finally {
            setLoading(false);
        }
    };

    // ✅ Lenis scroll control
    useEffect(() => {
        if (typeof window !== "undefined" && window.lenis) {
            if (openForm) {
                window.lenis.stop();
            } else {
                window.lenis.start();
            }
        }
    }, [openForm]);

    return (
        <>
            <ToastContainer />
            <div
                className={`relative pt-5 w-full `}
            >
                <div className="w-full">
                    <form onSubmit={handleSubmit} method="POST" className="mt-12 space-y-10">
                        {/* Full Name */}
                        <div className="w-full flex flex-col md:flex-row gap-10 lg:gap-12 ">
                            <div className=" w-full md:w-1/2 relative">
                                <p className='text-sm lg:text-lg'>Name <sup>*</sup></p>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder=""
                                    className="border-b w-full text-sm lg:text-lg outline-none bg-transparent"
                                />
                            </div>
                            <div className="relative w-full md:w-1/2">
                                <p className='text-sm lg:text-lg'>Email <sup>*</sup></p>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder=""
                                    className="border-b w-full text-sm lg:text-lg outline-none bg-transparent"
                                />
                            </div>
                        </div>

                        {/* Email + Phone + City */}
                        <div className="w-full flex flex-col md:flex-row gap-10 lg:gap-12 ">

                            <div className="relative w-full md:w-1/2">
                                <p className='text-sm lg:text-lg'>Contact <sup>*</sup></p>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder=""
                                    className="border-b w-full text-sm lg:text-lg outline-none bg-transparent"
                                />
                            </div>
                            <div className="relative w-full md:w-1/2">
                                <p className='text-sm lg:text-lg'>Location <sup>*</sup></p>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder=""
                                    className="border-b w-full text-sm lg:text-lg outline-none bg-transparent"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="w-full relative">
                            <p className='text-sm lg:text-lg'>Project Description <sup>*</sup></p>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder=""
                                className="border-b w-full h-[vh] lg:h-[6vw] resize-none break-words text-sm lg:text-lg outline-none bg-transparent"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="w-full ">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`cursor-pointer uppercase bg-[#2E2D2B] text-[#FFFDF4] py-2 px-4 lg:px-6 
      transition-all duration-300 
      ${loading ? "opacity-70 cursor-not-allowed" : "hover:scale-95 hover:rounded-[4px]"}`}
                            >
                                <p className="text-xs lg:text-sm">
                                    {loading ? "Submitting..." : "Submit"}
                                </p>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default Form;
