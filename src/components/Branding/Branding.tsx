import Image from 'next/image';
import React from 'react';
import logo from "@/assets/Logo.png"
import logo2 from "@/assets/Group.png"
import logo3 from "@/assets/Logo (1).png"
import logo4 from "@/assets/Logo (2).png"
import logo5 from "@/assets/Logo (3).png"
import logo6 from "@/assets/Logo (4).png"
import logo7 from "@/assets/Logo (5).png"
import logo8 from "@/assets/Natroma.png"

const Branding = () => {
    return (
        <div className='my-12'>
            <p className='text-[#FFFFFF] text-center text-2xl my-6'>Trusted by nearly 5000+ paying customers</p>
            <div className='grid grid-cols-4  justify-items-center max-w-6xl mx-auto gap-8 my-14'>
                <Image className='opacity-50' src={logo} alt="logo"/>
                <Image className='opacity-50' src={logo2} alt="logo"/>
                <Image className='opacity-50' src={logo3} alt="logo"/>
                <Image className='opacity-50' src={logo4} alt="logo"/>
                <Image className='opacity-50' src={logo5} alt="logo"/>
                <Image className='opacity-50' src={logo6} alt="logo"/>
                <Image className='opacity-50' src={logo7} alt="logo"/>
                <Image className='opacity-50' src={logo8} alt="logo"/>
            </div>
        </div>
    );
};

export default Branding;