import React from 'react'
import Image from 'next/image';

import ProjectImg from "../../../../public/Projects.png";
import zigzag from "../../../../public/pseudo.png";

//project images
import projectImg1 from "../../../../public/project-1.jpg";
import projectImg2 from "../../../../public/project-2.jpg";
import projectImg3 from "../../../../public/project-3.jpg";


const Project = () => {
  return (
    <div className='flex justify-between items-center gap-3 mx-auto max-w-7xl py-40 flex-col'>
      <div className='flex justify-center flex-col items-center mx-auto'>
            <div className='flex flex-col gap-3'>
                <Image alt='devolution' src={ProjectImg}/>
            </div>
            <Image alt='zigzag' className='relative -top-20' src={zigzag}/>
            <h2 className='text-white text-3xl relative -top-16 text-center font-bold'>Checkout our Recently Completed Projects</h2>
      </div> 
    </div>
  )
}

export default Project