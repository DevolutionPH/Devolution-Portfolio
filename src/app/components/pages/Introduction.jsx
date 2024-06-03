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
                  <div className='text-white text-6xl font-semibold w-[40%]'>   
                    <div className='flex items-center gap-3 relative'>
                      <h1>We Provide</h1>
                      <Image alt='think light' className='absolute right-5' src={ThunkLight}/>
                    </div> 
                    <div className='flex flex-col gap-1'>
                      <h1>Smart Business</h1>
                      <h1>Solution</h1>
                    </div>
                    
                  </div>
                  <div className='w-[60%]'>
                    <Image alt='rocket-man' src={rocketMan}/>
                  </div>
            
                  <Image className='absolute top-0' alt='cloud-1' src={cloud1}/>
                  <Image className='absolute top-0 right-0' alt='cloud-2' src={cloud2}/>
                  <Image className='absolute left-[40%] bottom-[10%]' alt='cloud-3' src={cloud3}/>
                  <Image className='absolute right-0' alt='cloud-3' src={moon}/>
              </div>
          </div>
        </div>
        <InntroductionLowerPart />
    </div>
  )
}

export default Introduction