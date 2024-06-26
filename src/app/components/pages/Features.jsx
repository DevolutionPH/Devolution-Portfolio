import React from 'react'
import Image from 'next/image';

//images
import emojiLogo from "../../../images/emoji.png";
import laptopman from "../../../images/laptopman.png";
import features from "../../../images/features.png";
import zigzag from "../../../images/pseudo.png";
import features1 from "../../../images/feature-1.png";
import features2 from "../../../images/feature-2.png";
import features3 from "../../../images/feature-3.png";
import features4 from "../../../images/feature-4.png";

const featuresData = [{
    icon: features1,
    title: "Business Growth",
    desc: "Sed perspiciatis unde omnis natus error voluptatem"
}, {
    icon: features2,
    title: "User Research",
    desc: "Sed perspiciatis unde omnis natus error voluptatem"
}, {
    icon: features3,
    title: "Big Data Solution",
    desc: "Sed perspiciatis unde omnis natus error voluptatem"
}, {
    icon: features4,
    title: "Product Design",
    desc: "Sed perspiciatis unde omnis natus error voluptatem"
}]

const Features = () => {
  return (
    <div className='flex justify-between items-center gap-3 mx-auto max-w-7xl max-lg:flex-col' >
      <div className='w-[40%] max-lg:w-full flex gap-1 max-md:justify-center'>
        <Image alt='emoji' className='' src={emojiLogo}/>
        <Image alt='laptop' className='max-w-72' src={laptopman}/>
      </div>  
      <div className='w-[60%] max-lg:w-full flex flex-col gap-y-10 justify-center items-center'>
        <div className='flex justify-center flex-col items-center max-md:w-[80%]'>
            <div className='flex flex-col gap-3'>
                <Image alt='zigzag' src={zigzag} className='relative top-8'/>
                <Image alt='devolution' src={features}/>
            </div>
            <h2 className='text-white text-3xl relative -top-10 font-bold'>We’ve More Then 69+ <br /> Global Partners</h2>
        </div>
        <div className='flex justify-center items-center flex-wrap gap-x-3 gap-y-10'>
            {featuresData.map((data, index) => (
                <div key={index} className='flex items-start justify-center gap-3 w-[40%] max-[600px]:w-[100%] max-[600px]:justify-evenly'>
                    <Image alt='icon-features' src={data.icon}/>  
                    <div className='flex flex-col text-white'>
                        <p className='text-sm'>{data.title}</p>
                        <p className='text-xs break-words w-52'>{data.desc}</p>
                    </div>  
                </div>
            ))}
        </div>
      </div>  
    </div>
  )
}

export default Features