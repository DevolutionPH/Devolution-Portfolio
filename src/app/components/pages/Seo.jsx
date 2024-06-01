"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import seoImg from "/Seo.png"
import zigzag from "/pseudo.png";
import faq from "/faq.png";
import { FaArrowRight } from "react-icons/fa";
import clsx from 'clsx';


const optionDropDownData = [{
    question: "Why SEO Growth Business Strategy ?",
    hiddenAnswer: "SEO increases your website's visibility on search engines, making it easier for potential customers to find you. Enhanced visibility means more opportunities for engagement and sales."
}, {
    question: "How We Help Your Projects ?",
    hiddenAnswer: "On the other hande denounce with righteous indignation and dislike men who are so beguiled and demoralzied by the charms of pleasure of the moment blinded"
}, {
    question: "Why SESO Growth business Strategy ?",
    hiddenAnswer: "SEO enhances your website's visibility on search engines, ensuring that potential customers can easily find you. Increased visibility leads to greater brand awareness and more opportunities for engagement."
}]

const Seo = () => {
    const [isOptionDropdownOpen, setIsOptionDropdownOpen] = useState(null);

    const handleOpenDropdown = (option) => {
        if (option === isOptionDropdownOpen) {
            setIsOptionDropdownOpen(null)
        } else {
            setIsOptionDropdownOpen(option);
        }
        
    }

   
    return (
        <div className='flex justify-between items-center gap-5 mx-auto max-w-7xl py-20'>
            <div className='flex justify-center flex-col w-1/2 mx-auto px-10'>
                <div className='flex flex-col gap-3'>
                    <Image alt='devolution' src={seoImg} className='w-1/3'/>
                </div>
                <Image alt='zigzag' className='relative -top-16 left-5' src={zigzag}/>
                <h2 className='text-white text-2xl relative -top-12 left-5 font-bold'>Manage Business SEO<br /> Optimization Easily</h2>
                <p className='text-gray-400 text-sm mb-5'>Quis autem vel eum iure reprehenderit qui in ea voluptates velit esse quam molestiae consequatur velillum</p>
                <div className='flex flex-col gap-5'>
                    {optionDropDownData.map((option, index) => (
                        <div key={index} onClick={() => handleOpenDropdown(index)} className='flex flex-col gray-custom-bg text-white cursor-pointer '>
                            <div className='flex items-center justify-between gap-5 p-5 '>
                                <p>{option.question}</p>
                                <FaArrowRight className={clsx("duration-300",{'rotate-90': index === isOptionDropdownOpen})}/>
                            </div>
                                
                            {index === isOptionDropdownOpen && <p className='p-5  border-t-violet-700 border-t text-xs leading-loose text-gray-500 '>{option.hiddenAnswer}</p>}
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-1/2 px-5'>
                <Image alt='faq image' src={faq}/>
            </div>
        </div>
  ) 
}

export default Seo