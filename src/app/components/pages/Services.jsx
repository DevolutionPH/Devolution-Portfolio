import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa6";
import zigzag from "../../../../public/pseudo.png";
import servicesImg from "../../../../public/Services.png";
import servicesRating from "../../../../public/bg-icon-two-dark.png";
import clsx from 'clsx';

import service1 from "../../../../public/service-icon-1.png"
import service2 from "../../../../public/service-icon-2.png"
import service3 from "../../../../public/service-icon-3.png"
import service4 from "../../../../public/service-icon-4.png"
import service5 from "../../../../public/service-icon-5.png"

const servicesData = [{
    icon: service1,
    title: "Graphics Design",
    desc: "Sed perspiciatis unde omnis natus error voluptatem"
}, {
    icon: service2,
    title: "Ideation & Evaluation",
    desc: "Sed perspiciatis unde omnis natus error voluptatem"
}, {
    icon: service3,
    title: "Brand Identity",
    desc: "Sed perspiciatis unde omnis natus error voluptatem"
}, {
    icon: service4,
    title: "Custome Service",
    desc: "Sed perspiciatis unde omnis natus error voluptatem"
}, {
    icon: service5,
    title: "Web Strategy",
    desc: "Sed perspiciatis unde omnis natus error voluptatem"
}]


const Services = () => {
  return (
    <div className='flex justify-between items-center gap-3 mx-auto max-w-7xl py-20 flex-col'>
        <div className='flex justify-center flex-col items-center w-[50%] mx-auto'>
            <div className='flex flex-col gap-3'>
                <Image alt='devolution' src={servicesImg}/>
            </div>
            <Image alt='zigzag' className='relative -top-20' src={zigzag}/>
            <h2 className='text-white text-3xl relative -top-16 text-center font-bold'>Great Features To Do Your Business Growth & Development</h2>
        </div>
        <div className='w-full flex items-center relative'>
            <div className='w-[50%] flex justify-center'>
                <Image alt='services' className='max-w-96' src={servicesRating}/>
            </div>
            <div className='w-[50%] h-[55vh] relative'>
                {servicesData.map((service, index) => (
                    <div key={index} className={clsx("gray-custom-bg flex items-center gap-3 rounded-lg p-3 absolute", 
                        {
                            "top-0 left-0": index === 0,
                            "top-[25%] left-[5%]": index === 1,
                            "top-[50%] left-[10%]": index === 2,
                            "top-[75%] -left-[10%]": index === 3,
                            "top-[100%] -left-[22%]": index === 4
                        })}>
                        <Image src={service.icon} alt='servicesImage'/>
                        <div className='flex flex-col gap-2 '>
                            <p className='text-white text-sm'>{service.title}</p>
                            <p className='text-gray-500 text-xs'>{service.desc}</p>
                        </div>
                        <div className='rounded-full gray-custom-dark-bg p-2 text-white'>
                            <FaArrowRight size={20}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services;