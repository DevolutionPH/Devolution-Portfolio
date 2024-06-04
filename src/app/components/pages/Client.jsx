import React from 'react'
import Image from 'next/image';
import saysImage from "../../../images/says.png";
import zigzag from "../../../images/pseudo.png";
import emojiBg from "../../../images/bg-pattern-8.png";
import emojiBg2 from "../../../images/bg-pattern-9.png";
import doubleQuote1 from "../../../images/span.icon.png";
import messageIcon from "../../../images/message-icon.png";

const Client = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-3 mx-auto max-w-7xl pt-20 pb-40 max-sm:py-10 px-5 relative'>
        <Image alt='emoji1' src={emojiBg} className='absolute top-[20%] -left-32 max-2xl:left-0 max-w-56 max-md:hidden'/>
        <Image alt='emoji2' src={emojiBg2} className='absolute top-[25%] -right-36 max-w-64 max-2xl:right-0 max-md:hidden'/>
        <div className='flex justify-center flex-col mx-auto px-10 w-1/2 max-md:w-full items-center'>
            <div className='flex flex-col gap-3'>
                <Image alt='devolution' src={saysImage} className=''/>
            </div>
            <Image alt='zigzag' className='relative -top-16 left-5' src={zigzag}/>
            <h2 className='text-white text-2xl relative -top-12 font-bold text-center'>People’s Say About Our <br /> Support & Services</h2>
        </div>
        <div className='flex items-center justify-between gap-5 max-md:flex-col'>
            <div className='flex flex-col justify-start w-[45%] gray-custom-bg p-10 gap-5 max-md:w-full'>
                <Image alt='double-quote' src={doubleQuote1} className='w-[40px]'/>
                <p className='border-b border-b-gray-600 text-gray-500 text-sm text leading-loose'>
                    They took the time to understand our brand and vision, translating it into a digital presence that truly reflects who we are.   
                </p>
                <div className='flex gap-5 items-center justify-between'>
                    <div className='flex flex-col '>
                        <p className='text-sm font-semibold text-white'>Alexies manalastas</p>
                        <p className='text-xs text-gray-500'>C.E.O from palong palo company.</p>
                    </div>
                    <Image alt='message-icon' className='w-[4rem]' src={messageIcon}/>
                </div>
            </div>
            <div className='flex flex-col justify-start w-[45%] gray-custom-bg p-10 gap-5 max-md:w-full'>
                <Image alt='double-quote' src={doubleQuote1} className='w-[40px]'/>
                <p className='border-b border-b-gray-600 text-gray-500 text-sm text leading-loose'>
                    They took the time to understand our brand and vision, translating it into a digital presence that truly reflects who we are.   
                </p>
                <div className='flex gap-5 items-center justify-between'>
                    <div className='flex flex-col '>
                        <p className='text-sm font-semibold text-white'>Alexies manalastas</p>
                        <p className='text-xs text-gray-500'>C.E.O from palong palo company.</p>
                    </div>
                    <Image alt='' className='w-[4rem]' src={messageIcon}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Client