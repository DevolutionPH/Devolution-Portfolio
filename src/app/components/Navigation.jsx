"use client"
import React, { useState, useEffect } from 'react'
import { useMediaQuery } from '@uidotdev/usehooks';
import Link from 'next/link'
import { RiMenuLine, RiCloseLargeFill } from "react-icons/ri";
import SocialMediaAccounts from './ui/SocialMediaAccounts';
import clsx from 'clsx';

const navItem = [{
  title: "home",
  url: "/home"
}, {
  title: "clients",
  url: "/home"
}, {
  title: "services",
  url: "/home"
}, {
  title: "projects",
  url: "/home"
}, {
  title: "about",
  url: "/home"
} ,{
  title: "contact",
  url: "/home"
}]

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  useEffect(() => {
    if (isSmallDevice) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true)
    }
  }, [isSmallDevice]);

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev)
  }


  return (
    <>
      <ul className={clsx('flex gap-3 ease-in-out duration-300', {
        "absolute w-full -top-full": !isMenuOpen,
        "nav-mobile-bg flex-col fixed h-[70vh] rounded-lg inset-5 z-50 justify-start pt-[10vh] !items-start px-10 gap-5 ": isMenuOpen && isSmallDevice
      })}>
        {isMenuOpen && isSmallDevice && <RiCloseLargeFill className='absolute right-5 top-5 text-white' size={20} onClick={handleMenuOpen}/>}
        
        {navItem.map((nav, index) => (
          <li key={index} className={clsx('uppercase duration-300 w-full text-gray-500 hover:text-white active:bg-blue-400 px-3 py-2 rounded-full', {
            "text-white": isMenuOpen && isSmallDevice 
          })}>
            <Link href={nav.url}>
              {nav.title}
            </Link>
          </li>
        ))}
        {isMenuOpen && isSmallDevice && 
        <div className='absolute bottom-12'>
          <SocialMediaAccounts />
        </div>}
      </ul>

      {isSmallDevice && <RiMenuLine onClick={handleMenuOpen} color='white' size={20}/>}
    </>
  )
}

export default Navigation