import React from 'react';
import Header from '../Header';
import Image from 'next/image';
import moon from "../../../../public/moon.png"
import ThunkLight from "../../../../public/think-bulb.png";
import rocketMan from "../../../../public/rocketman.png";
import devolution from "../../../../public/Devolution.png";
import pseudo from "../../../../public/pseudo.png";

//three cloud pictures
import cloud1 from "../../../../public/cloud1.png";
import cloud2 from "../../../../public/cloud2.png";
import cloud3 from "../../../../public/cloud3.png";

import client1 from "../../../../public/client1.png";
import client2 from "../../../../public/client2.png";
import client3 from "../../../../public/client3.png";
import client4 from "../../../../public/client4.png";
import client5 from "../../../../public/client5.png";
import rightArrow from "../../../../public/rightbutton.png";
import leftArrow from "../../../../public/leftbutton.png";

const partner = [leftArrow, client1, client2, client3, client4, client5, rightArrow];

const InntroductionLowerPart = () => {
  return (
    <div className='m-auto relative -top-40 flex justify-center items-center vector1 w-full '>
      <div className='flex flex-col gap-5'>
        <div className='flex items-center justify-between gap-5 max-w-7xl mx-auto mt-40 '>
            <div className='flex flex-col gap-3 justify-center items-center w-[45%]'>
              <div className='flex flex-col gap-3'>
                <Image alt='zigzag' src={pseudo}/>
                <Image alt='devolution' src={devolution}/>
              </div>

              <h2 className='text-white text-3xl relative -top-10 font-bold'>We’ve More Then 69+ <br /> Global Partners</h2>
            </div>
            <div className='w-[40%]'>
              <p className='text-gray-400 text-xs'>Devolution Partners specializes in website development, crafting innovative digital solutions to help businesses thrive in the online world.</p>
            </div>
         </div>
         <span className='flex justify-center after:w-[90%] after:h-[1px] after:bg-gray-400 after:bg-opacity-50'></span>
         <div className='flex items-center justify-evenly'>
          {partner.map((partnerImg, index) => (
            <Image src={partnerImg} key={index} alt='images' />
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
          <div className='max-w-7xl mx-auto '>
            <Header />
              <div className='flex gap-1 items-center justify-between relative z-10'>
                  <div className='text-white text-6xl font-semibold'>   
                    <div className='flex items-center gap-3 relative'>
                      <h1>We Provide</h1>
                      <Image alt='think light' className='absolute -right-10' src={ThunkLight}/>
                    </div> 
                    <div className='flex flex-col gap-1'>
                      <h1>Smart Business</h1>
                      <h1>Solution</h1>
                    </div>
                    
                  </div>
                  <div>
                    <Image alt='rocket-man' src={rocketMan}/>
                  </div>
            
                  <Image className='absolute top-0' alt='cloud-1' src={cloud1}/>
                  <Image className='absolute top-0 right-0' alt='cloud-2' src={cloud2}/>
                  <Image className='absolute left-[40%] bottom-[30%]' alt='cloud-3' src={cloud3}/>
                  <Image className='absolute right-0' alt='cloud-3' src={moon}/>
              </div>
          </div>
        </div>
        <InntroductionLowerPart />
    </div>
  )
}

export default Introduction