import React from 'react';
import Header from '../Header';
import Image from 'next/image';
import moon from "../../../images/moon.png"
import ThunkLight from "../../../images/think-bulb.png";
import rocketMan from "../../../images/rocketman.png";
import devolution from "../../../images/Devolution.png";
import pseudo from "../../../images/pseudo.png";

//three cloud pictures
import cloud1 from "../../../images/cloud1.png";
import cloud2 from "../../../images/cloud2.png";
import cloud3 from "../../../images/cloud3.png";

import client1 from "../../../images/client1.png";
import client2 from "../../../images/client2.png";
import client3 from "../../../images/client3.png";
import client4 from "../../../images/client4.png";
import client5 from "../../../images/client5.png";
import rightArrow from "../../../images/rightbutton.png";
import leftArrow from "../../../images/leftbutton.png";
import clsx from 'clsx';

const partner = [leftArrow, client1, client2, client3, client4, client5, rightArrow];

const InntroductionLowerPart = () => {
  return (
    <div className='m-auto relative -top-40 flex justify-center items-center vector1 w-full max-lg:px-5'>
      <div className='flex flex-col gap-5'>
        <div className='flex items-center justify-between gap-5 max-w-7xl mx-auto mt-40 max-sm:flex-col'>
            <div className='flex flex-col gap-3 justify-center items-center w-[45%] max-sm:w-full'>
              <div className='flex flex-col gap-3'>
                <Image alt='zigzag' className='relative top-8' src={pseudo}/>
                <Image alt='devolution' src={devolution}/>
              </div>

              <h2 className='text-white text-3xl max-md:text-2xl relative -top-10 max-md:-top-8 font-bold'>We’ve More Then 69+ <br /> Global Partners</h2>
            </div>
            <div className='w-[40%] max-sm:w-full'>
              <p className='text-gray-400 text-xs'>Devolution Partners specializes in website development, crafting innovative digital solutions to help businesses thrive in the online world.</p>
            </div>
         </div>
         <span className='flex justify-center after:w-[90%] after:h-[1px] after:bg-gray-400 after:bg-opacity-50'></span>
         <div className='flex items-center justify-evenly'>
          {partner.map((partnerImg, index) => (
            <Image src={partnerImg} key={index} alt='images' className={clsx({
              "max-md:hidden": index === 3 || index === 4,
              "max-sm:hidden": index === 1 || index === 5
            })} />
          ))}
         </div>
        </div>
    </div>
  )
}

const Introduction = () => {
  return (
    <div className='flex flex-col relative bg-purple-light'>
        <div className='grid-bg '>
          <div className='max-w-7xl mx-auto max-lg:px-5 max-md:flex max-md:flex-col max-md:gap-10'>
            <Header />
              <div className='flex gap-1 items-center justify-between relative z-10 max-md:flex-col'>
                  <div className='relative font-semibold w-[40%] max-md:w-full max-md:flex max-md:justify-center max-md:text-center  '>   
                    <h1 className='leading-normal text-6xl max-lg:text-4xl max-md:text-6xl max-sm:text-5xl text-white max-md:text-center'>We Provide Smart Business Solution</h1>
                    <Image alt='think light' className='absolute -top-[20%] right-0 max-lg:hidden ' src={ThunkLight}/>
                  </div>
                  <p className='text-white md:hidden text-center my-5'>Glow Your Business With Us Best Business Solutions</p>
                  <div className='w-[60%] max-md:w-full'>
                    <Image alt='rocket-man' src={rocketMan}/>
                  </div>
                  <Image className='absolute top-0 max-md:hidden' alt='cloud-1' src={cloud1}/>
                  <Image className='absolute top-0 right-0 max-md:hidden' alt='cloud-2' src={cloud2}/>
                  <Image className='absolute left-[40%] bottom-[10%] max-md:hidden' alt='cloud-3' src={cloud3}/>
                  <Image className='absolute right-5 top-[50%]' alt='cloud-3' src={moon}/>
              </div>
          </div>
        </div>
        <InntroductionLowerPart />
    </div>
  )
}

export default Introduction