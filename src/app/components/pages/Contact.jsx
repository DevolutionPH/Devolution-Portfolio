import React from 'react'
import Image from 'next/image'
import callImg from "../../../images/call.png"
import zigzag from "../../../images/pseudo.png";
import contactUsImg from "../../../images/contactus.png"

const Contact = () => {
  return (
    <div className='flex justify-between items-center gap-5 mx-auto max-w-7xl py-20 max-md:flex-col'>
        <div className='w-1/2 px-5 flex justify-center max-md:w-full'>
            <div className='flex flex-col gap-3'>
                <Image alt='contactus' src={contactUsImg}/>
            </div>
        </div>
        <div className='flex flex-col mx-auto px-10 max-sm:px-5 w-1/2 max-md:w-full justify-center'>
            <Image alt='zigzag' className='relative top-5 left-5' src={zigzag}/>
            <div className='flex flex-col gap-3'>
                <Image alt='callus' src={callImg} className='w-[50%]'/>
            </div>
            <h2 className='text-white text-2xl relative -top-10 left-5 font-bold '>People’s Say About Our <br /> Support & Services</h2>
            <form className='flex flex-col px-5 gap-3 items-start'>
                <input type="text" placeholder='Your Name*' className='rounded-sm p-3 text-sm w-full'/>
                <input type="text" placeholder='Your Email*' className='rounded-sm p-3 text-sm w-full'/>
                <textarea rows={4} placeholder='Your Message*' className='rounded-sm p-3 text-sm w-full'/>
                <button className='bg-blue-700 text-white py-3 px-4 rounded-sm inline-block text-sm'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact