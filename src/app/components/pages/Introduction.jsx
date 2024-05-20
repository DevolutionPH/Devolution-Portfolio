import React from 'react';
import Header from '../Header';
import Image from 'next/image';
import ThunkLight from "../../../../public/think-bulb.png";
import rocketMan from "../../../../public/rocketman.png";

//three cloud pictures
import cloud1 from "../../../../public/cloud1.png";
import cloud2 from "../../../../public/cloud2.png";
import cloud3 from "../../../../public/cloud3.png";

const Introduction = () => {
  return (
    <div className='flex flex-col relative h-screen bg-purple'>
        <div className='grid-bg '>
          <div className='max-w-7xl mx-auto'>
            <Header />
              <div className='flex gap-1 items-center justify-between relative'>
                  <div className='text-white text-6xl font-semibold'>   
                    <div className='flex items-center gap-3'>
                      <h1>We Provide</h1>
                      <Image alt='think light' src={ThunkLight}/>
                    </div> 
                    <div className='flex flex-col gap-5'>
                      <h1>Smart Business</h1>
                      <h1>Solution</h1>
                    </div>
                    
                  </div>
                  <div>
                    <Image alt='rocket-man' src={rocketMan}/>
                  </div>
                  <Image className='absolute top-0' alt='cloud-1' src={cloud1}/>
                  <Image className='absolute top-0 right-0' alt='cloud-2' src={cloud2}/>
                  <Image className='absolute left-[40%] bottom-0' alt='cloud-3' src={cloud3}/>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Introduction