import React from 'react'
import Link from 'next/link';
import Icon from '../Icon'

import { MdOutlineMailOutline, MdKeyboardDoubleArrowRight  } from "react-icons/md";
import SocialMediaAccounts from '../ui/SocialMediaAccounts';

const servicesData = [{
    text: "Product Design",
    url: "/"
}, {
    text: "Business Consulting",
    url: "/"
}, {
    text: "Custome Service",
    url: "/"
}, {
    text: "Brand Identity",
    url: "/"
}, {
    text: "SEO Optimization",
    url: "/"
}]

const contactData = [{
    text: "26 Rodriguez Drive, Baesa. Quezon City",
    url: "/"
}, {
    text: "devolution2024@gmail.com",
    url: "/"
}, {
    text: "+639 203 053 386",
    url: "/"
}, ]

const additionSettings = [{
    text: "Setting & Privacy",
    url: "/"
}, {
    text: "Faqs",
    url: "/"
}, {
    text: "Contact",
    url: "/"
}]

const Footer = () => {
  return (
    <div className='flex flex-col mx-auto max-w-7xl py-20 gap-10'>
        <div className='flex justify-between items-start gap-5 max-md:flex-col max-md:px-5'>
            <div className='flex flex-col gap-5'>
                <Icon />
                <p className='text-white font-semibold'>Follow</p>
                <SocialMediaAccounts />
            </div>
            <div>
                <h2 className='font-semibold text-white mb-5'>Services</h2>
                <ul className='flex flex-col gap-3'>
                    {servicesData.map((services, index) => (
                        <li key={index} className='text-gray-300 text-xs'>
                            <Link href={services.url} >
                                {services.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className='font-semibold text-white mb-5'>Contact</h2>
                <ul className='flex flex-col gap-3'>
                    {contactData.map((contact, index) => (
                        <li key={index} className='text-gray-300 text-xs'>
                            <Link href={contact.url} >
                                {contact.text}
                            </Link>
                        </li>
                    ))}    
                </ul>
            </div>
            <div className='flex flex-col gap-5 max-md:w-full'>
                <h2 className='text-white font-semibold mb-5'>Newsletter</h2>
                <h1 className='text-white '>Get Every Single Update to Join Our Newsletter</h1>
                <div className='flex justify-between border-b-gray-100 border-b text-white gap-5'>
                    <div className='items-center flex justify-between gap-3'>
                        <MdOutlineMailOutline />
                        <p className='text-xs'> Email Address</p>  
                    </div>
                    <div className='items-center flex justify-between gap-3'>
                        <p className='text-xs'>Email Address</p>  
                        <MdKeyboardDoubleArrowRight />
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-between text-white items-center max-md:px-5'>
                <p className='text-xs text-gray-400'>Copy@2024 Devolution. All Rights reserved</p>
                <ul className='flex items-center gap-5'>
                    {additionSettings.map((settings, index) => (
                        <li className='text-gray-400 text-xs' key={index}>
                            <Link href={settings.url} >
                                {settings.text}
                            </Link>
                        </li>
                    ))}
                </ul>
        </div>
    </div>
    
  )
}

export default Footer